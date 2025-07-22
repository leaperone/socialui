# 设计文档

## 概述

本设计文档描述了社交媒体卡片组件的重构方案，将现有的重复代码重构为基于组合模式的统一架构。设计遵循现有 VCardContactCard 和 VCardContactCardPlain 组件的成功模式，创建一个通用的 `SocialProfileCardPlain` 基础组件和平台特定的样式包装组件。

## 架构

### 文件结构

```
src/
├── components/
│   └── social-profile-card-plain.tsx (单一基础组件)
├── x/
│   └── x-profile-card.tsx (使用基础组件的X平台卡片)
├── wechat/
│   └── wechat-contact-card.tsx (使用基础组件的微信卡片)
├── linkedin/
│   └── linkedin-profile-card.tsx (使用基础组件的LinkedIn卡片)
├── facebook/
│   └── facebook-profile-card.tsx (使用基础组件的Facebook卡片)
├── weibo/
│   └── weibo-profile-card.tsx (使用基础组件的微博卡片)
├── bilibili/
│   └── bilibili-profile-card.tsx (使用基础组件的Bilibili卡片)
└── ... (其他平台目录)
```

### 组件依赖关系

所有平台特定的卡片组件都导入并使用同一个位于 `components` 目录下的 `SocialProfileCardPlain` 基础组件。各平台组件保持在原有位置不变，只是内部实现改为使用这个基础组件，这确保了代码的最大复用和一致性，同时保持了项目结构的稳定性。

### 设计原则

1. **关注点分离**: 基础组件处理通用逻辑，包装组件处理平台特定配置
2. **样式注入**: 所有样式通过 className props 传递，实现完全的样式控制
3. **向后兼容**: 保持现有 API 不变，确保无破坏性更改
4. **可扩展性**: 新平台只需创建包装组件，无需修改基础逻辑

## 组件和接口

### SocialProfileCardPlain 基础组件

`SocialProfileCardPlain` 是一个纯逻辑组件，负责核心功能实现，不包含任何内置样式，完全通过 className props 接收样式。它处理 QR 码生成和基本布局结构，但不关心具体的视觉呈现。

#### Props 接口

```typescript
export interface SocialProfileCardPlainProps {
  // 数据属性 - 通用字段
  qrCodeContent?: string;
  displayName?: string;
  username?: string;
  uid?: string;

  // 统计数据 - 灵活字段
  stats?: Array<{
    label: string;
    value: string;
  }>;

  // 描述文本
  description?: string;

  // 交互属性
  profileUrl?: string;
  onQrClick?: () => void;
  onProfileClick?: () => void;

  // 平台图标
  platformIcon?: React.ReactNode;

  // 样式属性 - 所有样式通过 className 传递
  className?: string;
  containerClassName?: string;
  qrContainerClassName?: string;
  qrImageClassName?: string;
  contentClassName?: string;
  nameClassName?: string;
  usernameClassName?: string;
  statsClassName?: string;
  statItemClassName?: string;
  descriptionClassName?: string;
  actionButtonClassName?: string;

  // QR 码配置
  qrCodeOptions?: {
    width?: number;
    margin?: number;
    color?: {
      dark?: string;
      light?: string;
    };
  };
}
```

#### 核心功能

1. **QR 码生成和管理**

   - 基于 `qrCodeContent` 生成二维码
   - 支持自定义 QR 码选项
   - 统一的加载和错误状态处理

2. **内容渲染**

   - 渲染用户信息（名称、用户名等）
   - 渲染统计数据
   - 渲染描述文本和操作按钮

3. **结构布局**
   - 提供基本的 DOM 结构
   - 应用传入的样式类名
   - 不包含任何硬编码样式

### 平台包装组件

平台包装组件是基于 `SocialProfileCardPlain` 构建的样式包装组件，负责提供平台特定的视觉主题、处理布局逻辑，并添加装饰性元素。它们不包含核心功能逻辑，而是专注于样式和平台特定配置。

#### 通用包装组件结构

```typescript
export interface PlatformProfileCardProps {
  // 平台特定数据字段
  [platformSpecificField]: string;

  // 通用样式属性
  className?: string;
  shadow?: "none" | "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg";
  fullWidth?: boolean;
  variant?: "solid" | "flat" | "bordered";
  orientation?: "horizontal" | "vertical";
}
```

#### 包装组件职责

1. **样式计算与传递**

   - 根据 variant、orientation、shadow、radius 等属性计算样式类名
   - 将计算好的样式类名传递给 SocialProfileCardPlain

2. **装饰性元素添加**

   - 添加背景圆形装饰
   - 添加平台特定图标
   - 处理视觉主题元素

3. **平台特定配置**
   - 提供平台特定的默认值
   - 处理平台特定的数据格式
   - 配置平台特定的交互行为

#### 平台主题配置示例

