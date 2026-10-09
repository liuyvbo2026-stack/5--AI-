# 发给七位成员的 Codex 任务卡

各自在本机克隆同一个团队仓库，把克隆目录作为 Codex 工作区。各成员的聊天记录不会自动合并，团队通过提交到仓库的文档、Issue 与 PR 交接工作。

开工前由组长确定使用当前骨架还是一个已经验证可运行的第三方底座。如果换底座，先统一目录和数据约定，再派任务。

下面七段提示词的 GitHub Issue 编号由组长按实际编号补充。Codex 未取得仓库写入权限时，仍可完成本地修改，由成员自己推送分支和创建 PR。

## 1. 组长

请阅读 AGENTS.md、brief.md、docs/data-contract.md 和 docs/github-and-deploy.md。你协助我管理这个七人、两天完成的 Web MVP。先验证项目启动、npm run check 与 npm test。确认各模块的数据约定和负责目录，整理待办 Issue。共享入口 web/app.js、shared/contract.mjs、依赖与 CI 由我协调。每个 PR 审核时先检查范围和验证证据，再实际验证用户流程；列出问题供作者修复。只有我明确授权后才执行远程合并或部署。

## 2. 视觉负责人

请阅读 AGENTS.md、brief.md、docs/data-contract.md。我的分支是 feat/design，负责 web/styles.css、web/index.html 和 docs/design.md。改进婚纱故事的页面视觉、文字、移动布局和等待体验。先保持已有 DOM id、表单 name 和脚本入口兼容。若需要改变这些，写清变更并通知创作页负责人。完成后运行检查，附截图与人工验证步骤，整理 PR 描述。不修改其他成员的功能模块。

## 3. 创作页负责人

请阅读 AGENTS.md、brief.md、docs/data-contract.md。我的分支是 feat/create，负责 web/create.js。完成两张照片与三段回忆的填写、校验、提交、错误提示与重试；严格遵循已有 API 格式。需要 HTML 或公共样式变更时先记录需求给视觉负责人。不得修改相册模块。完成后检查，并验证成功提交、照片超限、服务错误后重试，整理 PR 描述。

## 4. 相册负责人

请阅读 AGENTS.md、brief.md、docs/data-contract.md。我的分支是 feat/album，负责 web/album.js。完成等待、失败、三幕相册、图片无法加载提示、同设备双人誓言与共同揭晓。保持安全的文本输出；不把用户文本插入 innerHTML。需要公共样式时通知视觉负责人。完成后验证每种状态与揭晓流程，整理 PR 描述。

## 5. 后端负责人

请阅读 AGENTS.md、brief.md、docs/data-contract.md。我的分支是 feat/backend，负责 server/ 和接口测试。完善真实提交、持久化、私密链接查询、素材读取和人工结果导入流程。查询 API 不返回原始照片。数据格式变化先提出影响说明，待组长协调后再改 shared/contract.mjs；导入脚本变更与组长协调。完成后运行检查与接口测试，整理 PR 描述。

## 6. AI 内容负责人

请阅读 AGENTS.md、brief.md、docs/data-contract.md。我的分支是 feat/ai-content，负责 docs/prompts/ 和不含真人隐私的 examples/。根据双方获准提供的回忆，设计相遇、决定、未来三幕提示词和文案，真实经历不得编造，未来标注为想象。协助制作三张一致的婚纱照并列出人工检查点。按结果 JSON 格式交接给数据负责人。真人照片、专属 token 和真实回忆不提交 GitHub。

## 7. 测试与演示负责人

请阅读 AGENTS.md、brief.md、docs/data-contract.md。我的分支是 test/demo，负责 docs/demo.md、docs/test-report.md 和新的独立测试文件。执行提交、等待、失败、结果交付、相册与揭晓的完整验收，观察两位独立试用者操作。只记录真实反馈，在 GitHub Issue 中说明复现步骤、预期与实际结果。问题交由模块负责人修复。准备90秒演示脚本与备用录屏清单，整理 PR 描述。
