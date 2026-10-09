# 相近的 GitHub 项目

核对日期：2026-10-09。已阅读仓库说明与两个婚纱项目的 package.json；未安装运行这些第三方项目，因此功能与部署成功率还没有实测。

| 项目 | 相近功能 | 两天内的用途 | 条件与限制 |
|---|---|---|---|
| [qqzhangyanhua/ai-wedding](https://github.com/qqzhangyanhua/ai-wedding) | 照片上传、模板、生成、画廊、后台配置 | 优先评估是否可用作现成底座 | Next.js、PostgreSQL、Prisma、MinIO/OSS、外部图像 API；README 声明 MIT |
| [SamurAIGPT/ai-wedding-photo](https://github.com/SamurAIGPT/ai-wedding-photo) | 婚纱场景模板、图像生成、作品记录 | 参考生成工作台、任务状态和画廊 | MuAPI、PostgreSQL、Google OAuth、Stripe 等配置；README 声明 MIT；README 框架版本表述不一致，package.json 为 Next 16.2.6 |
| [photorealistic-ai-couple-photo-prompts](https://github.com/MarvsonHelbs/photorealistic-ai-couple-photo-prompts) | 情侣与婚纱照片提示词及样例 | AI 组员直接参考拍摄场景提示词，适配真实故事 | 提示词集合，不是完整 Web 应用；CC BY 4.0，使用时保留相应署名 |
| [HVision-NKU/StoryDiffusion](https://github.com/HVision-NKU/StoryDiffusion) | 连续画面的角色一致性 | 后续研究故事图一致性 | Python/PyTorch；低显存演示测试设备为 24 GB 显存，作者预期适用于大于 20 GB 显存；Apache-2.0 |

建议由数据与 AI 两位负责人先限时一小时评估第一个项目：能否启动、已有 API 账号是否可用、能否生成一张可接受的图。通过后再考虑把其作为团队仓库的起点；未通过则继续当前骨架和人工交付流程。无论采用哪一个，仍需自行完成三幕真实故事、同设备誓言和共同揭晓体验。

代码许可与图像 API、模型权重、模板图片的使用条件是不同事项。两个婚纱仓库的 MIT 信息目前依据 README，正式复制代码时还需确认具体授权文件与保留说明。
