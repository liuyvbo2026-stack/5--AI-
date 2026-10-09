export const STATUSES = ['submitted', 'processing', 'ready', 'failed'];
export const CHAPTER_KEYS = ['meeting', 'decision', 'future'];
export function validateSubmission(value) {
  if (!value || typeof value !== 'object') return '请求必须是 JSON 对象';
  if (value.consent !== true) return '请先取得两位参与者的同意';
  if (!Array.isArray(value.names) || value.names.length !== 2 || value.names.some(n => typeof n !== 'string' || !n.trim() || n.length > 40)) return '请填写两个人的称呼';
  if (!value.memories || CHAPTER_KEYS.some(k => typeof value.memories[k] !== 'string' || !value.memories[k].trim() || value.memories[k].length > 1000)) return '请填写三段故事，每段最多 1000 字';
  if (!Array.isArray(value.photos) || value.photos.length !== 2 || value.photos.some(p => typeof p !== 'string' || !/^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/]+=*$/.test(p) || p.length > 2800000)) return '请上传两张 PNG、JPEG 或 WebP 照片，每张不超过 2 MB';
  return null;
}
export function validateResult(value) {
  if (!value || !STATUSES.includes(value.status)) return '无效状态';
  if (value.status === 'failed' && (typeof value.message !== 'string' || !value.message.trim())) return '失败状态需要填写用户可读的原因';
  if (value.status === 'ready' && (!Array.isArray(value.chapters) || value.chapters.length !== 3 || value.chapters.some((c, i) => c.key !== CHAPTER_KEYS[i] || typeof c.title !== 'string' || !c.title.trim() || typeof c.text !== 'string' || !c.text.trim() || typeof c.imageUrl !== 'string' || !c.imageUrl.startsWith('https://')))) return '完成状态需要按顺序提供三幕标题、正文和 HTTPS 图片链接';
  return null;
}
