# UI2Someone 项目文档

这里是 UI2Someone 项目的技术文档集合，记录了项目的各种实现和使用方法。

## 📚 文档目录

### 迁移指南

- [HeroUI 移除迁移指南](./heroui-removal-migration.md) - 从 HeroUI 迁移到自定义组件的完整指南

### 组件文档

- [社交个人资料卡片](./social-profile-cards.md) - 社交平台个人资料卡片组件的使用说明
- [微信卡片组件](./wechat-card-component.md) - 微信相关卡片组件的详细文档
- [B站个人资料卡片](./bilibili-profile-card.md) - B站个人资料卡片组件的使用指南

### 开发指南

- [按钮变体系统迁移](./button-variant-system-migration.md) - 按钮组件变体系统的迁移指南
- [Storybook 自动生成](./storybook-auto-generation.md) - Storybook 故事文件的自动生成机制
- [代码质量规范](./CODE_QUALITY.md) - 项目代码质量标准和规范

### 项目设置

- [项目设置指南](./SETUP.md) - 项目的完整设置和配置说明

## 🚀 快速开始

```bash
# 克隆项目
git clone https://github.com/leaperone/ui2someone.git

# 进入项目目录
cd ui2someone

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

## 📁 项目结构

```
ui2someone/
├── apps/           # 应用目录
│   ├── docs/       # 文档应用
│   └── web/        # Web 应用
├── packages/       # 包目录
│   ├── react/      # React 组件库
│   ├── eslint-config/     # ESLint 配置
│   └── typescript-config/ # TypeScript 配置
└── docs/           # 项目文档
```

## 🤝 贡献指南

欢迎贡献代码！请查看 [贡献指南](../CONTRIBUTING.md) 了解详细信息。

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](../LICENSE) 文件了解详情。
