# 社交个人资料卡片组件文档

本文档描述了 ui2someone 库中的社交平台个人资料卡片组件的实现和使用方法。

## 概述

社交个人资料卡片组件是一套专门为各种社交平台设计的 React 组件，提供了统一的 API 和样式系统，同时保持了各平台的设计特色。

## 组件列表

### X (Twitter) 个人资料卡片

**组件名称**: `XProfileCard`

**功能特性**:

- 显示用户头像、名称和用户名
- 支持关注者数量显示
- 支持推文数量显示
- 支持关注按钮
- 响应式设计

**使用示例**:

```tsx
import { XProfileCard } from "@ui2someone/react";

function App() {
  return (
    <XProfileCard
      name="John Doe"
      username="@johndoe"
      avatar="https://example.com/avatar.jpg"
      bio="Software developer and tech enthusiast"
      followers={1234}
      following={567}
      tweets={890}
      isFollowing={false}
      onFollow={() => console.log("Follow clicked")}
    />
  );
}
```

**Props 接口**:

```typescript
interface XProfileCardProps {
  name: string;
  username: string;
  avatar: string;
  bio?: string;
  followers: number;
  following: number;
  tweets: number;
  isFollowing?: boolean;
  onFollow?: () => void;
  className?: string;
}
```

### B站个人资料卡片

**组件名称**: `BilibiliProfileCard`

**功能特性**:

- 显示用户头像、昵称和签名
- 支持粉丝数和关注数显示
- 支持视频数量显示
- 支持关注按钮
- B站特色设计风格

**使用示例**:

```tsx
import { BilibiliProfileCard } from "@ui2someone/react";

function App() {
  return (
    <BilibiliProfileCard
      nickname="B站用户"
      signature="这是一个B站用户的签名"
      avatar="https://example.com/avatar.jpg"
      fans={5000}
      following={200}
      videos={50}
      isFollowing={true}
      onFollow={() => console.log("Follow clicked")}
    />
  );
}
```

**Props 接口**:

```typescript
interface BilibiliProfileCardProps {
  nickname: string;
  signature?: string;
  avatar: string;
  fans: number;
  following: number;
  videos: number;
  isFollowing?: boolean;
  onFollow?: () => void;
  className?: string;
}
```

## 设计原则

### 统一性

- 所有卡片组件遵循相同的 API 设计模式
- 统一的样式系统和主题支持
- 一致的交互行为

### 平台特色

- 保持各平台的设计语言和视觉特色
- 使用平台特定的颜色和图标
- 符合用户的使用习惯

### 可定制性

- 支持自定义样式和主题
- 灵活的 props 配置
- 可扩展的组件结构

## 样式系统

### 主题支持

所有卡片组件都支持主题系统，可以通过 CSS 变量进行定制：

```css
:root {
  --card-bg: #ffffff;
  --card-border: #e5e7eb;
  --text-primary: #111827;
  --text-secondary: #6b7280;
}
```

### 响应式设计

组件采用响应式设计，在不同屏幕尺寸下都能良好显示：

- 移动端：单列布局，紧凑设计
- 平板端：双列布局，适中间距
- 桌面端：多列布局，宽松间距

## 性能优化

### 懒加载

- 图片支持懒加载
- 组件按需渲染
- 优化重渲染性能

### 内存管理

- 合理的事件监听器管理
- 避免内存泄漏
- 优化组件生命周期

## 最佳实践

### 使用建议

1. 根据实际需求选择合适的卡片组件
2. 提供完整的用户信息以获得最佳显示效果
3. 合理处理加载状态和错误状态
4. 注意无障碍访问性

### 性能考虑

1. 避免频繁的 props 更新
2. 使用 React.memo 优化渲染性能
3. 合理使用 useCallback 和 useMemo
4. 注意图片资源的优化

## 故障排除

### 常见问题

**Q: 图片无法显示？**
A: 检查图片 URL 是否正确，确保网络连接正常。

**Q: 样式显示异常？**
A: 确保正确引入了样式文件，检查 CSS 变量是否正确设置。

**Q: 组件无法渲染？**
A: 检查必需的 props 是否都已提供，查看控制台错误信息。

### 调试技巧

1. 使用浏览器开发者工具检查组件结构
2. 查看 React DevTools 中的组件状态
3. 检查网络请求和资源加载
4. 使用 Storybook 进行组件调试

## 更新日志

### v1.1.0

- 新增 B站个人资料卡片组件
- 优化 X 个人资料卡片样式
- 改进响应式设计

### v1.0.0

- 初始版本发布
- 包含 X 个人资料卡片组件
- 基础样式系统

## 贡献指南

欢迎贡献代码！请查看 [贡献指南](../../CONTRIBUTING.md) 了解详细信息。

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](../../LICENSE) 文件了解详情。
