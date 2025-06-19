# SocialUI

基于 Turborepo 的现代化 UI 组件库项目，包含自动化工具链和 Storybook 集成。

## 📖 文档

详细的技术文档和使用指南请查看 [docs/](./docs/) 目录：

- [项目文档总览](./docs/README.md)
- [Storybook Stories 自动生成功能](./docs/storybook-auto-generation.md)

## 🚀 快速开始

### 在 React (or Nextjs) 中使用

```
pnpm i @socialui/react
```

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
