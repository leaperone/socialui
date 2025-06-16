# 语义化颜色系统 (Semantic Color System)

## 概述

本 UI 包实现了一套完整的语义化颜色系统，参考 [HeroUI 的颜色标准](https://www.heroui.com/docs/customization/colors#semantic-colors)，提供了一致性的色彩方案和明暗模式支持。

## 特性

- ✅ **完整色阶系统** - 每个语义化颜色都有 50-900 的完整色阶
- ✅ **明暗模式支持** - 所有颜色都有对应的暗色模式值
- ✅ **布局颜色** - 专门的布局相关颜色变量
- ✅ **内容颜色** - 分层的内容颜色系统
- ✅ **组件集成** - Button、Card 等组件完整支持
- ✅ **Tailwind 兼容** - 完整的 Tailwind CSS 类名支持

## 颜色分类

### 1. 布局颜色 (Layout Colors)

用于页面整体布局的基础颜色：

| 变量名       | 用途         | CSS 变量       |
| ------------ | ------------ | -------------- |
| `background` | 页面背景色   | `--background` |
| `foreground` | 主要文字色   | `--foreground` |
| `divider`    | 分割线颜色   | `--divider`    |
| `focus`      | 焦点状态颜色 | `--focus`      |

### 2. 内容颜色 (Content Colors)

用于不同层级内容的颜色：

| 变量名     | 用途              | CSS 变量     |
| ---------- | ----------------- | ------------ |
| `content1` | 主要内容背景      | `--content1` |
| `content2` | 次要内容背景      | `--content2` |
| `content3` | 三级内容/禁用文字 | `--content3` |
| `content4` | 四级内容/强调文字 | `--content4` |

### 3. 语义化颜色 (Semantic Colors)

传达特定含义的颜色，每个都有完整的色阶（50-900）：

| 颜色名      | 用途      | 主要场景                 |
| ----------- | --------- | ------------------------ |
| `default`   | 默认/中性 | 默认按钮、普通文本       |
| `primary`   | 主要/品牌 | 主要操作按钮、品牌色     |
| `secondary` | 次要      | 次要操作按钮             |
| `success`   | 成功/积极 | 成功提示、确认操作       |
| `warning`   | 警告/注意 | 警告提示、需要注意的操作 |
| `danger`    | 危险/错误 | 错误提示、删除操作       |
| `info`      | 信息/提示 | 信息提示、帮助说明       |

## 使用方法

### 1. Tailwind CSS 类名

#### 基础用法

```html
<!-- 基础语义化颜色 -->
<div className="bg-primary text-primary-foreground">主要按钮</div>
<div className="bg-success text-success-foreground">成功状态</div>

<!-- 布局颜色 -->
<div className="bg-background text-foreground">页面内容</div>
<div className="border-divider">分割线</div>

<!-- 内容颜色 -->
<div className="bg-content1">主要内容区域</div>
<div className="bg-content2">次要内容区域</div>
<div className="text-content3">禁用文字</div>
```

#### 色阶用法

```html
<!-- 使用完整色阶 -->
<div className="bg-primary-100 text-primary-900">浅色背景，深色文字</div>
<div className="bg-primary-500 hover:bg-primary-600">交互式按钮</div>
<div className="border-success-300 bg-success-50">成功边框和背景</div>

<!-- 渐进式色阶 -->
<div className="bg-warning-50 border-warning-200 text-warning-800">轻微警告样式</div>
```

### 2. CSS 变量

#### 直接使用 CSS 变量

```css
/* 基础语义化颜色 */
.custom-button {
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
}

/* 色阶变量 */
.hover-effect:hover {
  background-color: hsl(var(--primary-600));
}

/* 渐变效果 */
.gradient-bg {
  background: linear-gradient(45deg, hsl(var(--primary-500)), hsl(var(--primary-700)));
}
```

#### 组件内使用

```tsx
// React 组件中使用内联样式
<div
  style={{
    backgroundColor: "hsl(var(--success-100))",
    borderColor: "hsl(var(--success-300))",
    color: "hsl(var(--success-800))",
  }}
>
  自定义成功状态卡片
</div>
```

### 3. 组件集成

#### Button 组件

```tsx
import { Button } from "@repo/ui/components/ui/button";

// 支持所有语义化颜色
<Button color="primary" variant="solid">主要按钮</Button>
<Button color="success" variant="bordered">成功按钮</Button>
<Button color="danger" variant="light">危险按钮</Button>
<Button color="warning" variant="flat">警告按钮</Button>
<Button color="info" variant="ghost">信息按钮</Button>
```

#### Card 组件

```tsx
import { Card } from "@repo/ui/components/ui/card";

// 支持不同变体
<Card variant="solid">实心卡片</Card>
<Card variant="bordered">边框卡片</Card>
<Card variant="faded">半透明卡片</Card>
```

## 明暗模式

### 自动切换

颜色系统支持明暗模式自动切换，只需在根元素添加 `dark` 类：

```html
<!-- 亮色模式 -->
<html>
  <body>
    <!-- 使用亮色主题 -->
  </body>
</html>

<!-- 暗色模式 -->
<html className="dark">
  <body>
    <!-- 自动切换到暗色主题 -->
  </body>
</html>
```

### 模式特定样式

```css
/* 同时支持两种模式的样式 */
.adaptive-card {
  background-color: hsl(var(--content1));
  border: 1px solid hsl(var(--divider));
  color: hsl(var(--foreground));
}

/* 亮色模式：白色背景，浅灰边框，深色文字 */
/* 暗色模式：深色背景，深灰边框，浅色文字 */
```

## 颜色预览

使用 `ColorShowcase` 组件可以预览所有颜色：

```tsx
import { ColorShowcase } from "@repo/ui/components/ui/color-showcase";

<ColorShowcase />;
```

这个组件展示了：

- 布局颜色示例
- 内容颜色示例
- 完整的语义化颜色色阶
- 基础颜色示例
- 按钮颜色效果
- 使用代码示例

## 最佳实践

### 1. 颜色选择指南

| 场景      | 推荐颜色    | 示例                   |
| --------- | ----------- | ---------------------- |
| 主要操作  | `primary`   | 登录按钮、提交表单     |
| 成功反馈  | `success`   | 保存成功、操作完成     |
| 警告提示  | `warning`   | 数据变更警告、权限提醒 |
| 错误/删除 | `danger`    | 删除确认、错误提示     |
| 信息说明  | `info`      | 帮助文档、功能介绍     |
| 次要操作  | `secondary` | 取消按钮、辅助功能     |
| 中性操作  | `default`   | 一般按钮、默认状态     |

### 2. 色阶使用建议

| 色阶范围 | 用途         | 示例                 |
| -------- | ------------ | -------------------- |
| 50-100   | 浅色背景     | 通知背景、标签背景   |
| 200-300  | 边框、分割线 | 卡片边框、输入框边框 |
| 400-600  | 主要颜色     | 按钮背景、图标颜色   |
| 700-900  | 深色文字     | 标题文字、重要文本   |

### 3. 无障碍设计

```tsx
// 确保对比度足够
<div className="bg-primary-500 text-primary-foreground">
  {/* primary-foreground 确保了足够的对比度 */}
</div>

// 浅色背景配深色文字
<div className="bg-success-100 text-success-800">
  成功提示信息
</div>

// 深色背景配浅色文字
<div className="bg-danger-600 text-danger-foreground">
  错误提示信息
</div>
```

### 4. 一致性原则

```tsx
// ✅ 推荐：保持同一组件内颜色的一致性
<Card className="border-primary-300">
  <Button color="primary" variant="solid">主要操作</Button>
  <Button color="primary" variant="bordered">次要操作</Button>
</Card>

// ❌ 避免：混用不相关的颜色
<Card className="border-success-300">
  <Button color="danger" variant="solid">不匹配的操作</Button>
</Card>
```

## 技术实现

### CSS 变量定义

所有颜色都定义为 HSL 格式的 CSS 变量：

```css
:root {
  /* 基础变量 */
  --primary: 221 83% 53%;
  --primary-foreground: 210 40% 98%;

  /* 色阶变量 */
  --primary-50: 214 100% 97%;
  --primary-100: 214 95% 93%;
  /* ... 更多色阶 */
  --primary-900: 224 64% 33%;
}
```

### Tailwind 集成

通过 Tailwind 配置映射 CSS 变量：

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: "hsl(var(--primary-50))",
          100: "hsl(var(--primary-100))",
          // ... 完整色阶
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
      },
    },
  },
};
```

### 组件适配

组件通过 `color` 属性支持语义化颜色：

```typescript
// Button 组件类型定义
interface ButtonProps {
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger" | "info";
  variant?: "solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "ghost";
  // ... 其他属性
}
```

## 扩展和自定义

### 添加新的语义化颜色

1. **定义 CSS 变量**：

```css
:root {
  --custom-color: 280 90% 50%;
  --custom-color-foreground: 280 15% 95%;
  --custom-color-50: 280 100% 98%;
  /* ... 完整色阶 */
}
```

2. **更新 Tailwind 配置**：

```javascript
colors: {
  'custom-color': {
    50: "hsl(var(--custom-color-50))",
    // ... 完整映射
    DEFAULT: "hsl(var(--custom-color))",
    foreground: "hsl(var(--custom-color-foreground))",
  }
}
```

3. **更新组件类型**：

```typescript
color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger" | "info" | "custom-color";
```

### 自定义主题

创建自定义主题文件：

```css
/* custom-theme.css */
:root {
  /* 覆盖默认颜色 */
  --primary: 350 85% 55%; /* 自定义品牌红色 */
  --success: 120 75% 45%; /* 自定义成功绿色 */
}

.dark {
  /* 自定义暗色模式 */
  --primary: 350 80% 60%;
  --success: 120 70% 50%;
}
```

## 更新日志

### v1.0.0 (当前版本)

- ✅ 实现完整的语义化颜色系统
- ✅ 支持 50-900 色阶
- ✅ 明暗模式支持
- ✅ Button 和 Card 组件集成
- ✅ Tailwind CSS 完整支持
- ✅ ColorShowcase 预览组件
- ✅ 参考 HeroUI 标准实现

## 相关资源

- [HeroUI 颜色文档](https://www.heroui.com/docs/customization/colors#semantic-colors)
- [Tailwind CSS 颜色文档](https://tailwindcss.com/docs/customizing-colors)
- [无障碍设计颜色指南](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
