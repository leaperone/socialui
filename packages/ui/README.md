# SocialUI React

A modern React UI component library with semantic color system and Tailwind CSS integration.

## Features

- 🎨 **Semantic Color System** - Complete color system with 50-900 scales
- 🌙 **Dark Mode Support** - Automatic dark/light theme switching
- 📱 **Responsive Design** - Mobile-first responsive components
- ♿ **Accessibility** - WCAG compliant components
- 🎯 **TypeScript** - Full TypeScript support
- 🎨 **Tailwind CSS** - Built on Tailwind CSS
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
