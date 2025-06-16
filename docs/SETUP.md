# 项目设置指南

## 首次设置

### 1. 安装依赖

```bash
pnpm install
```

### 2. 初始化 Git Hooks

```bash
# 准备 husky（会自动运行）
pnpm prepare

# 或者手动初始化
npx husky install
```

### 3. 验证设置

```bash
# 检查代码质量
pnpm lint

# 检查样式
pnpm lint:style

# 格式化代码
pnpm format

# 类型检查
pnpm check-types
```

## 开发流程

### 1. 日常开发

```bash
# 启动开发环境
pnpm dev

# 生成新组件（在 packages/ui 中）
cd packages/ui
pnpm generate:component
```

### 2. 代码提交

项目配置了自动化的 Git hooks：

**提交前会自动：**

- 运行 ESLint 修复 JavaScript/TypeScript 问题
- 运行 Stylelint 修复样式问题
- 使用 Prettier 格式化代码
- 检查提交消息格式

**正确的提交消息格式：**

```bash
git commit -m "feat(ui): add new button component"
git commit -m "fix: resolve authentication issue"
git commit -m "docs: update setup guide"
```

### 3. 构建和部署

```bash
# 构建所有包
pnpm build

# 类型检查
pnpm check-types
```

## 故障排除

### Git Hooks 不工作

如果 Git hooks 没有执行：

```bash
# 重新安装 husky
rm -rf .husky
pnpm install
pnpm prepare

# 检查权限
chmod +x .husky/pre-commit
chmod +x .husky/commit-msg
```

### 格式化问题

如果代码格式有问题：

```bash
# 格式化所有文件
pnpm format

# 修复样式问题
pnpm lint:style:fix

# 手动运行 lint-staged
pnpm dlx lint-staged
```

### VSCode 配置

确保安装了推荐的扩展：

- Prettier - Code formatter
- ESLint
- Stylelint
- Tailwind CSS IntelliSense

如果自动格式化不工作，检查 VSCode 设置：

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```
