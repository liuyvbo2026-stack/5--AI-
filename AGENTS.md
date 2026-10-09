# 项目共同规则

- 先阅读 brief.md、docs/data-contract.md 与分配给你的 GitHub Issue。
- 只处理本人任务的目录；共享文件需要通知对应负责人。
- shared/contract.mjs、package.json、package-lock.json、server/index.mjs 与 CI 由组长协调更改。
- 视觉负责人负责 web/styles.css 与 web/index.html；创作页负责人只改 web/create.js，相册页负责人只改 web/album.js。web/app.js 是组长负责的统一入口。
- 使用功能分支提交 PR，提交前运行 npm run check 与 npm test。
- UI 改动附浏览器截图和人工验证步骤；不能仅凭 Node 语法检查宣称页面功能已验证。
- 无法获得真实接口时，假数据必须遵循 shared/contract.mjs，并标明仅用于开发。
- 使用 textContent 输出用户文本，不把用户故事插入 innerHTML。
- 不将原始人像、用户回忆、访问 token、API 密钥或 .env 提交到仓库。
- 不编造访谈、竞品事实或情侣经历。不声称已实现自动 AI 生成。
- PR 说明写清用户行为变化、验证证据、数据约定变化、部署配置与剩余问题。
