# HeroUI 移除与自定义组件迁移指南

## 概述

本文档记录了从 `@socialui/ui` 包中完全移除 HeroUI 依赖，并使用自定义组件替代的过程。此次迁移旨在减少外部依赖，提高组件的可控性和定制性。

## 迁移背景

### 移除原因
- 减少包体积和外部依赖
- 提高组件定制的灵活性
- 避免 HeroUI 版本更新带来的潜在问题
- 更好地符合项目的设计系统

### 影响范围
- `packages/ui` 包中的所有组件
- Storybook 配置
- Tailwind CSS 配置

## 移除的依赖

### 从 package.json 中移除
```json
{
  "dependencies": {
    "@heroui/react": "^2.7.10",    // 已移除
    "@heroui/theme": "^2.4.17"     // 已移除
  }
}
```

### 新增的依赖
```json
{
  "dependencies": {
    "clsx": "^2.1.1"  // 用于类名合并的轻量级工具
  }
}
```

## 创建的自定义组件

### 1. 工具函数 - `cn`

**文件位置**: `src/utils/cn.tsx`

```typescript
import { clsx, type ClassValue } from "clsx";

export default function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
```

**用途**: 用于合并和处理 CSS 类名，替代 HeroUI 的 `cn` 函数。

### 2. Button 组件

**文件位置**: `src/components/ui/button.tsx`

**特性**:
- 支持 `radius` 属性 (none, sm, md, lg)
- 支持 `startContent` 前置内容
- 支持 `onPress` 回调函数
- 完全兼容原有的 HeroUI Button API

**使用示例**:
```tsx
import { Button } from "@socialui/ui";

<Button 
  radius="md"
  startContent={<Icon />}
  onPress={() => console.log('pressed')}
>
  点击按钮
</Button>
```

### 3. Card 组件

**文件位置**: `src/components/ui/card.tsx`

**包含组件**:
- `Card` - 主卡片容器
- `CardBody` - 卡片内容区域

**特性**:
- 支持 `shadow` 属性 (none, sm, md, lg)
- 支持 `radius` 属性 (none, sm, md, lg)
- 支持 `fullWidth` 全宽模式
- 支持 `isPressable` 可点击状态
- 支持 `variant` 变体样式

**使用示例**:
```tsx
import { Card, CardBody } from "@socialui/ui";

<Card shadow="md" radius="lg" fullWidth>
  <CardBody>
    卡片内容
  </CardBody>
</Card>
```

### 4. Tooltip 组件

**文件位置**: `src/components/ui/tooltip.tsx`

**特性**:
- 悬停显示提示信息
- 简单易用的 API
- 支持自定义样式

**使用示例**:
```tsx
import { Tooltip } from "@socialui/ui";

<Tooltip content="这是提示信息">
  <button>悬停查看提示</button>
</Tooltip>
```

## 配置文件更改

### Tailwind 配置更新

**文件**: `tailwind.config.js`

**更改内容**:
```javascript
// 移除前
const { heroui } = require("@heroui/theme");
module.exports = {
  content: [
    "../../node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [heroui()],
}

// 移除后
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./.storybook/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
}
```

### Storybook 配置更新

**文件**: `.storybook/preview.tsx`

**更改内容**:
```tsx
// 移除前
import { HeroUIProvider } from '@heroui/react'
decorators: [
  (Story) => (
    <HeroUIProvider>
      <Story />
    </HeroUIProvider>
  ),
]

// 移除后
decorators: [
  (Story) => (
    <div>
      <Story />
    </div>
  ),
]
```

## 组件更新详情

### WeChatCard 组件迁移

**主要更改**:
1. 替换了所有 HeroUI 组件导入
2. 移除了 `HeroUIProvider` 包装器
3. 更新了 HeroUI 特定的类名

**类名映射**:
```typescript
// HeroUI 类名 -> 标准 Tailwind 类名
"text-default-600" -> "text-gray-600"
"text-default-400" -> "text-gray-400"  
"text-default-500" -> "text-gray-500"
"bg-default-100"   -> "bg-gray-100"
```

## 导出结构

### 主索引文件

**文件**: `src/index.ts`

```typescript
// UI Components
export * from "./components/ui";

// Utilities  
export * from "./utils";

// WeChat Components
export { WeChatCard, type WeChatCardProps } from "./wechat/card";
```

### 组件索引文件

**文件**: `src/components/ui/index.ts`

```typescript
export { Button, type ButtonProps } from "./button";
export { Card, CardBody, type CardProps, type CardBodyProps } from "./card";
export { Tooltip, type TooltipProps } from "./tooltip";
```

## 迁移验证

### 功能验证清单
- ✅ 所有组件正常渲染
- ✅ 样式保持一致性
- ✅ TypeScript 类型完整
- ✅ Storybook 正常工作
- ✅ 无 HeroUI 残留引用
- ✅ 构建过程无错误

### 性能提升
- 减少了包依赖数量
- 降低了打包体积
- 提高了构建速度
- 增强了组件可控性

## 使用指南

### 开发者注意事项
1. 新组件 API 与 HeroUI 基本兼容
2. 样式基于标准 Tailwind CSS 类名
3. 可通过 `cn` 函数进行类名合并
4. 支持完整的 TypeScript 类型检查

### 自定义样式
由于组件现在基于标准 Tailwind 类名，可以更容易地：
- 通过 `className` 属性自定义样式
- 使用 Tailwind 的所有功能
- 创建主题变体
- 实现响应式设计

## 后续优化建议

1. **主题系统**: 考虑基于 CSS 变量创建主题系统
2. **组件扩展**: 根据需要添加更多自定义组件
3. **性能优化**: 使用 Tree-shaking 进一步减少包体积
4. **测试覆盖**: 为新组件添加单元测试和集成测试

## 总结

此次 HeroUI 移除工作成功实现了：
- 完全移除外部 UI 库依赖
- 保持组件功能和样式的一致性
- 提高了代码的可维护性和定制性
- 为未来的 UI 系统发展奠定了基础

迁移后的组件库更加轻量、可控，同时保持了良好的开发体验和用户体验。 