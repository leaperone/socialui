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

## Git Hooks

项目已配置 husky 和 lint-staged 来在 Git 提交前自动检查和修复代码：

### 自动执行的检查

**Pre-commit Hook（提交前）：**

- JavaScript/TypeScript 文件：ESLint 修复 + Prettier 格式化
- CSS/SCSS/Less 文件：Stylelint 修复 + Prettier 格式化
- JSON/Markdown/YAML 文件：Prettier 格式化

**Commit-msg Hook（提交消息检查）：**

- 检查提交消息是否符合约定式提交格式
- 格式：`<type>[optional scope]: <description>`
- 支持的类型：feat, fix, docs, style, refactor, test, chore, perf, build, ci, revert

### 提交消息示例

```bash
# ✅ 正确格式
git commit -m "feat(ui): add new button component"
git commit -m "fix: resolve login issue"
git commit -m "docs: update README"
git commit -m "style(button): improve hover effects"

# ❌ 错误格式
git commit -m "add button"
git commit -m "fixed bug"
```

### 跳过 Hook（紧急情况）

如果需要跳过检查（不推荐），可以使用：

```bash
# 跳过 pre-commit hook
git commit -m "emergency fix" --no-verify

# 跳过所有 hooks
git commit -m "emergency fix" -n
```

### 配置文件

- `.husky/pre-commit` - 提交前检查脚本
- `.husky/commit-msg` - 提交消息检查脚本
- `package.json` 中的 `lint-staged` 配置
