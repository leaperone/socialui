# UI2Someone

A modern React UI component library for social media display with semantic colors and DaisyUI integration.

## 📖 文档

详细的技术文档和使用指南请查看 [docs/](./docs/) 目录：

- [项目文档总览](./docs/README.md)
- [Storybook Stories 自动生成功能](./docs/storybook-auto-generation.md)

## 🚀 快速开始

### 在 React (or Nextjs) 中使用

```bash
pnpm i @ui2someone/react
```

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

### UI 组件开发

```bash
# 进入 UI 包目录
cd packages/ui

# 自动生成组件的 Storybook Stories
pnpm generate:stories

# 启动 Storybook 开发服务
pnpm storybook
```

### 推荐的开发流程

```bash
# 终端 1: 启动 Stories 自动生成监听
cd packages/ui && pnpm watch:stories

# 终端 2: 启动 Storybook
cd packages/ui && pnpm storybook
```

## Features

- 🎨 **Semantic Colors**: Built-in semantic color system
- 🎯 **DaisyUI Integration**: Seamless DaisyUI component integration
- 📱 **Social Media Cards**: Ready-to-use social media profile cards
- 🛍️ **E-commerce Cards**: Product and store display cards
- 📞 **Contact Cards**: Various contact information cards
- 🎭 **TypeScript**: Full TypeScript support
- ⚡ **Tailwind CSS**: Powered by Tailwind CSS
- 📖 **Storybook**: Interactive component documentation

## Components

### Social Media Cards

- WeChat Official Account Card
- WeChat Contact Card
- X (Twitter) Profile Card
- LinkedIn Profile Card
- Facebook Profile Card
- Weibo Profile Card
- Bilibili Profile Card
- YouTube Channel Card
- Twitch Live Room Card
- WhatsApp Contact Card
- Line Contact Card
- Jike Profile Card

### E-commerce Cards

- Taobao Store Card
- Stripe Product Card

### Contact Cards

- vCard Contact Card

## Documentation

Visit our [documentation](https://ui2someone.vercel.app) for detailed guides and examples.

## Contributing

We welcome contributions! Please see our [contributing guide](CONTRIBUTING.md) for details.

## License

MIT License - see [LICENSE](LICENSE) for details.
