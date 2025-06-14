# Storybook Stories 自动生成功能

## 概述

为了提高开发效率，避免为每个 React 组件手动创建 Storybook Stories 文件的重复工作，我们实现了一套自动生成 Stories 的工具链。该工具能够扫描组件源码，分析组件结构和属性，自动生成对应的 Stories 文件。

## 功能特性

### 🔍 智能组件分析

- **Interface 解析**: 自动解析 `ComponentProps` interface，提取所有属性定义
- **函数参数解析**: 支持解构参数形式的组件定义
- **CVA 组件支持**: 特别优化了对 `class-variance-authority` 组件的支持
- **类型推断**: 根据属性类型自动推断合适的 Storybook 控件类型

### 🎯 自动生成内容

- Meta 配置（组件标题、布局、标签）
- ArgTypes 配置（基于组件 props）
- Default Story 示例
- 对于联合类型属性，自动生成多个变体 Stories
- 智能示例数据生成

### 🛠️ 工具脚本

1. **一次性生成**: `pnpm generate:stories`
2. **监听模式**: `pnpm watch:stories`

## 实现架构

### 核心文件结构

```
packages/ui/
├── scripts/
│   ├── generate-stories.js    # 核心生成逻辑
│   ├── watch-stories.js       # 文件监听脚本
│   └── README.md             # 脚本说明文档
├── src/
│   ├── *.tsx                 # 组件源文件
│   └── stories/              # 生成的Stories文件
└── package.json              # 包含脚本命令
```

### 技术实现细节

#### 1. 组件扫描与解析

脚本通过以下方式分析组件：

- 使用正则表达式匹配导出的组件名称
- 解析 TypeScript interface 定义（支持 `extends` 继承）
- 提取函数参数中的解构属性
- 特殊处理 CVA (class-variance-authority) 组件的 variants

#### 2. 类型推断机制

| 属性类型 | 推断的控件类型 | 示例 |
|---------|-------------|------|
| `boolean` | boolean | `disabled?: boolean` |
| `number` | number | `count?: number` |
| `string` | text | `title?: string` |
| 联合类型 | select | `variant?: 'solid' \| 'outline'` |
| `React.ReactNode` | text | `children?: React.ReactNode` |

#### 3. CVA 组件特殊处理

对于使用 `class-variance-authority` 的组件：

```tsx
const button = cva("base-styles", {
  variants: {
    variant: {
      solid: "solid-styles",
      outline: "outline-styles"
    }
  }
});
```

脚本会自动：
- 解析 `variants` 配置
- 为每个 variant 生成选择控件
- 创建对应的 Story 变体

## 使用指南

### 快速开始

1. **安装依赖**: 确保项目已安装相关依赖
2. **运行生成**: 在 `packages/ui` 目录下执行 `pnpm generate:stories`
3. **启动 Storybook**: 运行 `pnpm storybook` 查看生成的 Stories

### 开发工作流

推荐的开发工作流程：

```bash
# 终端 1: 启动文件监听
cd packages/ui
pnpm watch:stories

# 终端 2: 启动 Storybook
cd packages/ui  
pnpm storybook
```

### 组件编写规范

为了获得最佳的自动生成效果，建议遵循以下规范：

#### 1. 使用 TypeScript Interface

```tsx
export interface ButtonProps {
  variant?: 'solid' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  disabled?: boolean;
}

export const Button = ({ variant, size, children, disabled }: ButtonProps) => {
  // 组件实现
};
```

#### 2. CVA 组件模式

```tsx
import { cva, type VariantProps } from "class-variance-authority";

const button = cva("base-styles", {
  variants: {
    variant: {
      solid: "solid-styles",
      outline: "outline-styles"
    }
  }
});

export interface ButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}
```

## 生成示例

### 输入组件

```tsx
// src/badge.tsx
export interface BadgeProps {
  variant?: 'default' | 'secondary' | 'destructive';
  children: React.ReactNode;
}

export const Badge = ({ variant = 'default', children }: BadgeProps) => {
  return <span className={`badge badge-${variant}`}>{children}</span>;
};
```

### 生成的 Stories

```typescript
// src/stories/Badge.stories.ts
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from '../badge';

const meta = {
  title: 'UI/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'destructive'],
    },
    children: { control: 'text' },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Badge',
    variant: 'default',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Destructive',
    variant: 'destructive',
  },
};
```

## 故障排除

### 常见问题

1. **脚本执行失败**: 检查 Node.js 版本，确保支持 ES2020 特性
2. **生成的 Stories 不完整**: 检查组件的 TypeScript 类型定义是否规范
3. **监听模式不工作**: 确保在正确的目录下执行命令

### 调试技巧

- 查看脚本输出日志，了解扫描和生成过程
- 检查生成的 Stories 文件，手动调整不准确的部分
- 使用 `pnpm generate:stories` 单次生成来测试特定组件

## 扩展与自定义

### 添加新的类型推断规则

在 `scripts/generate-stories.js` 的 `analyzeProps` 函数中添加自定义逻辑：

```javascript
// 自定义类型推断
if (propName.includes('color')) control = 'color';
if (propName.includes('date')) control = 'date';
```

### 自定义生成模板

修改 `generateStoryContent` 函数来调整生成的 Stories 结构和内容。

## 维护与更新

- 定期检查生成的 Stories 文件质量
- 根据项目需求调整脚本逻辑
- 保持脚本与 Storybook 版本兼容

---

*最后更新: 2024年*
*相关文件: packages/ui/scripts/* 