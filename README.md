# ITStudio-Wiki

爱特工作室知识库与合作平台，基于 VitePress 构建的现代化文档网站。

## 项目简介

ITStudio-Wiki 是爱特工作室的官方文档平台，旨在：
- 提供工作室的完整知识库
- 促进团队协作和知识共享
- 展示工作室的发展历程和成果
- 为新成员提供学习和培训资源

## 功能特点

- 基于 Markdown 的文档编写
- 基于 VitePress 的快速静态站点
- 现代化的界面设计
- 内置本地搜索功能
- 响应式设计，支持多端访问
- 中文优化的文档体验

## 快速开始

### 环境要求

- [Node.js](https://nodejs.org/) >= 18
- [npm](https://www.npmjs.com/)

### 安装步骤

1. 克隆仓库：
```bash
git clone https://github.com/ITStudioOUC/ITStudio-Wiki.git
cd ITStudio-Wiki
```

2. 安装依赖：
```bash
npm install
```

### 开发与部署

开发模式：
```bash
npm run docs:dev
```

构建生产版本：
```bash
npm run docs:build
```

预览构建结果：
```bash
npm run docs:preview
```

## 项目结构

```
ITStudio-Wiki/
├── .vitepress/          # VitePress 配置
│   ├── config.mts       # 站点配置文件
│   └── theme/           # 主题相关文件
├── src/                 # 文档源文件
│   ├── contact/         # 联系相关页面
│   ├── public/          # 静态资源文件
│   ├── wiki/           # Wiki 文档目录
│   └── index.md        # 首页
└── package.json        # 项目配置文件
```

## 参与贡献

我们欢迎所有形式的贡献，无论是新功能、文档改进还是问题反馈。

1. Fork 本仓库
2. 创建你的特性分支：`git checkout -b feature/YourFeature`
3. 提交你的改动：`git commit -m 'Add some feature'`
4. 推送到分支：`git push origin feature/YourFeature`
5. 提交 Pull Request

## 文档编写指南

1. 所有文档都使用 Markdown 格式
2. 文档应放在适当的目录结构中
3. 图片等静态资源请放在 `src/public` 目录下
4. 新增文档需要在 `.vitepress/config.mts` 中添加相应的导航配置

## 许可证

本项目采用 Apache2 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情