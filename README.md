# AI 智能婚纱摄影平台

**当前状态：旧版故事相册代码已存在；新的 AI 婚纱照 Demo 尚未实现。** 这个仓库原名 `5--AI-`，已有一份 Node.js 的故事提交、人工导入结果和三幕相册原型。它的语法检查与旧接口测试通过，但没有 Seedream 调用、一次性邀请码，也不符合当前“无需访谈、真实生图”的产品目标。旧功能仅作为可复用代码参考。

当前目标见 [产品范围](docs/PROJECT.md) 和 [48 小时计划](docs/PLAN.md)。[交接记录](docs/HANDOFF.md)区分已完成与未验证。[决策记录](docs/DECISIONS.md)记录选择。AI 工具先读 [AGENTS.md](AGENTS.md)，Claude Code 再读 [CLAUDE.md](CLAUDE.md)。

## 当前旧代码的本地检查

```sh
npm ci
npm run check
npm test
npm run dev
```

`npm run dev` 仅启动旧故事流程，不能用它证明新婚纱照 Demo 已完成。旧流程的格式写在 `docs/data-contract.md`，已标为历史约定；新接口要在实施时另行确定并测试。

## 协作原则

每个功能从 `feature/...` 分支提交 PR，审查和验收后合入 `main`。仓库当前为公开状态，禁止提交真实 API Key、真人照片、生成结果、邀请码明文或用户资料。只用经同意的成年人照片测试。

**术语**：分支是独立修改线；PR 是请求检查并合并修改；环境变量是运行时提供给服务端的配置，真实密钥不写在仓库里。
# 我们的婚纱故事 · 两天 Web MVP 骨架

这是给七人团队并行开发的起点：Node 22+ 服务同时托管网页与 API，无外部 npm 依赖。已有真实提交、JSON 文件持久化、私密链接查询、人工结果导入、基本相册与同设备誓言揭晓。尚未接入 AI 模型，图片示例链接需要替换；誓言只在当前页面中使用，刷新不会保留。

## 启动与检查

```sh
npm ci
npm run check
npm test
npm run dev
```

打开 http://localhost:3000 。每次提交需要两张不超过 2 MB 的照片和三段回忆。保存跳转后的专属链接，链接持有人可查看这个故事。

在存储目录中，制作人员可读取原始素材。更新制作状态或交付结果：

```sh
node scripts/import-result.mjs TOKEN 结果文件.json
```

使用 `examples/result.json` 作为格式参考，先替换三张图片的 HTTPS 链接和文案。该文件中的 example.com 链接只是占位符。未替换前不能用作交付结果。准备处理状态时可以导入 `{"status":"processing","message":"正在制作你们的故事。"}`。

## 从这里开始合作

- 阅读 `brief.md` 冻结两天范围。
- 阅读 `docs/data-contract.md`，前后端遵循同一个格式。
- 阅读 `docs/github-and-deploy.md` 建仓库、邀请六位队友、审核 PR 和部署。
- 阅读 `docs/team-tasks.md` 分配七个任务。
- `AGENTS.md` 为各成员的 Codex 提供共同开发规则。

## 当前边界

只适用于少量受邀用户的课堂 MVP，单服务实例，人工处理结果；尚未实现自动 AI 制作、后台素材管理、请求限流、自动清理、远程双人誓言或批量运营。正式公开推广前需要补上这些对应需求。

`storage/`、`.env` 与真人照片不要提交到 GitHub。JSON 文件只有服务运行用户可访问，查询 API 不返回原始照片。生成图片的链接需要组员选择适当的访问范围，HTTPS 本身不代表图片私密。
