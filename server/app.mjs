import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { resolve, sep, extname } from 'node:path';
import { StoryStore } from './store.mjs';
import { validateSubmission } from '../shared/contract.mjs';
const MIME = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.svg': 'image/svg+xml' };
function json(res, status, value) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff', 'Referrer-Policy': 'no-referrer' });
  res.end(JSON.stringify(value));
}
async function body(req) {
  if (!req.headers['content-type']?.startsWith('application/json')) throw Object.assign(new Error('请使用 application/json'), { status: 415 });
  const chunks = []; let size = 0;
  for await (const chunk of req) {
    size += chunk.length;
    if (size > 6000000) throw Object.assign(new Error('照片或请求过大'), { status: 413 });
    chunks.push(chunk);
  }
  try { return JSON.parse(Buffer.concat(chunks).toString('utf8')); }
  catch { throw Object.assign(new Error('JSON 格式错误'), { status: 400 }); }
}
export function createApp({ dataDir, webDir = resolve('web') }) {
  const store = new StoryStore(dataDir);
  return createServer(async (req, res) => {
    try {
      const url = new URL(req.url, 'http://localhost');
      if (req.method === 'GET' && url.pathname === '/api/health') return json(res, 200, { ok: true });
      if (req.method === 'POST' && url.pathname === '/api/stories') {
        const input = await body(req); const error = validateSubmission(input);
        if (error) return json(res, 400, { error });
        const record = await store.create(input);
        return json(res, 201, { token: record.token, status: record.status, albumPath: `/album/${record.token}` });
      }
      const match = url.pathname.match(/^\/api\/stories\/([a-f0-9]{48})$/);
      if (req.method === 'GET' && match) {
        const record = await store.get(match[1]);
        if (!record) return json(res, 404, { error: '没有找到这个故事' });
        return json(res, 200, { status: record.status, names: record.input.names, chapters: record.chapters, message: record.message });
      }
      if (url.pathname.startsWith('/api/')) return json(res, 404, { error: '接口不存在' });
      if (req.method !== 'GET' && req.method !== 'HEAD') return json(res, 405, { error: '请求方式不支持' });
      const page = url.pathname === '/' || url.pathname === '/create' || /^\/album\/[a-f0-9]{48}$/.test(url.pathname);
      const path = page ? resolve(webDir, 'index.html') : resolve(webDir, `.${decodeURIComponent(url.pathname)}`);
      if (!path.startsWith(resolve(webDir) + sep)) return json(res, 404, { error: '文件不存在' });
      let data;
      try { data = await readFile(path); } catch { return json(res, 404, { error: '文件不存在' }); }
      res.writeHead(200, { 'Content-Type': MIME[extname(path)] || 'application/octet-stream', 'X-Content-Type-Options': 'nosniff', 'Referrer-Policy': 'no-referrer', 'Content-Security-Policy': "default-src 'self'; img-src 'self' data: https:; script-src 'self'; style-src 'self'; frame-ancestors 'none'" });
      res.end(req.method === 'HEAD' ? undefined : data);
    } catch (error) { json(res, error.status || 500, { error: error.status ? error.message : '服务暂时不可用，请稍后重试' }); }
  });
}
