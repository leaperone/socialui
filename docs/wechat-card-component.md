# WeChatCard 组件文档

## 概述

WeChatCard 是一个现代化的微信展示卡片组件，支持二维码展示、账号信息显示和深色模式切换。组件采用 React + TypeScript 开发，集成了 HeroUI 设计系统。

## 功能特性

### 🎨 视觉设计
- **现代化外观**: 采用渐变背景和圆角设计
- **响应式布局**: 自适应不同屏幕尺寸
- **装饰元素**: 背景装饰圆形元素增强视觉效果

### 📱 二维码功能
- **动态生成**: 基于传入内容自动生成二维码
- **自适应**: 二维码在不同主题下自动调整颜色
- **加载状态**: 提供加载中的友好提示

### 🌙 深色模式支持 (NEW)
- **主题切换**: 支持浅色和深色两种主题模式
- **智能适配**: 所有元素在不同主题下都有相应的颜色适配
- **二维码反转**: 深色模式下二维码颜色自动反转以保持可读性

### 🔧 交互功能
- **一键复制**: 点击搜索按钮自动复制账号名到剪贴板
- **可配置性**: 丰富的属性配置选项

## API 参数

```typescript
interface WeChatCardProps {
  qrCodeContent?: string;      // 二维码内容
  accountName?: string;        // 账号名称
  placeholder?: string;        // 搜索框占位符
  className?: string;          // 自定义样式类
  shadow?: "none" | "sm" | "md" | "lg";     // 阴影大小
  radius?: "none" | "sm" | "md" | "lg";     // 圆角大小
  fullWidth?: boolean;         // 是否占满宽度
  isHoverable?: boolean;       // 是否可悬停
  isPressable?: boolean;       // 是否可点击
  isBlurred?: boolean;         // 是否模糊效果
  theme?: "light" | "dark";    // 主题模式 (NEW)
}
```

## 使用示例

### 基础使用

```tsx
import { WeChatCard } from "@/components/ui/wechat";

export default function App() {
  return (
    <WeChatCard 
      accountName="海鱼Harry"
      qrCodeContent="http://weixin.qq.com/r/mp/mBeRiZ3ENsBJrdnq90KK"
    />
  );
}
```

### 深色模式

```tsx
// 浅色模式 (默认)
<WeChatCard />

// 深色模式
<WeChatCard theme="dark" />

// 动态切换主题
const [isDark, setIsDark] = useState(false);

<WeChatCard 
  theme={isDark ? "dark" : "light"}
  accountName="海鱼Harry"
/>
```

### 自定义配置

```tsx
<WeChatCard 
  theme="dark"
  accountName="我的微信号"
  placeholder="搜索我的账号"
  qrCodeContent="自定义二维码内容"
  radius="lg"
  shadow="lg"
  isHoverable={true}
  className="max-w-md mx-auto"
/>
```

## 主题对比

| 属性 | 浅色模式 | 深色模式 |
|------|----------|----------|
| 背景渐变 | 绿色 (`from-green-500 to-green-400`) | 深灰 (`from-gray-800 to-gray-700`) |
| 二维码背景 | 白色 (`bg-white`) | 深灰 (`bg-gray-900`) |
| 搜索按钮 | 白色半透明 + 灰色文字 | 深灰半透明 + 浅灰文字 |
| 二维码颜色 | 黑色前景 + 白色背景 | 白色前景 + 黑色背景 |
| 装饰元素 | 白色半透明 | 白色低透明度 |

## 技术实现

### 依赖库
- `@heroui/react`: UI 组件库
- `lucide-react`: 图标库
- `qrcode`: 二维码生成
- `@iconify/react`: 微信图标

### 核心特性
- **懒加载**: 图标组件采用懒加载优化性能
- **条件样式**: 基于主题动态计算样式类
- **类型安全**: 完整的 TypeScript 类型定义
- **样式隔离**: 使用 `cn` 工具函数合并类名

## 更新日志

### v1.1.0 (Latest)
- ✨ 新增深色模式支持
- 🎨 优化二维码在不同主题下的显示效果
- 🔧 重构样式系统，采用条件样式计算
- 📝 完善类型定义和文档

### v1.0.0
- 🎉 初始版本发布
- 📱 支持二维码生成和展示
- 🖱️ 实现一键复制功能
- 🎨 现代化 UI 设计

## 最佳实践

1. **性能优化**: 使用 `useMemo` 缓存样式计算结果
2. **可访问性**: 为二维码添加 `alt` 属性
3. **错误处理**: 二维码生成失败时显示友好提示
4. **响应式**: 在不同设备上测试组件显示效果

## 贡献指南

如需为 WeChatCard 组件贡献代码：

1. 确保代码符合项目的 TypeScript 和 ESLint 规范
2. 新增功能需要相应的类型定义
3. 重要变更需要更新文档和示例
4. 提交前进行充分测试，确保浅色和深色模式都正常工作 