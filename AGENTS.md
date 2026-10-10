# Codex / Claude Code 共同规则

先读 `README.md`、`brief.md`、`docs/PROJECT.md`、`docs/PLAN.md`、`docs/HANDOFF.md`、`docs/DECISIONS.md` 及相关 Issue。现有代码和部分旧 Issue 仍服务于“婚纱故事、人工交付”旧方案；新目标是无访谈、真实 Seedream 生图。不能把旧功能当成新目标已经完成。

1. 开工前检查实际代码、分支、未提交修改和 Issue。不要让 Codex 与 Claude Code 同时改同一文件。每项工作使用独立 `feature/...` 分支，走 PR；不要直接向 `main` 推未经检查的功能。
2. 48 小时 Demo 首先打通“两张授权照片 → 服务端真实 Seedream 调用 → 一张婚纱照 → 预览下载”。邀请码等其余 P0 项按 `docs/PLAN.md` 补齐。不加入访谈、三幕故事、支付、视频、微服务、RAG 或不必要的 Agent 框架。
3. 现有 `shared/contract.mjs` 与 `docs/data-contract.md` 描述旧流程。改公共格式时，同一 PR 修改前后端和必要测试，向相关负责人说明影响。不要将旧故事 API 误当成新生图 API。
4. 真实密钥只在服务端环境变量中读取。不要读取、展示、提交或写入日志；不要提交用户照片、生成结果、邀请码明文、访问 token 或 `.env` 实值文件。`.env.example` 只能留空值或非秘密示例。
5. 邀请码由服务端原子占用，成功核销，明确失败后恢复；状态不确定时保留待排查，不可直接释放。管理入口必须受到保护。未实现前不得声称安全。
6. 完成任务时分别报告代码审查、自动测试、人工功能验收和未验证项。对零基础组长解释新术语的用途。不编造 API 成功调用、仓库状态或成员进度。
7. 更新 `docs/HANDOFF.md` 中的已做、未做、错误、测试及结果、分支、未提交修改、下一步；重要决定写入 `docs/DECISIONS.md`。

用户说“准备交接”时按第 7 条检查并记录。用户说“接手项目”时先读以上文件、核对 Git 和实际代码，再继续当前任务。
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
