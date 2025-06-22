# UI2Someone React

A modern React UI component library for social media display with semantic colors and DaisyUI integration.

## Features

- 🎨 **Semantic Color System** - Complete color system with 50-900 scales
- 🌙 **Dark Mode Support** - Automatic dark/light theme switching
- 📱 **Responsive Design** - Mobile-first responsive components
- ♿ **Accessibility** - WCAG compliant components
- 🎯 **TypeScript** - Full TypeScript support
- 🎨 **Tailwind CSS** - Built on Tailwind CSS
- 🌟 **daisyUI Integration** - Beautiful component library built on top of Tailwind CSS
- 📖 **Storybook** - Interactive component documentation

## Installation

```bash
npm install @ui2someone/react
# or
pnpm add @ui2someone/react
# or
yarn add @ui2someone/react
```

## Quick Start

### WeChat Components

Specialized components for WeChat integration.

```tsx
"use client";

import { WeChatOfficialAccountCard } from "@ui2someone/react";

export default function Abc() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <WeChatOfficialAccountCard />
    </div>
  );
}
```

### daisyUI Components

The library includes daisyUI integration, providing beautiful pre-built components.

```tsx
import { DaisyUITest } from "@ui2someone/react";

export default function DaisyUIExample() {
  return (
    <div className="p-4">
      <DaisyUITest />
    </div>
  );
}
```

## daisyUI Integration

This library includes daisyUI, a beautiful component library built on top of Tailwind CSS. You can use all daisyUI components directly:

```tsx
// daisyUI Button
<button className="btn btn-primary">Primary Button</button>

// daisyUI Card
<div className="card bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p>Card content</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Action</button>
    </div>
  </div>
</div>

// daisyUI Alert
<div className="alert alert-info">
  <span>Information alert</span>
</div>
```

### Available daisyUI Components

- **Buttons**: `btn`, `btn-primary`, `btn-secondary`, etc.
- **Cards**: `card`, `card-body`, `card-title`, `card-actions`
- **Alerts**: `alert`, `alert-info`, `alert-success`, `alert-warning`, `alert-error`
- **Badges**: `badge`, `badge-primary`, `badge-secondary`, etc.
- **And many more...**

Visit [daisyUI documentation](https://daisyui.com/components/) for the complete list of available components.

## TypeScript Support

All components are fully typed with TypeScript:

```tsx
import { ButtonProps, CardProps } from "@ui2someone/react";

const MyButton: React.FC<ButtonProps> = props => {
  return <Button {...props} />;
};
```

## Contributing

We welcome contributions! Please see our contributing guidelines for more information.

### Publish to NPMjs

```
npm run build
npm publish --access public
```

## Usage

### Basic Usage

```tsx
import { WeChatOfficialAccountCard } from "@ui2someone/react";

function App() {
  return (
    <WeChatOfficialAccountCard
      name="微信官方账号"
      description="这是一个微信官方账号的示例"
      avatar="https://example.com/avatar.jpg"
      qrCode="https://example.com/qr-code.png"
      followers={10000}
      articles={50}
    />
  );
}
```

### With DaisyUI

```tsx
import { DaisyUITest } from "@ui2someone/react";

function App() {
  return (
    <div className="p-4">
      <DaisyUITest />
    </div>
  );
}
```

## Components

### Social Media Cards

- `WeChatOfficialAccountCard` - 微信官方账号卡片
- `WeChatContactCard` - 微信联系人卡片
- `XProfileCard` - X (Twitter) 个人资料卡片
- `LinkedInProfileCard` - LinkedIn 个人资料卡片
- `FacebookProfileCard` - Facebook 个人资料卡片
- `WeiboProfileCard` - 微博个人资料卡片
- `BilibiliProfileCard` - B站个人资料卡片
- `YouTubeChannelCard` - YouTube 频道卡片
- `TwitchLiveRoomCard` - Twitch 直播间卡片
- `WhatsAppContactCard` - WhatsApp 联系人卡片
- `LineContactCard` - Line 联系人卡片
- `JikeProfileCard` - 即刻个人资料卡片

### E-commerce Cards

- `TaobaoStoreCard` - 淘宝店铺卡片
- `StripeProductCard` - Stripe 产品卡片

### Contact Cards

- `VCardContactCard` - vCard 联系人卡片

### Utility Components

- `DaisyUITest` - DaisyUI 测试组件

## Types

```tsx
import { ButtonProps, CardProps } from "@ui2someone/react";

// Button component props
interface ButtonProps {
  variant?: "primary" | "secondary" | "accent" | "ghost" | "link" | "outline";
  size?: "xs" | "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

// Card component props
interface CardProps {
  children: React.ReactNode;
  className?: string;
}
```

## Styling

This library uses Tailwind CSS with DaisyUI for styling. Make sure to include the required CSS:

```tsx
import "@ui2someone/react/styles";
```

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build the library
pnpm build

# Run tests
pnpm test

# Run Storybook
pnpm storybook
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