```typescript
// 以 X 平台为例
const variantStyles = {
  solid: {
    card: "bg-gradient-to-r from-black to-gray-900 text-white",
    qr: "bg-white",
    decorative: { primary: "bg-white/10", secondary: "bg-white/5" },
  },
  flat: {
    card: "bg-gray-100/80 text-gray-900 dark:bg-gray-800/80 dark:text-gray-100",
    qr: "bg-white",
    decorative: {
      primary: "bg-gray-300/30 dark:bg-gray-600/30",
      secondary: "bg-gray-300/20 dark:bg-gray-600/20",
    },
  },
  bordered: {
    card: "bg-transparent text-gray-900 border-2 border-gray-200 dark:text-gray-100 dark:border-gray-700",
    qr: "bg-white",
    decorative: {
      primary: "bg-gray-200/50 dark:bg-gray-700/50",
      secondary: "bg-gray-200/30 dark:bg-gray-700/30",
    },
  },
};

// 计算样式类名并传递给基础组件
return (
  <div className={cardClassName} ref={ref}>
    {/* 装饰性元素 */}
    <div className={cn("absolute right-4 top-4 h-24 w-24 rounded-full", decorativePrimaryClass)} />
    <div className={cn("absolute bottom-6 left-6 h-32 w-32 rounded-full", decorativeSecondaryClass)} />

    {/* 平台图标 */}
    <div className={iconClassName}>
      <IconifyIcon icon="platform-icon" className="h-8 w-8 opacity-80" />
    </div>

    {/* 使用基础组件并传递样式 */}
    <SocialProfileCardPlain
      displayName={displayName}
      username={username}
      qrCodeContent={qrCodeContent}
      stats={formattedStats}
      description={description}
      profileUrl={profileUrl}
      containerClassName={containerClassName}
      qrContainerClassName={qrContainerClassName}
      qrImageClassName={qrImageClassName}
      contentClassName={contentClassName}
      nameClassName={nameClassName}
      usernameClassName={usernameClassName}
      statsClassName={statsClassName}
      statItemClassName={statItemClassName}
      descriptionClassName={descriptionClassName}
      actionButtonClassName={actionButtonClassName}
    />
  </div>
);
```

## 数据模型

### 统计数据模型

```typescript
interface SocialStat {
  label: string; // 显示标签 (如 "粉丝", "Followers")
  value: string; // 数值 (如 "1.2K", "1,234")
}
```

### 平台配置模型

```typescript
interface PlatformConfig {
  name: string; // 平台名称
  brandColor: string; // 主品牌色
  iconName: string; // 图标名称
  urlPattern: string; // URL 模式
  defaultQrContent: string; // 默认 QR 码内容
}
```

## 错误处理

### QR 码生成错误

1. **网络错误**: 显示重试按钮
2. **内容错误**: 显示错误提示
3. **加载超时**: 显示超时提示

### 图标加载错误

1. **懒加载失败**: 显示占位符
2. **图标不存在**: 使用默认图标

### 平台链接错误

1. **无效 URL**: 禁用点击功能
2. **网络不可达**: 显示离线提示

## 测试策略

### 单元测试

1. **基础组件测试**

   - QR 码生成逻辑
   - 布局计算逻辑
   - 事件处理逻辑

2. **包装组件测试**
   - 样式计算正确性
   - 数据映射正确性
   - 平台特定功能

### 集成测试

1. **组件组合测试**

   - 基础组件与包装组件的集成
   - 样式传递的正确性
   - 事件冒泡的正确性

2. **跨平台一致性测试**
   - 相同 props 在不同平台的表现
   - 布局一致性验证
   - 交互行为一致性

### 视觉回归测试

1. **Storybook 快照测试**

   - 所有变体的视觉快照
   - 不同状态的快照对比
   - 响应式布局快照

2. **跨浏览器测试**
   - 主流浏览器兼容性
   - 移动端适配测试

## 迁移策略

### 阶段 1: 创建基础组件

1. 创建 `SocialProfileCardPlain` 组件
2. 实现核心功能和接口
3. 编写基础组件测试

### 阶段 2: 重构现有组件

1. 逐个重构现有平台组件
2. 保持 API 兼容性
3. 验证功能一致性

### 阶段 3: 优化和清理

1. 移除重复代码
2. 优化性能
3. 更新文档和示例

### 向后兼容性保证

1. **API 兼容**: 所有现有 props 继续工作
2. **样式兼容**: 视觉效果保持一致
3. **行为兼容**: 交互行为不变
4. **导入兼容**: 导入路径不变

## 性能考虑

### 代码分割

1. **懒加载图标**: 使用 React.lazy 加载平台图标
2. **按需加载**: 只加载使用的平台组件
3. **共享依赖**: QR 码库等共享依赖优化

### 渲染优化

1. **样式计算缓存**: 缓存计算结果
2. **条件渲染**: 避免不必要的 DOM 节点
3. **事件处理优化**: 使用 useCallback 优化事件处理器

### 包大小优化

1. **Tree Shaking**: 确保未使用的代码被移除
2. **依赖优化**: 减少不必要的依赖
3. **代码复用**: 最大化代码复用率

## 可访问性

### 键盘导航

1. **Tab 顺序**: 合理的 Tab 键导航顺序
2. **焦点管理**: 清晰的焦点指示
3. **快捷键**: 支持常用快捷键操作

### 屏幕阅读器

1. **语义化标签**: 使用正确的 HTML 语义
2. **ARIA 属性**: 提供必要的 ARIA 标签
3. **替代文本**: 为图像提供描述性文本

### 色彩对比

1. **对比度检查**: 确保足够的色彩对比度
2. **色盲友好**: 不仅依赖颜色传达信息
3. **高对比模式**: 支持系统高对比模式
