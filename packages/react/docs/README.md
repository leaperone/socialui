# UI 组件库文档

欢迎使用 UI 组件库文档！本文档提供了完整的组件使用指南、设计原则和开发规范。

## 📚 文档目录

### 🎨 设计系统

- **[语义化颜色系统](./semantic-colors.md)** - 完整的颜色系统文档，包含使用方法、最佳实践和技术实现

### 🔧 开发指南

- **组件开发规范** - (待补充) 组件开发的标准和规范
- **主题定制指南** - (待补充) 如何创建和应用自定义主题
- **无障碍设计** - (待补充) 无障碍设计原则和实践

### 📖 组件文档

- **Button 组件** - (待补充) 按钮组件的完整使用文档
- **Card 组件** - (待补充) 卡片组件的使用指南
- **表单组件** - (待补充) 各种表单组件的文档

## 🚀 快速开始

### 安装

```bash
# 使用 npm
npm install @repo/ui

# 使用 pnpm
pnpm add @repo/ui

# 使用 yarn
yarn add @repo/ui
```

### 基础使用

```tsx
import { Button, Card } from "@repo/ui";

function App() {
  return (
    <Card>
      <Button color="primary" variant="solid">
        Hello World!
      </Button>
    </Card>
  );
}
```

### 引入样式

确保在项目中引入全局样式：

```tsx
// 在你的 _app.tsx 或 main.tsx 中
import "@repo/ui/styles/globals.css";
```

## 🎨 颜色系统

我们的 UI 组件库基于语义化颜色系统构建，提供：

- **7 种语义化颜色**：`default`、`primary`、`secondary`、`success`、`warning`、`danger`、`info`
- **完整色阶**：每种颜色都有 50-900 的完整色阶
- **明暗模式**：自动适配明暗主题切换
- **Tailwind 兼容**：完整支持 Tailwind CSS 类名

详细信息请查看 [语义化颜色系统文档](./semantic-colors.md)。

## 🧩 组件预览

### Storybook

我们使用 Storybook 来展示和测试组件：

```bash
# 启动 Storybook
pnpm storybook
```

### 颜色预览

使用内置的颜色展示组件来预览所有颜色：

```tsx
import { ColorShowcase } from "@repo/ui";

<ColorShowcase />;
```

## 🛠️ 开发

### 本地开发

```bash
# 克隆项目
git clone <repository-url>

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 启动 Storybook
pnpm storybook
```

### 构建

```bash
# 构建组件库
pnpm build

# 构建 Storybook
pnpm build-storybook
```

### 测试

```bash
# 运行测试
pnpm test

# 代码检查
pnpm lint

# 样式检查
pnpm lint:style
```

## 📝 贡献指南

### 添加新组件

1. 创建组件文件：`src/components/ui/your-component.tsx`
2. 导出组件：在 `src/components/ui/index.ts` 中添加导出
3. 创建 Storybook Stories：使用脚本自动生成或手动创建
4. 添加文档：在 `docs/` 目录下创建对应文档
5. 更新类型定义：确保 TypeScript 类型完整

### 代码规范

- 使用 TypeScript 编写组件
- 遵循 React 函数组件规范
- 使用 `forwardRef` 处理 ref 传递
- 注释使用英文，变量命名使用语义化名称
- 使用语义化颜色系统

### 提交规范

```bash
# Commit 格式
<type>[optional scope]: <description>

# 示例
feat(button): add new variant styles
fix(card): resolve border radius issue
docs(colors): update semantic color documentation
```

## 🎯 设计原则

### 一致性 (Consistency)

- 统一的视觉语言和交互模式
- 标准化的组件接口和命名规范

### 可访问性 (Accessibility)

- 支持键盘导航和屏幕阅读器
- 确保充足的颜色对比度
- 提供明确的状态反馈

### 灵活性 (Flexibility)

- 支持主题定制和扩展
- 组件可组合和可配置
- 兼容不同的设计系统

### 性能 (Performance)

- 轻量级组件实现
- 按需加载和 Tree Shaking 支持
- 优化的渲染性能

## 🔗 相关链接

- [Storybook 文档](https://storybook.js.org/)
- [Tailwind CSS 文档](https://tailwindcss.com/)
- [React 文档](https://react.dev/)
- [TypeScript 文档](https://www.typescriptlang.org/)

## 📄 许可证

[MIT License](../LICENSE) - 详见许可证文件。

---

如有问题或建议，请通过 Issues 或 Pull Requests 联系我们。感谢您的使用和贡献！ 🙏
