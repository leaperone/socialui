# SocialUI 项目文档

这里是 SocialUI 项目的技术文档集合，记录了项目的各种实现和使用方法。

## 📚 文档目录

### 🛠️ 开发工具

- [**Storybook Stories 自动生成功能**](./storybook-auto-generation.md) - 自动为 React 组件生成 Storybook Stories 的工具链实现

## 🏗️ 项目结构

```
socialui/
├── apps/                      # 应用程序
├── packages/                  # 共享包
│   ├── ui/                   # UI 组件库
│   │   ├── src/              # 组件源码
│   │   ├── scripts/          # 自动化脚本
│   │   └── .storybook/       # Storybook 配置
│   ├── eslint-config/        # ESLint 配置
│   └── typescript-config/    # TypeScript 配置
├── docs/                     # 项目文档（本目录）
└── README.md                 # 项目主说明
```

## 🚀 快速开始

### 开发环境设置

1. **安装依赖**
   ```bash
   pnpm install
   ```

2. **启动 UI 组件库开发**
   ```bash
   cd packages/ui
   pnpm storybook
   ```

3. **自动生成 Stories**
   ```bash
   cd packages/ui
   pnpm generate:stories  # 一次性生成
   # 或
   pnpm watch:stories     # 监听模式
   ```

## 📖 使用指南

### UI 组件开发

1. 在 `packages/ui/src/` 下创建新的组件文件
2. 使用 TypeScript interface 定义组件属性
3. 运行 `pnpm generate:stories` 自动生成 Storybook Stories
4. 在 Storybook 中预览和测试组件

### 推荐的开发流程

```bash
# 终端 1: 启动 Stories 自动生成监听
cd packages/ui && pnpm watch:stories

# 终端 2: 启动 Storybook 开发服务
cd packages/ui && pnpm storybook

# 现在可以编写组件，Stories 会自动生成和更新
```

## 🎯 最佳实践

### 组件编写规范

- 使用 TypeScript interface 定义 props
- 遵循 React 函数组件模式
- 支持 `class-variance-authority` (CVA) 样式变体
- 提供合理的默认值

### 文件组织

- 组件文件: `packages/ui/src/*.tsx`
- Stories 文件: `packages/ui/src/stories/*.stories.ts`（自动生成）
- 样式文件: 使用 CVA 或 Tailwind CSS

## 🔧 工具链

- **包管理**: pnpm
- **构建工具**: Turbo
- **类型检查**: TypeScript
- **代码质量**: ESLint
- **样式**: Tailwind CSS + CVA
- **组件预览**: Storybook
- **自动化**: 自定义 Node.js 脚本

## 📝 贡献指南

1. 创建新功能分支
2. 编写组件和对应测试
3. 使用自动生成工具创建 Stories
4. 提交符合规范的 commit 信息
5. 更新相关文档

## 📞 支持与反馈

如有问题或建议，请：
- 查看相关文档
- 检查自动生成脚本的输出日志
- 提交 Issue 或 PR

---

*项目维护者: SocialUI Team*  
*最后更新: 2024年* 