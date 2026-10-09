import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createApp } from './app.mjs';
const app = createApp({ dataDir: resolve(process.env.DATA_DIR || 'storage'), webDir: fileURLToPath(new URL('../web/', import.meta.url)) });
const port = Number(process.env.PORT || 3000);
app.listen(port, '0.0.0.0', () => console.log(`Wedding Story running on port ${port}`));
