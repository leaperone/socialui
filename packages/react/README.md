# SocialUI React

A modern React UI component library with semantic color system and Tailwind CSS integration.

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
npm install @socialui/react
# or
pnpm add @socialui/react
# or
yarn add @socialui/react
```

## Quick Start

### WeChat Components

Specialized components for WeChat integration.

```tsx
"use client";

import { WeChatOfficialAccountCard } from "@socialui/react";

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
import { DaisyUITest } from "@socialui/react";

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
import { ButtonProps, CardProps } from "@socialui/react";

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
