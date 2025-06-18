# 自动生成 Storybook Stories

这个脚本可以自动为你的 React 组件生成 Storybook Stories 文件，免去手动创建的麻烦。

## 使用方法

### 一次性生成所有 Stories

```bash
pnpm generate:stories
```

这个命令会：

- 扫描 `src/` 目录下的所有 `.tsx` 文件
- 为每个导出的组件自动生成对应的 Stories 文件
- 如果 Stories 文件已存在，会跳过生成

### 监听模式（推荐）

```bash
pnpm watch:stories
```

这个命令会：

- 启动文件监听模式
- 当你修改任何 `.tsx` 组件文件时，自动重新生成对应的 Stories
- 实时同步你的组件变化到 Storybook

## 功能特性

### 智能分析组件 Props

脚本会自动分析你的组件参数：

1. **Interface 定义**: 如果组件使用 `ComponentProps` interface，会解析所有属性
2. **函数参数**: 如果组件使用解构参数，会提取参数名称
3. **类型推断**: 根据参数名称和类型自动推断合适的 Storybook 控件

### 自动生成的内容

每个 Stories 文件包含：

- 正确的组件导入
- Meta 配置（标题、参数、标签）
- ArgTypes 配置（基于组件 props）
- Default Story 示例
- 对于联合类型属性，自动生成多个变体 Stories

### 示例输出

对于这个组件：

```tsx
export function Button({
  variant,
  size,
  children,
  disabled,
}: {
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  disabled?: boolean;
}) {
  // 组件实现
}
```

会生成：

```typescript
// Button.stories.ts
export const Default: Story = { ... };
export const Solid: Story = { ... };
export const Outline: Story = { ... };
export const Ghost: Story = { ... };
// 等等...
```

## 文件组织

生成的 Stories 文件会放在 `src/stories/` 目录下，文件名格式为 `ComponentName.stories.ts`。

## 注意事项

- 脚本会忽略 `index.tsx` 和已存在的 `.stories.` 文件
- 如果组件没有导出的函数或常量，会跳过生成
- 监听模式下，修改组件文件会触发重新生成（有 500ms 防抖）

## 手动调整

生成的 Stories 文件可以手动调整：

- 添加更多 Story 变体
- 修改示例数据
- 添加自定义参数和配置
- 添加交互测试

脚本不会覆盖已存在的 Stories 文件，所以你的手动修改是安全的。
