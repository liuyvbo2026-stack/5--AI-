# 历史任务草案：当前不再按此分工

> 以下七项针对旧故事相册与人工交付，和组长当前的真实 Seedream 生图目标不一致。请先读 `docs/PLAN.md` 与 `docs/TEAM.md`；六名组员能力确认后再重排任务。

| Issue | 负责人 | 分支 | 主要目录 | 验收 |
|---|---|---|---|---|
| 01 集成与部署 | 组长 | chore/setup | shared、scripts、.github、项目配置 | 首次上线；统一数据格式；检查通过 |
| 02 视觉与页面文案 | 视觉 | feat/design | web/styles.css、docs/design.md | 统一样式、移动布局、错误与等待文案 |
| 03 创作体验 | 创作页 | feat/create | web/create.js | 两张照片、三段回忆、校验、提交、失败重试 |
| 04 三幕相册与揭晓 | 相册页 | feat/album | web/album.js | 三幕显示、缺图提示、两句誓言、揭晓 |
| 05 数据与人工交付 | 后端 | feat/backend | server、tests/api.test.mjs | 持久化、进度、导入结果、原始素材读取流程 |
| 06 AI 内容与样片 | AI 制作 | feat/ai-content | docs/prompts、examples | 三张通过人工检查的样片与已确认文本 |
| 07 测试与演示 | 测试 | test/demo | tests、docs/demo.md | 试用记录、阻断问题 Issue、90秒录屏 |

当前骨架已将 web/app.js 拆成 create.js 和 album.js，统一入口由组长管理，其他人可以据此并行开工。web/index.html 由视觉负责人管理，创作页和相册页需要改变入口时在 Issue 里沟通。

第一天中午，各负责人提交 Draft PR；第一天结束真实闭环；第二天中午试用；第二天下午冻结功能、修复阻断错误、彩排。

每个 PR 限定一个可验收任务。小改动也写人工验证步骤。组长重点验证合并后仍然能提交、等待、导入、查看和揭晓。
# 七个 GitHub Issue

| Issue | 负责人 | 分支 | 主要目录 | 验收 |
|---|---|---|---|---|
| 01 集成与部署 | 组长 | chore/setup | shared、scripts、.github、项目配置 | 首次上线；统一数据格式；检查通过 |
| 02 视觉与页面文案 | 视觉 | feat/design | web/styles.css、docs/design.md | 统一样式、移动布局、错误与等待文案 |
| 03 创作体验 | 创作页 | feat/create | web/create.js | 两张照片、三段回忆、校验、提交、失败重试 |
| 04 三幕相册与揭晓 | 相册页 | feat/album | web/album.js | 三幕显示、缺图提示、两句誓言、揭晓 |
| 05 数据与人工交付 | 后端 | feat/backend | server、tests/api.test.mjs | 持久化、进度、导入结果、原始素材读取流程 |
| 06 AI 内容与样片 | AI 制作 | feat/ai-content | docs/prompts、examples | 三张通过人工检查的样片与已确认文本 |
| 07 测试与演示 | 测试 | test/demo | tests、docs/demo.md | 试用记录、阻断问题 Issue、90秒录屏 |

当前骨架已将 web/app.js 拆成 create.js 和 album.js，统一入口由组长管理，其他人可以据此并行开工。web/index.html 由视觉负责人管理，创作页和相册页需要改变入口时在 Issue 里沟通。

第一天中午，各负责人提交 Draft PR；第一天结束真实闭环；第二天中午试用；第二天下午冻结功能、修复阻断错误、彩排。

每个 PR 限定一个可验收任务。小改动也写人工验证步骤。组长重点验证合并后仍然能提交、等待、导入、查看和揭晓。
