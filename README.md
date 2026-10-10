# 多风格 AI 婚纱照生成器 · 48 小时 MVP

组长确认的第一版只有五步：**输入邀请码 → 上传两张照片 → 选择风格 → 一键真实生成 → 预览并下载照片**。两天内先做三种可切换的精选风格：韩式极简、复古胶片、新中式。它们的市场热度尚未验证，因此页面不标“爆款”。

**当前状态：这五步尚未实现。** 仓库原有的页面和接口是“填写三段回忆 → 提交故事 → 人工导入三幕相册”的旧原型。运行 `npm run dev` 看到的是旧页面，不代表新 MVP 已经完成。范围与验收见 [产品说明](docs/PROJECT.md)、[48 小时计划](docs/PLAN.md)和 [交接记录](docs/HANDOFF.md)。

## 两个阶段与目录负责人

- **前 48 小时：**组长使用 Codex 独立完成并验收五步 MVP；A–F 暂不领取开发任务。
- **随后 2～3 周：**六名组员从已完成的实际版本接手，按 [七人分工](docs/TEAM.md)和[团队任务](docs/team-tasks.md)迭代。A–F 是岗位代号，尚未绑定真实姓名或 GitHub 账号。

代码仍按功能放置，不按人名分文件夹，避免换负责人时搬动代码。每个目录的默认负责人、共同修改的边界和新建的设计、摄影、交付资料目录见[仓库目录与负责区域](docs/STRUCTURE.md)。目录负责人负责检查交付，不代表只有他能修改；每项变更仍用 Issue、独立分支和 PR 协作。

团队阶段的岗位任务卡已建好：[组长](https://github.com/liuyvbo2026-stack/5--AI-/issues/21)、[A 前端](https://github.com/liuyvbo2026-stack/5--AI-/issues/15)、[B 设计](https://github.com/liuyvbo2026-stack/5--AI-/issues/16)、[C 交付](https://github.com/liuyvbo2026-stack/5--AI-/issues/17)、[D 生图](https://github.com/liuyvbo2026-stack/5--AI-/issues/18)、[E 摄影](https://github.com/liuyvbo2026-stack/5--AI-/issues/19)、[F 业务](https://github.com/liuyvbo2026-stack/5--AI-/issues/20)。这些是接手后的计划任务，不影响组长当前的 [48 小时任务](docs/PLAN.md)。

## 先改什么

1. 先完成 [Issue #9：真实 Seedream 双图生图冒烟](https://github.com/liuyvbo2026-stack/5--AI-/issues/9)，确认账号权限、费用上限和一张真实结果。未成功前不把占位图当作生图功能。
2. 按 [#11 五步页面](https://github.com/liuyvbo2026-stack/5--AI-/issues/11) 和 [#12 真实生成与下载](https://github.com/liuyvbo2026-stack/5--AI-/issues/12)，在独立分支替换旧故事流程。优先复用现有 Node 22 服务与静态页面托管；不为了两天演示迁移框架。
3. 按 [#13 一次性邀请码](https://github.com/liuyvbo2026-stack/5--AI-/issues/13) 做服务端原子占用，生成成功后核销。双图仅做格式、大小、可读取等基础检查；不接复杂视觉分析或 Agent。
4. 按 [#14 真实演示与验收](https://github.com/liuyvbo2026-stack/5--AI-/issues/14) 用授权的成年人照片检查三种风格切换、错误提示、结果下载和邀请码并发行为。合格后再通过 PR 合入 `main`。

旧文件用途：`web/` 是旧故事界面；`server/` 是旧故事接口和存储；`shared/` 是旧数据校验；`tests/` 只覆盖旧故事流程。替换时必须同步修改前后端和测试，不能沿用旧测试的通过结果证明新流程可用。旧代码在 Git 历史中保留，待新流程通过验收后才从主代码路径清理。

## 明确不做

爱情访谈、三幕故事、人工结果导入、复杂 Agent、老年专项、会员支付、海量模板、自动视觉推荐和图片质量评分。真实 API Key、邀请码明文、真人照片和生成结果不得提交到公开仓库。

## 本地检查

```sh
npm ci
npm run check
npm test
npm run dev
```

目前这些命令仍检查或运行旧原型。AI 工具先读 [AGENTS.md](AGENTS.md)，Claude Code 再读 [CLAUDE.md](CLAUDE.md)；每项功能从 `feature/...` 分支提交 PR，审查后合入 `main`。分支是独立修改线，PR 是请求检查和合并修改。
