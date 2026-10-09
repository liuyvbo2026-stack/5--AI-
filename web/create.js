async function readPhoto(file) {
  if (!file || file.size > 2 * 1024 * 1024 || !['image/png', 'image/jpeg', 'image/webp'].includes(file.type)) throw new Error('请上传不超过 2 MB 的 PNG、JPEG 或 WebP 图片。');
  return new Promise((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve(reader.result); reader.onerror = () => reject(new Error('照片读取失败')); reader.readAsDataURL(file); });
}

export function mountCreate() {
  document.querySelector('#create-form').onsubmit = async event => {
    event.preventDefault(); const form = event.currentTarget; const button = form.querySelector('button'); const message = document.querySelector('#message');
    button.disabled = true; message.textContent = '正在提交…';
    try {
      const fields = new FormData(form);
      const payload = { names: [fields.get('nameA'), fields.get('nameB')], memories: Object.fromEntries(['meeting', 'decision', 'future'].map(k => [k, fields.get(k)])), consent: fields.get('consent') === 'on', photos: await Promise.all([readPhoto(document.querySelector('#photoA').files[0]), readPhoto(document.querySelector('#photoB').files[0])]) };
      const response = await fetch('/api/stories', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }); const data = await response.json();
      if (!response.ok) throw new Error(data.error); location.href = data.albumPath;
    } catch (error) { message.textContent = error.message; button.disabled = false; }
  };
}
