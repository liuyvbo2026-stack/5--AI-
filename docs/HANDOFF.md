# Codex / Claude Code 交接

## 2026-10-10 范围核对

- 组长决定沿用 [`liuyvbo2026-stack/5--AI-`](https://github.com/liuyvbo2026-stack/5--AI-) 公开仓库；不新建重复仓库。当前目录已连接 `origin/main`，原始提交为 `b4b6142`。
- 现有 Node.js 原型实现旧故事提交、人工结果导入与三幕相册。没有 Seedream 真实调用、一次性邀请码或新目标的完整流程。旧 Issue #1–#7 已关闭并注明改按新范围执行。
- 本机 Node.js 22.18.0、npm 10.9.3、Git 2.50.1 可用。现有仓库 `npm run check` 通过；`npm test` 在允许本地监听的环境下 1/1 通过，首次受沙盒 `listen EPERM 127.0.0.1` 限制失败。测试只覆盖旧流程，不能证明新 Demo 完成。
- 本轮在 `feature/mvp-scope-alignment` 分支准备范围与交接文档。尚未接入真实 API、未运行生图、未部署、未邀请组员，也未验证费用和模型权限。
- 已建立 [Issue #8](https://github.com/liuyvbo2026-stack/5--AI-/issues/8) 跟踪范围对齐，以及 [Issue #9](https://github.com/liuyvbo2026-stack/5--AI-/issues/9) 跟踪真实 API 冒烟。两项暂由组长账号负责，完成证据需后续补充。

## 下一步

先确认 Seedream 服务已开通、可用模型和费用上限。真实 Key 由组长在安全配置界面填写，AI 不读取或展示。随后创建半天内可验收的 API 冒烟任务，使用两张经授权照片完成一次真实生图，再决定是否保留现有 Node 骨架或迁移 Next.js。

## 风险

| 等级 | 事实依据与影响 | 处理方式 | 负责人/优先级 |
| --- | --- | --- | --- |
| 高 | API 权限、余额、成本未确认；真实生图可能被阻塞 | 先做最小调用并限定费用 | 组长 / 最高 |
| 高 | 旧代码与新需求相反；旧 Issue 会诱导继续做故事功能 | 冻结旧任务，按新范围重新开 Issue | 组长 / 最高 |
| 高 | 双人身份保持效果未经验证；可能不适合演示 | 用授权样本人工验收、迭代提示词 | 生图负责人 / 高 |
| 高 | 邀请码没有实现；并发时可能重复使用 | 选持久化方案后用原子状态转移 | 后端负责人 / 高 |
| 中 | 六名组员实际能力未知；分工可能失衡 | 收集 `docs/TEAM.md` 信息 | 组长 / 高 |

准备交接时追加：日期、分支、未提交修改、已做和未做、错误、运行的测试及结果、下一条可执行任务。不要覆盖旧记录，也不要把文档计划写成代码完成。

## 2026-10-10 五步 MVP 范围收紧

- 组长确认首版只要邀请码、双图、选择多风格、一键真实生图和下载。两天内先做三套精选风格，不做复杂 Agent、老年专项、会员支付或海量模板。
- 核查代码：`web/index.html`、`web/create.js`、`web/album.js`、`server/app.mjs`、`server/store.mjs`、`shared/contract.mjs` 仍是旧故事流程；`tests/api.test.mjs` 也只测旧流程。现有 Node 静态托管与双图文件读取可作为实现参考；新五步尚无功能代码。
- 文档与计划已收紧；真实 API 权限、费用、生成质量、邀请码存储与部署仍未验证。下一条可执行任务是 [Issue #9](https://github.com/liuyvbo2026-stack/5--AI-/issues/9)：确认费用上限后，用两张授权照片完成一次真实 Seedream 双图生图，不写入密钥、真人照片或生成图到公开仓库。
- 后续实施拆为 [#11 页面](https://github.com/liuyvbo2026-stack/5--AI-/issues/11)、[#12 真实生成与下载](https://github.com/liuyvbo2026-stack/5--AI-/issues/12)、[#13 邀请码](https://github.com/liuyvbo2026-stack/5--AI-/issues/13)、[#14 部署与验收](https://github.com/liuyvbo2026-stack/5--AI-/issues/14)，均尚未完成。新看板目前是私有的；组员账号与能力资料收到后再邀请并重新分配。

## 2026-10-10 后续团队阶段目录与岗位

- 组长明确前 48 小时独立用 Codex 完成 MVP；七人分工用于之后 2～3 周的迭代。A–F 是岗位代号，尚未绑定真实组员。
- 在 `feature/mvp-scope-alignment` 分支新增 `design/`、`photography/`、`ops/` 资料目录；现有源码文件未搬动。`docs/STRUCTURE.md` 和各目录 README 标明默认责任、共享文件和旧代码限制。
- 已更新 `docs/TEAM.md`、`docs/team-tasks.md`、`docs/codex-task-cards.md`、Issue／PR 模板及相关范围文档；旧故事七人分工已从当前任务卡移除，过时部署和参考资料已删除。
- GitHub 已创建团队计划卡：[组长 #21](https://github.com/liuyvbo2026-stack/5--AI-/issues/21)、[A #15](https://github.com/liuyvbo2026-stack/5--AI-/issues/15)、[B #16](https://github.com/liuyvbo2026-stack/5--AI-/issues/16)、[C #17](https://github.com/liuyvbo2026-stack/5--AI-/issues/17)、[D #18](https://github.com/liuyvbo2026-stack/5--AI-/issues/18)、[E #19](https://github.com/liuyvbo2026-stack/5--AI-/issues/19)、[F #20](https://github.com/liuyvbo2026-stack/5--AI-/issues/20)。七张卡均自动进入原小组看板的 Todo，A–F 无实际 assignee；它们是未来阶段计划，不计入当前两天 MVP 进度。
- 本次未修改应用代码、未调用 Seedream、未执行五步功能验收。`npm run check` 与 `npm test` 通过；现有自动检查仍只验证旧原型。目录与任务改动已提交到 PR #10，等待有写入权限的组员审核；组长继续推进真实 API 冒烟及五步 MVP。团队开始前收集六名成员身份、能力和可投入时间，再正式指派小任务。
- 组长随后要求直接清理旧信息：已移除旧故事数据契约、部署说明、过时参考项目、人工导入脚本和旧结果示例；仍在使用的网页与服务端旧代码留待五步实现时替换，避免此刻让开发骨架无法运行。
