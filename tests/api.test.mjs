import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { once } from 'node:events';
import { createApp } from '../server/app.mjs';
import { StoryStore } from '../server/store.mjs';
import { validateResult } from '../shared/contract.mjs';
const input = { names: ['甲', '乙'], consent: true, memories: { meeting: '校园', decision: '一起走过困难', future: '一起做饭' }, photos: ['data:image/png;base64,aGVsbG8=', 'data:image/png;base64,aGVsbG8='] };
test('提交、重启后读取、人工完成交付；原始照片不通过查询返回', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'wedding-test-')); let server;
  try {
    server = createApp({ dataDir: directory }); server.listen(0, '127.0.0.1'); await once(server, 'listening');
    const base = `http://127.0.0.1:${server.address().port}`;
    const response = await fetch(`${base}/api/stories`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(input) });
    assert.equal(response.status, 201); const created = await response.json();
    const newStore = new StoryStore(directory); const record = await newStore.get(created.token); assert.equal(record.input.names[0], '甲');
    const chapters = ['meeting', 'decision', 'future'].map(key => ({ key, title: key, text: '真实故事', imageUrl: 'https://example.com/photo.jpg' }));
    assert.equal(validateResult({ status: 'ready', chapters }), null);
    await newStore.save({ ...record, status: 'ready', chapters });
    const result = await (await fetch(`${base}/api/stories/${created.token}`)).json(); assert.equal(result.status, 'ready'); assert.equal(result.chapters.length, 3); assert.equal(result.input, undefined); assert.equal(result.photos, undefined);
    const invalid = await fetch(`${base}/api/stories`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...input, consent: false }) }); assert.equal(invalid.status, 400);
    const missing = await fetch(`${base}/api/stories/${'0'.repeat(48)}`); assert.equal(missing.status, 404);
    const exposure = await fetch(`${base}/storage/${created.token}.json`); assert.equal(exposure.status, 404);
  } finally { if (server) { server.closeAllConnections(); await new Promise(resolve => server.close(resolve)); } await rm(directory, { recursive: true, force: true }); }
});
