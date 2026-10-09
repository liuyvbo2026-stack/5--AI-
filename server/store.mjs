import { mkdir, readFile, writeFile, rename } from 'node:fs/promises';
import { join } from 'node:path';
import { randomBytes } from 'node:crypto';
export class StoryStore {
  constructor(directory) { this.directory = directory; }
  path(token) {
    if (!/^[a-f0-9]{48}$/.test(token)) throw new Error('INVALID_TOKEN');
    return join(this.directory, `${token}.json`);
  }
  async save(record) {
    await mkdir(this.directory, { recursive: true, mode: 0o700 });
    const target = this.path(record.token);
    const temp = `${target}.${randomBytes(6).toString('hex')}.tmp`;
    await writeFile(temp, JSON.stringify(record), { mode: 0o600 });
    await rename(temp, target);
  }
  async create(input) {
    const record = { token: randomBytes(24).toString('hex'), status: 'submitted', createdAt: new Date().toISOString(), input, chapters: [], message: '已收到故事，正在等待制作。' };
    await this.save(record);
    return record;
  }
  async get(token) {
    try { return JSON.parse(await readFile(this.path(token), 'utf8')); }
    catch (error) { if (error.code === 'ENOENT' || error.message === 'INVALID_TOKEN') return null; throw error; }
  }
}
