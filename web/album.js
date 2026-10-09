function element(tag, text, className) {
  const node = document.createElement(tag); if (text) node.textContent = text;
  if (className) node.className = className; return node;
}

export function mountAlbum(app, token) {
  app.replaceChildren(element('h1', '你们的故事正在这里发生'), element('p', '正在查询制作进度…'));
  async function load() {
    try {
      const response = await fetch(`/api/stories/${token}`); const data = await response.json();
      if (!response.ok) throw new Error(data.error);
      app.replaceChildren(element('p', 'OUR STORY', 'eyebrow'), element('h1', `${data.names[0]} & ${data.names[1]}`));
      if (data.status !== 'ready') {
        app.append(element('p', data.message || '正在制作中。请保存此链接，稍后回来查看。'));
        if (data.status !== 'failed') setTimeout(load, 5000); return;
      }
      for (const chapter of data.chapters) {
        const section = element('section', null, 'chapter'); section.append(element('h2', chapter.title));
        const img = element('img'); img.src = chapter.imageUrl; img.alt = chapter.title; img.referrerPolicy = 'no-referrer';
        section.append(img, element('p', chapter.text)); app.append(section);
      }
      const vows = element('section', null, 'vows'); vows.append(element('h2', '一起打开，下一句话'));
      const fields = data.names.map(name => {
        const label = element('label', `${name}，写一句给对方的话`); const input = element('textarea'); input.maxLength = 500; label.append(input); vows.append(label); return input;
      });
      const reveal = element('button', '共同揭晓');
      reveal.onclick = () => { if (fields.some(f => !f.value.trim())) return; vows.replaceChildren(element('h2', '从今天，走向以后'), ...fields.map((f, i) => element('p', `${data.names[i]}：${f.value}`))); };
      vows.append(reveal); app.append(vows);
    } catch (error) { app.replaceChildren(element('h1', '暂时无法打开故事'), element('p', error.message)); const retry = element('button', '重新查询'); retry.onclick = load; app.append(retry); }
  }
  load();
}
