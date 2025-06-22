# WeChat Logo Component

微信官方账号 Logo 组件，支持多种样式变体和语言版本，适用于不同的设计场景。

## 安装

```bash
npm install @ui2someone/react
```

## 基本用法

```tsx
import { WeChatLogo } from "@ui2someone/react";

function MyComponent() {
  return (
    <div>
      <WeChatLogo />
      <WeChatLogo size={150} />
      <WeChatLogo variant="white" size={100} />
      <WeChatLogo language="en" size={120} />
    </div>
  );
}
```

## Props

| 属性        | 类型                 | 默认值                           | 描述              |
| ----------- | -------------------- | -------------------------------- | ----------------- |
| `variant`   | `WeChatLogoVariant`  | `'full-color'`                   | Logo 样式变体     |
| `language`  | `WeChatLogoLanguage` | `'zh'`                           | Logo 语言版本     |
| `size`      | `number \| string`   | `120`                            | Logo 尺寸（像素） |
| `className` | `string`             | `undefined`                      | 额外的 CSS 类名   |
| `alt`       | `string`             | `'WeChat Official Account Logo'` | 图片的 alt 属性   |

## 样式变体

### full-color（全彩）

默认的全彩版本，适用于浅色背景。

```tsx
<WeChatLogo variant="full-color" size={120} />
```

### white（白色）

白色版本，适用于深色背景。

```tsx
<WeChatLogo variant="white" size={120} />
```

### inverted（反白）

全彩反白版本，适用于特殊设计需求。

```tsx
<WeChatLogo variant="inverted" size={120} />
```

## 语言版本

### zh（中文版）

默认的中文版本，包含中文文字。

```tsx
<WeChatLogo language="zh" size={120} />
```

### en（英文版）

英文版本，包含英文文字。

```tsx
<WeChatLogo language="en" size={120} />
```

## 示例

### 不同语言版本对比

```tsx
<div className="flex flex-col gap-8">
  <div className="text-center">
    <h3 className="text-lg font-semibold mb-4">中文版</h3>
    <WeChatLogo language="zh" size={120} />
  </div>

  <div className="text-center">
    <h3 className="text-lg font-semibold mb-4">English Version</h3>
    <WeChatLogo language="en" size={120} />
  </div>
</div>
```

### 不同尺寸

```tsx
<div className="flex items-center gap-4">
  <WeChatLogo size={60} />
  <WeChatLogo size={80} />
  <WeChatLogo size={100} />
  <WeChatLogo size={120} />
  <WeChatLogo size={150} />
  <WeChatLogo size={200} />
</div>
```

### 不同背景下的使用

```tsx
{
  /* 浅色背景 */
}
<div className="bg-white p-6">
  <WeChatLogo variant="full-color" size={120} />
</div>;

{
  /* 深色背景 */
}
<div className="bg-gray-800 p-6">
  <WeChatLogo variant="white" size={120} />
</div>;
```

### 组合使用

```tsx
{
  /* 中文版全彩 */
}
<WeChatLogo language="zh" variant="full-color" size={120} />;

{
  /* 英文版白色 */
}
<WeChatLogo language="en" variant="white" size={120} />;

{
  /* 中文版反白 */
}
<WeChatLogo language="zh" variant="inverted" size={120} />;
```

### 响应式设计

```tsx
<WeChatLogo size="100%" className="max-w-[200px] w-full h-auto" />
```

### 带样式的 Logo

```tsx
<WeChatLogo
  size={120}
  className="hover:scale-105 transition-transform cursor-pointer shadow-lg rounded-lg"
/>
```

## 技术细节

- 使用高质量的 PNG 图片资源
- 支持三种官方样式变体
- 支持中英文两种语言版本
- 完全类型安全
- 支持 Tailwind CSS 类名
- 响应式设计友好
- 自动保持宽高比

## 文件结构

```
packages/react/src/logo/wechat/
├── index.tsx              # 主组件文件
├── en/                    # 英文版图片
│   ├── 全彩标志.png
│   ├── 白色标志.png
│   └── 全彩反白标志.png
└── zh/                    # 中文版图片
    ├── 全彩标志.png
    ├── 白色标志.png
    └── 全彩反白标志.png
```
