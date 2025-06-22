# X Icon Component

X 图标组件是基于 Iconify 的简单图标组件，用于显示 X（原 Twitter）的官方图标。

## 安装

```bash
npm install @ui2someone/react
```

## 基本用法

```tsx
import { XIcon } from "@ui2someone/react";

function MyComponent() {
  return (
    <div>
      <XIcon />
      <XIcon size={32} />
      <XIcon size={48} color="#1DA1F2" />
    </div>
  );
}
```

## Props

| 属性        | 类型               | 默认值      | 描述             |
| ----------- | ------------------ | ----------- | ---------------- |
| `size`      | `number \| string` | `24`        | 图标大小（像素） |
| `color`     | `string`           | `undefined` | 图标颜色         |
| `className` | `string`           | `undefined` | 额外的 CSS 类名  |

## 示例

### 不同尺寸

```tsx
<div className="flex items-center gap-4">
  <XIcon size={16} />
  <XIcon size={24} />
  <XIcon size={32} />
  <XIcon size={48} />
  <XIcon size={64} />
</div>
```

### 自定义颜色

```tsx
<XIcon size={32} color="#1DA1F2" />
<XIcon size={32} color="#000000" />
<XIcon size={32} color="#FFFFFF" />
```

### 带样式的图标

```tsx
<XIcon size={32} className="hover:scale-110 transition-transform cursor-pointer" />
```

## 技术细节

- 使用 Iconify 的 `simple-icons:x` 图标
- 支持所有标准的 SVG 属性
- 完全类型安全
- 支持 Tailwind CSS 类名
