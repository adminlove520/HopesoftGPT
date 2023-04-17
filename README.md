<p align="center">
  <img src="https://jinfengjia.oss-cn-beijing.aliyuncs.com/uploadFiles/uploadImgs/data/banner.png" height="300"/>
</p>
<p align="center">
  <em>🤖 组装，配置和部署自主的 AI 代理（只需浏览器） 🤖 </em>
</p>
<p align="center">
    <img alt="Node version" src="https://img.shields.io/static/v1?label=node&message=%20%3E=16.0.0&logo=node.js&color=2334D058" />
</p>
<p align="center">
<a href="https://agentgpt.reworkd.ai">🔗 短链接</a>
<span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
<a href="#-getting-started">🤝 参与贡献</a>
<span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
<a href="https://join.slack.com/t/hopesoft-hq/shared_invite/zt-1t5rns5qt-b4O6Wf1~9UOTla~nSkxpUg">🐦 Slack</a>
<span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
<a href="https://discord.gg/ewYWt9DF">📢 Discord</a>
</p>

---

<h2 align="center">
💝 支持 HopesoftGPT 的发展!! 💝
</h2>

<p align="center">
加入我们推动 HopesoftGPT 的发展. 这是一个推动AI自主的开源项目！我们面临着支付运营成本的挑战 💸，包括内部 API 和其他基础设施费用，预计每天需要支付约 150 美元 💳🤕 你的赞助将帮助我们扩大资源，增强功能和不断推动这个的项目的进展！ 🚀
</p>

HopesoftGPT 可以让你配置和部署 AI 代理。
为你定制的 AI 命名，并让它执行任何可以想象的目标。
AI 代理会先思考再执行任务。执行完任务后会学习成果 🚀.

## 🎉 Roadmap

该平台目前处于测试阶段，以下是我们的路线图：

- 通过矢量数据库实现长期记忆 🧠
- 通过 langchain 实现网络浏览能力 🌐
- 与网站和人互动 👨‍👩‍👦
- 通过 Document API 实现写作能力 📄
- 保存代理的运行 💾
- 用户和身份验证 🔐
- 通过 Stripe 提供较低限制的付费版本（降低我们的基础设施成本)

即将推出更多功能...

## 🚀 Tech Stack

- ✅ **Bootstrapping**: [create-t3-app](https://create.t3.gg).
- ✅ **Framework**: [Nextjs 13 + Typescript](https://nextjs.org/).
- ✅ **Auth**: [Next-Auth.js](https://next-auth.js.org)
- ✅ **ORM**: [Prisma](https://prisma.io).
- ✅ **Database**: [Supabase](https://supabase.com/).
- ✅ **Styling**: [TailwindCSS + HeadlessUI](https://tailwindcss.com).
- ✅ **Typescript Schema Validation**: [Zod](https://github.com/colinhacks/zod).
- ✅ **End-to-end typesafe API**: [tRPC](https://trpc.io/).

## 👨‍🚀 Getting Started

### 🐳 Docker Setup

Docker 是在本地运行 HopesoftGPT 最简单的方法。
以下是一个方便的设置脚本。

```bash
./setup.sh --docker
```

### 👷 Local Development Setup

如果你想在本地开发 HopesoftGPT

```bash
./setup.sh --local
```

### 🛠️ Manual Setup

> 🚧 你需要安装 [Nodejs +18 (LTS recommended)](https://nodejs.org/en/)。

1. 创建存储库分支:

- [Click here](https://github.com/adminlove520/HopesoftGPT/fork).

2. 克隆存储库:

```bash
git clone git@github.com:YOU_USER/HopesoftGPT.git
```

3. 安装依赖项:

```bash
cd HopesoftGPT
npm install
```

4. 使用以下内容创建.env:

> 🚧 环境变量必须符合以下 [架构](https://github.com/adminlove520/HopesoftGPT/blob/main/src/env/schema.mjs).

```bash
# 部署环境:
NODE_ENV=development

# Next Auth 配置:
# 用`openssl rand -base64 32`生成NEXTAUTH_SECRET的秘密
NEXTAUTH_SECRET=changeme
NEXTAUTH_URL=http://localhost:3000
DATABASE_URL=file:./db.sqlite

# 你的open api密钥
OPENAI_API_KEY=changeme
```

5. 使用 sqlite 修改 prisma 架构:

```bash
./prisma/useSqlite.sh
```

**注意:** 使用 sqlite 时才需要执行此步骤。

6. 准备就绪 🥳，现在可以运行了:

```bash
# 创建数据库迁移
npx prisma db push
npm run dev
```

### 🚀 GitHub Codespaces

使用[GitHub Codespaces](https://github.com/features/codespaces)在云端设置 HopesoftGPT。

1. 从 GitHub 存储库中，单击绿色的 "Code" 按钮并选择 "Codespaces"。
2. 创建一个新的 Codespace 或选择之前已创建的 Codespace。
3. Codespaces opens in a separate tab in your browser.
4. 在终端中运行 `bash ./setup.sh --local`。
5. 当终端中提示时，添加你的 OpenAI API 密钥。
6. 当构建过程完成后，单击 "Open in browser"。

- 如果要关闭 HopesoftGPT Ctrl+C
- 如果要重启 HopesoftGPT, 请在终端中运行 `npm run dev`。

运行该项目 🥳

```
npm run dev
```
### 🚀TODO List
   1. - [×] Twitter-Slack图标替换
   2. - [×] HopesoftGPT的icon
   3. - [×] 多语言功能
