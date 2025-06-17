# Social Profile Cards Components

本文档描述了 socialui 库中的社交平台个人资料卡片组件的实现和使用方法。

## 概述

我们实现了多个社交平台的个人资料卡片组件，用于展示用户信息和提供快速关注功能。这些组件具有统一的设计语言和 API，但针对不同平台进行了定制化。

## 已实现的组件

### 1. X Profile Card (`XProfileCard`)

#### 功能特性

- **平台特色**：使用 X 平台的黑色主题色和官方图标
- **用户信息展示**：显示名、用户名(@username)、关注数、粉丝数
- **QR 码生成**：自动生成指向 X 个人页面的二维码
- **跳转功能**：提供"View Profile"按钮，在新标签页打开个人资料
- **多种样式**：支持 5 种视觉变体（solid、flat、faded、bordered、light）
- **响应式布局**：支持水平和垂直方向排列

#### 组件属性

```typescript
interface XProfileCardProps {
  qrCodeContent?: string; // QR 码内容，默认为示例链接
  username?: string; // X 用户名（不含@）
  displayName?: string; // 显示名称
  followers?: string; // 粉丝数量
  following?: string; // 关注数量
  profileUrl?: string; // 个人资料页面链接
  className?: string; // 自定义样式类
  shadow?: "none" | "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg";
  fullWidth?: boolean;
  isPressable?: boolean;
  variant?: "solid" | "flat" | "faded" | "bordered" | "light";
  orientation?: "horizontal" | "vertical";
}
```

#### 使用示例

```tsx
import { XProfileCard } from "@socialui/ui";

<XProfileCard
  username="elonmusk"
  displayName="Elon Musk"
  followers="163.7M"
  following="743"
  profileUrl="https://x.com/elonmusk"
  qrCodeContent="https://x.com/elonmusk"
  variant="solid"
  orientation="horizontal"
/>;
```

#### 设计特点

- **X 主题色**：使用黑色到深灰色的渐变背景
- **装饰元素**：半透明圆形装饰，营造层次感
- **图标集成**：右上角显示 X 官方图标
- **交互反馈**：按钮支持悬停放大和点击缩小效果

### 2. Bilibili Profile Card (`BilibiliProfileCard`)

#### 功能特性

- **平台特色**：使用 Bilibili 的粉色到蓝色渐变主题色
- **用户信息展示**：用户名、UID、粉丝数、关注数、视频数
- **中文界面**：文案使用中文，符合中国用户习惯
- **QR 码生成**：自动生成指向 Bilibili 个人空间的二维码
- **跳转功能**：提供"查看主页"按钮，在新标签页打开个人空间
- **多种样式**：支持 5 种视觉变体
- **响应式布局**：支持水平和垂直方向排列

#### 组件属性

```typescript
interface BilibiliProfileCardProps {
  qrCodeContent?: string; // QR 码内容，默认为示例链接
  uid?: string; // Bilibili UID
  username?: string; // 用户名
  fans?: string; // 粉丝数量
  following?: string; // 关注数量
  videos?: string; // 视频数量
  profileUrl?: string; // 个人空间链接
  className?: string; // 自定义样式类
  shadow?: "none" | "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg";
  fullWidth?: boolean;
  isPressable?: boolean;
  variant?: "solid" | "flat" | "faded" | "bordered" | "light";
  orientation?: "horizontal" | "vertical";
}
```

#### 使用示例

```tsx
import { BilibiliProfileCard } from "@socialui/ui";

<BilibiliProfileCard
  uid="1577804"
  username="哔哩哔哩弹幕网"
  fans="1024.5万"
  following="1"
  videos="1.2万"
  profileUrl="https://space.bilibili.com/1577804"
  qrCodeContent="https://space.bilibili.com/1577804"
  variant="solid"
/>;
```

#### 设计特点

- **Bilibili 主题色**：粉色到蓝色的渐变背景
- **本土化设计**：中文标签（关注、粉丝、视频）
- **图标集成**：右上角显示 Bilibili 官方图标
- **数据展示**：显示 Bilibili 特有的视频数量统计

## 共同特性

### 样式变体

所有组件都支持以下 5 种样式变体：

1. **solid**：实色背景，白色文字（默认）
2. **flat**：浅色背景，深色文字
3. **faded**：更浅的背景，适中透明度
4. **bordered**：透明背景，带边框
5. **light**：完全透明背景

### 布局方向

- **horizontal**：水平布局（默认），QR 码在左侧，信息在右侧
- **vertical**：垂直布局，QR 码在上方，信息在下方

### 交互功能

- **QR 码扫描**：自动生成对应平台的个人页面二维码
- **跳转按钮**：点击按钮在新标签页打开个人资料页面
- **按钮动效**：悬停放大、点击缩小的微交互效果
- **安全链接**：使用 `noopener,noreferrer` 确保安全性

## 技术实现

### 依赖库

- **@iconify/react**：图标库，提供各平台官方图标
- **qrcode**：QR 码生成库
- **React**：使用 forwardRef 支持 ref 传递
- **Tailwind CSS**：样式系统，支持主题定制

### 文件结构

```
packages/ui/src/
├── x/
│   ├── x-profile-card.tsx
│   └── ...
├── bilibili/
│   ├── bilibili-profile-card.tsx
│   └── ...
├── stories/
│   └── x/
│       ├── XProfileCard.stories.tsx
│       ├── BilibiliProfileCard.stories.tsx
│       └── ...
└── index.ts (导出配置)
```

### Storybook 集成

每个组件都配备了完整的 Storybook 故事，包括：

- 默认示例
- 不同样式变体展示
- 垂直/水平布局对比
- 完整功能演示
- 真实数据模拟

## 扩展指南

### 添加新平台

要添加新的社交平台卡片组件，请遵循以下步骤：

1. **创建组件文件**：在对应平台文件夹下创建组件文件
2. **定义接口**：根据平台特性定义 Props 接口
3. **实现组件**：使用统一的设计模式和 API
4. **添加样式**：根据平台品牌色定制主题样式
5. **创建 Stories**：编写 Storybook 故事文件
6. **更新导出**：在 `index.ts` 中添加组件导出

### 样式定制

组件支持通过以下方式进行样式定制：

- **className 属性**：传入自定义 CSS 类
- **variant 属性**：选择预设样式变体
- **Tailwind 配置**：修改主题色彩配置

## 最佳实践

1. **数据格式化**：使用合适的数字格式（如 1.2K、1.5M）
2. **错误处理**：为 QR 码生成失败提供友好的错误状态
3. **无障碍访问**：确保按钮和链接具有适当的 aria 标签
4. **性能优化**：使用 lazy loading 和 Suspense 优化图标加载
5. **安全性**：外部链接使用安全的打开方式

## 未来规划

- [ ] 添加更多社交平台支持（YouTube、Instagram、TikTok 等）
- [ ] 支持头像显示功能
- [ ] 添加动画效果和过渡动画
- [ ] 支持深色模式自动适配
- [ ] 添加复制链接功能
- [ ] 支持自定义 QR 码样式
