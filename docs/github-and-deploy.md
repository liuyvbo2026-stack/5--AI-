# 历史部署说明：旧故事原型

> 本文的部署与人工导入步骤仅适用于旧代码。当前仓库已存在，且产品目标已变为真实 Seedream 生图。新的部署方案需先验证 API、持久化邀请码和照片隐私；不要照本文直接上线新 Demo。当前安排见 `docs/PLAN.md`。

## 1. 团队仓库已创建

仓库地址：https://github.com/liuyvbo2026-stack/5--AI- 。当前仓库为公开仓库，仅提交代码、协作文档和无真人隐私的示例。

组长在 Settings → Collaborators 邀请另外六人。按 docs/team-tasks.md 分配七个 Issue，填负责人、目录、验收和截止时间。各成员先启动同一版代码。

## 2. 组员开发和提交 PR

```sh
git clone https://github.com/liuyvbo2026-stack/5--AI-.git ai-wedding-story
cd ai-wedding-story
npm ci
git switch -c feat/create
npm run dev
```

分支名换为本人任务。提交前运行检查，再推送：

```sh
npm run check
npm test
git add 本人修改的文件路径
git commit -m "feat: implement creation flow"
git push -u origin feat/create
```

在 GitHub 点 Compare & pull request，草稿阶段选 Draft。功能完成后转为 Ready for review，指定组长，关联 Issue。不要提交 storage 或包含真人素材的结果 JSON。

## 3. 组长合并

查看 Files changed 与 PR 验证步骤。确认只改约定模块，CI 的 verify 通过，打开网页验证行为，再选 Squash and merge。

GitHub Settings → Rules / Branches 配置 main 的 PR 要求、至少一位审核与 verify 必须通过。私人仓库相关保护能力取决于账户套餐；如果不可用，团队仍按同样约定执行 PR 合并。

依赖和冲突由作者修复。更新分支时先保持工作区已提交：

```sh
git fetch origin
git merge origin/main
npm run check
npm test
git push
```

当前骨架已拆分创作页和相册页。后续合并顺序：数据契约与接口 → 公共样式 → 创作页／相册页 → 内容 → 测试修复。

## 4. 部署：一个 Node Web 服务

推荐按已准备的 Node 服务连接 Render；此方案需要付费 Web Service 和持久磁盘。没有预算时先使用团队现有服务器或本地演示，不要用不持久的服务保存真实提交。

Render 创建 Web Service，连接 GitHub 仓库和 main：

| 设置 | 值 |
|---|---|
| Runtime | Node |
| Build Command | npm ci |
| Start Command | npm start |
| Environment | NODE_VERSION=22.18.0，DATA_DIR=/var/data |
| Persistent Disk | Mount Path=/var/data；选择足够的容量 |
| Health Check Path | /api/health |
| Auto-Deploy | After CI Checks Pass |

首次部署后保存服务 URL，检查 /api/health 返回 {"ok":true}。上传两张获准使用的照片，保存专属链接。在服务端 Shell 中将制作好的结果 JSON 放在 /var/data 下，使用同一 DATA_DIR 执行：

```sh
node scripts/import-result.mjs TOKEN /var/data/result.json
```

刷新相册，确认结果显示。再重启服务并检查同一记录仍存在，完成持久化验收。制作完成图的托管和访问控制由 AI 内容／数据负责人共同决定，example.com 是占位符。

选择部署时应评估演示现场的网络可达性。磁盘部署重启会造成短暂不可用，现场演示期间暂停自动部署。GitHub Pages 只托管静态内容，不能直接运行本项目的 Node API。

## 5. 第二天交付

在 GitHub 为已验收的提交创建 v0.1.0 标签／Release，记录在线地址、提交号、验证结果与已知限制。演示前停止新增功能；保留本地启动方式和录屏。

参考：[创建仓库](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository)、[保护分支](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)、[Render 自动部署](https://render.com/docs/deploys)、[Render 持久磁盘](https://render.com/docs/disks)。
# 组长的操作顺序

## 1. 团队仓库已创建

仓库地址：https://github.com/liuyvbo2026-stack/5--AI- 。当前仓库为公开仓库，仅提交代码、协作文档和无真人隐私的示例。

组长在 Settings → Collaborators 邀请另外六人。按 docs/team-tasks.md 分配七个 Issue，填负责人、目录、验收和截止时间。各成员先启动同一版代码。

## 2. 组员开发和提交 PR

```sh
git clone https://github.com/liuyvbo2026-stack/5--AI-.git ai-wedding-story
cd ai-wedding-story
npm ci
git switch -c feat/create
npm run dev
```

分支名换为本人任务。提交前运行检查，再推送：

```sh
npm run check
npm test
git add 本人修改的文件路径
git commit -m "feat: implement creation flow"
git push -u origin feat/create
```

在 GitHub 点 Compare & pull request，草稿阶段选 Draft。功能完成后转为 Ready for review，指定组长，关联 Issue。不要提交 storage 或包含真人素材的结果 JSON。

## 3. 组长合并

查看 Files changed 与 PR 验证步骤。确认只改约定模块，CI 的 verify 通过，打开网页验证行为，再选 Squash and merge。

GitHub Settings → Rules / Branches 配置 main 的 PR 要求、至少一位审核与 verify 必须通过。私人仓库相关保护能力取决于账户套餐；如果不可用，团队仍按同样约定执行 PR 合并。

依赖和冲突由作者修复。更新分支时先保持工作区已提交：

```sh
git fetch origin
git merge origin/main
npm run check
npm test
git push
```

当前骨架已拆分创作页和相册页。后续合并顺序：数据契约与接口 → 公共样式 → 创作页／相册页 → 内容 → 测试修复。

## 4. 部署：一个 Node Web 服务

推荐按已准备的 Node 服务连接 Render；此方案需要付费 Web Service 和持久磁盘。没有预算时先使用团队现有服务器或本地演示，不要用不持久的服务保存真实提交。

Render 创建 Web Service，连接 GitHub 仓库和 main：

| 设置 | 值 |
|---|---|
| Runtime | Node |
| Build Command | npm ci |
| Start Command | npm start |
| Environment | NODE_VERSION=22.18.0，DATA_DIR=/var/data |
| Persistent Disk | Mount Path=/var/data；选择足够的容量 |
| Health Check Path | /api/health |
| Auto-Deploy | After CI Checks Pass |

首次部署后保存服务 URL，检查 /api/health 返回 {"ok":true}。上传两张获准使用的照片，保存专属链接。在服务端 Shell 中将制作好的结果 JSON 放在 /var/data 下，使用同一 DATA_DIR 执行：

```sh
node scripts/import-result.mjs TOKEN /var/data/result.json
```

刷新相册，确认结果显示。再重启服务并检查同一记录仍存在，完成持久化验收。制作完成图的托管和访问控制由 AI 内容／数据负责人共同决定，example.com 是占位符。

选择部署时应评估演示现场的网络可达性。磁盘部署重启会造成短暂不可用，现场演示期间暂停自动部署。GitHub Pages 只托管静态内容，不能直接运行本项目的 Node API。

## 5. 第二天交付

在 GitHub 为已验收的提交创建 v0.1.0 标签／Release，记录在线地址、提交号、验证结果与已知限制。演示前停止新增功能；保留本地启动方式和录屏。

参考：[创建仓库](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository)、[保护分支](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)、[Render 自动部署](https://render.com/docs/deploys)、[Render 持久磁盘](https://render.com/docs/disks)。
