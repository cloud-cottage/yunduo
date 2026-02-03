CloudPlan 云朵计划 - 原创 Next.js 模板

目标：直接将本仓库推送至 GitHub（仓库名 yunduo），并在 Vercel 上线上查看效果，无需本地测试。

仓库创建与初始推送（GitHub + 本地命令，仓库名为 yunduo）
- 1) 在你的 GitHub 账户创建一个新仓库，名称例如 cloudplan-site（可自行命名）
- 2) 将本地代码推送到该仓库

本地操作（在项目根目录执行）
1. 初始化 git 并提交
   git init
   git add -A
   git commit -m "feat: CloudPlan 云朵计划 原创 Next.js 模板"
2. 关联远程仓库并推送（请将 URL 替换为你的仓库地址）
   git remote add origin https://github.com/你的用户名/cloudplan-site.git
   git branch -M main
   git push -u origin main

Vercel 部署
- 登录 Vercel，选择 New Project
- 连接 GitHub，选择 cloudplan-site 仓库
- 保留默认构建设置（Vercel 会自动识别 Next.js）
- 点击 Deploy 即可上线，后续可绑定自定义域名

后续可选优化
- 将文本替换为你自己的品牌文案与图片
- 增加更多页面、组件与样式自定义
- 根据需要开启多语言支持、表单处理等功能

如需我直接提供“直接可运行”的完备仓库，请把你在 GitHub 的仓库信息告诉我（仓库地址或名字，以及是否愿意使用 GH CLI 自动创建并推送）。
