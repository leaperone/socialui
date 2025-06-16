# 代码质量工具配置

这个项目配置了 ESLint、Prettier 和 Stylelint 来保证代码质量和一致性。

## 工具说明

### ESLint

- 用于 JavaScript/TypeScript 代码检查
- 配置在 `packages/eslint-config` 中
- 支持 React、Next.js 和 Node.js 项目

### Prettier

- 用于代码格式化
- 配置文件：`.prettierrc`
- 忽略文件：`.prettierignore`

### Stylelint

- 用于 CSS/SCSS 样式检查
- 配置在 `packages/eslint-config/stylelint.js` 中
- 支持 Tailwind CSS 规则

## 可用命令

### 根目录命令

```bash
# 检查所有包的代码规范
pnpm lint

# 检查所有包的样式规范
pnpm lint:style

# 修复所有包的样式问题
pnpm lint:style:fix

# 格式化所有包的代码
pnpm format

# 检查格式化是否符合规范
pnpm format:check

# 格式化根目录文件
pnpm format:root

# 类型检查
pnpm check-types
```

### 单个包命令

```bash
# 进入任意包目录（如 packages/ui）
cd packages/ui

# 检查 ESLint
pnpm lint

# 检查样式
pnpm lint:style

# 修复样式问题
pnpm lint:style:fix

# 格式化代码
pnpm format

# 检查格式化
pnpm format:check
```

## VSCode 集成

项目已配置 VSCode 设置文件：

- 保存时自动格式化
- 自动修复 ESLint 和 Stylelint 问题
- 推荐安装相关扩展

### 推荐扩展

- Prettier - Code formatter
- ESLint
- Stylelint
- Tailwind CSS IntelliSense

## 配置文件说明

- `.prettierrc` - Prettier 配置
- `.prettierignore` - Prettier 忽略文件
- `packages/eslint-config/` - ESLint 配置包
- `packages/eslint-config/stylelint.js` - Stylelint 配置
- `.vscode/settings.json` - VSCode 设置
- `.vscode/extensions.json` - VSCode 扩展推荐

## Git Hooks（可选）

可以考虑添加 husky 和 lint-staged 来在提交前自动检查代码：

```bash
# 安装依赖
pnpm add -D husky lint-staged

# 初始化 husky
npx husky init
```

然后在 `package.json` 中添加：

```json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
    "*.{css,scss,less}": ["stylelint --fix", "prettier --write"],
    "*.{json,md}": ["prettier --write"]
  }
}
```
