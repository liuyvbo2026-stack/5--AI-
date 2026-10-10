# 48 小时 Demo 与后续团队工作

T0 以仓库方向、Seedream 服务权限和费用上限确认后开始。这里列相对截止时间；尚未开始真实 API 生图。

| 阶段 | 截止 | 交付与验收 |
| --- | --- | --- |
| API 先行 | T+4h | 验证服务开通、模型 ID、费用上限；服务端用两张授权照片生成一张真实图片，记录非敏感结果和成本来源 |
| 最小网页 | T+16h | 替换故事表单：邀请码、双图上传/预览/更换、三种风格选择与基础文件检查 |
| 真实闭环 | T+28h | 服务端接通真实生成，显示等待/失败状态与结果预览下载；进行人工演示 |
| 补足 P0 | T+40h | 邀请码原子占用与成功核销、失败恢复；检查三种风格确实使用不同配置 |
| 验收 | T+48h | 从邀请码到下载走完五步；检查错误、并发、密钥泄漏和部署，明确未完成项 |

如 API 不可用，不能用占位图冒充真实生成。时间受威胁时先完成双图上传、真实 API、一张结果和下载，同时如实标注邀请码或多风格尚未完成；不能把不完整流程称为本版 MVP 验收通过。旧代码中的人工导入、回忆、三幕故事不计入新目标进度。

## GitHub 任务

旧 Issue #1–#7 基于另一产品范围，已从新看板移除，但保留历史。新任务为 [#8 范围与文档对齐](https://github.com/liuyvbo2026-stack/5--AI-/issues/8)、[#9 Seedream 真实 API 冒烟](https://github.com/liuyvbo2026-stack/5--AI-/issues/9)、[#11 五步页面](https://github.com/liuyvbo2026-stack/5--AI-/issues/11)、[#12 三风格真实生成与下载](https://github.com/liuyvbo2026-stack/5--AI-/issues/12)、[#13 一次性邀请码](https://github.com/liuyvbo2026-stack/5--AI-/issues/13)、[#14 部署与验收](https://github.com/liuyvbo2026-stack/5--AI-/issues/14)。已加入[小组看板](https://github.com/users/liuyvbo2026-stack/projects/1/views/1)。任务暂由组长账号负责，正式执行人待六名组员能力调查后确定。

## 七人团队阶段

与单人 48 小时 Demo 分开。先收集六名组员 GitHub 用户名、技术基础、Codex/Claude Code 使用、每日时间、本地运行能力和 GitHub 熟悉度，再按真实能力分工。前端经验者优先页面工程/集成；交付经验者优先联调/测试/部署。看板 Todo → In Progress → In Review → Done，只有验收通过才进入 Done，不按 Commit 数量评价。

当前仓库是**公开**的；组长已选择沿用。真实照片、密钥和邀请码不得入库。若日后改成免费组织下的私有仓库，GitHub 免费方案不能强制启用私有仓库受保护分支，需重新评估权限与 PR 流程。参考 [GitHub 受保护分支说明](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches)。
