# 服务端｜D 生图、F 业务

团队接手后，D 默认维护真实 Seedream 调用与生成状态（[任务 #18](https://github.com/liuyvbo2026-stack/5--AI-/issues/18)）；F 默认维护邀请码、输入校验和确定性的风格选择（[任务 #20](https://github.com/liuyvbo2026-stack/5--AI-/issues/20)）。`app.mjs` 等共享入口由组长指定一人集成，另一人审查，避免两个 PR 同时改同一文件。

当前服务仍是旧故事接口；真实生图与邀请码是否完成以交接记录和测试为准。密钥只在服务端环境变量中读取。总览见 `docs/STRUCTURE.md`。
