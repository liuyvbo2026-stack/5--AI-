# 七人团队分工（两三周迭代期）

前 48 小时的五步 MVP 由组长使用 Codex 独立完成。下面是**之后**七人继续更新项目的岗位分工；A–F 只是代号，不能据此认定某个 GitHub 账号已经接下任务。实际版本和未完成项以 `docs/HANDOFF.md` 为准，团队接手时先检查，再分派新增工作。

| 岗位 | 主要职责 | 默认负责区域 | GitHub 计划任务 |
| --- | --- | --- | --- |
| 组长 | 产品范围、优先级、接口协调、最终验收和合并 | `.github/`、`docs/`、`shared/` 的跨模块变更 | [#21](https://github.com/liuyvbo2026-stack/5--AI-/issues/21) |
| A（前端背景） | 维护五步页面、上传与生成交互、结果展示、前端集成 | `web/*.js`；与 B 协作 `web/` | [#15](https://github.com/liuyvbo2026-stack/5--AI-/issues/15) |
| B（设计背景） | UI/UX、视觉规范、页面样式、移动端体验 | `design/`、`web/index.html`、`web/styles.css` | [#16](https://github.com/liuyvbo2026-stack/5--AI-/issues/16) |
| C（交付背景） | 部署、环境配置、联调、整站回归、交付记录 | `ops/`、部署配置、整站测试 | [#17](https://github.com/liuyvbo2026-stack/5--AI-/issues/17) |
| D（AI 生图引擎） | Seedream 真实调用、生成任务、可理解的失败处理与稳定性 | `server/` 的生图逻辑 | [#18](https://github.com/liuyvbo2026-stack/5--AI-/issues/18) |
| E（摄影风格） | 三套风格配置、提示词、真实结果评测与改进 | `photography/` | [#19](https://github.com/liuyvbo2026-stack/5--AI-/issues/19) |
| F（业务逻辑） | 一次性邀请码、输入校验、风格配置选择；后期再评估分析和推荐 | `server/` 的业务逻辑 | [#20](https://github.com/liuyvbo2026-stack/5--AI-/issues/20) |

D 和 E 组成视觉生成协作组。A 与 B 协作页面。C 负责整站验证，但 A、D、F 必须为自己的功能提供测试证据。各成员可以使用 Codex Cloud 或 Claude Code；工具生成的代码仍由任务负责人检查、运行和解释。

## 人员信息与正式认领

目前没有 A–F 与真实组员、GitHub 用户名的对应关系，也没有六人的可投入时间。邀请某个 GitHub 用户进入仓库，不等于把某个岗位交给他。正式指派前，每人只需私下提供：称呼和 GitHub 用户名；每周可投入小时数；做过的页面、接口、设计、测试或部署；能否自己运行项目并提交 PR；偏好岗位。不需要密码、密钥或邀请码。

任务以 2～4 小时可检查的成果拆分。按每人每周**实际可投入时间**分配约 70%～80% 的计划工作，余量留给学习、沟通和返工；不按 Issue、提交或代码行数平均。每人同时最多主做一张任务卡。卡住超过半小时就在 Issue 写明现象、已尝试的步骤和需要谁协助；每天用文字更新“已完成／下一步／阻碍”，减少临时开会。

任务完成须有可检查的交付物、适用的自动测试、手动验收步骤与结果、已知限制，并通过 PR 审查。`docs/team-tasks.md` 给出两三周任务池和验收标准；`docs/STRUCTURE.md` 标明目录边界。
