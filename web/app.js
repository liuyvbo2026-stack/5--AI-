import { mountCreate } from './create.js';
import { mountAlbum } from './album.js';

const album = location.pathname.match(/^\/album\/([a-f0-9]{48})$/);
if (album) mountAlbum(document.querySelector('#app'), album[1]);
else mountCreate();
