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
