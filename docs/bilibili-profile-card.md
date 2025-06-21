---
title: Bilibili Profile Card Component
description: A customizable React component to display Bilibili user profiles.
---

# Bilibili Profile Card

The `BilibiliProfileCard` is a versatile and themeable React component designed to showcase Bilibili user profiles in a compact and visually appealing card format. It supports multiple style variants, light and dark modes, and various layout customizations.

## Features

- **Customizable Variants**: Choose from `solid`, `flat`, and `bordered` styles.
- **Dark Mode Support**: Automatically adapts to dark and light themes for `flat` and `bordered` variants.
- **Clickable QR Code**: The QR code is a button that links directly to the user's Bilibili space.
- **Layout Options**: Supports both `horizontal` and `vertical` orientations.
- **Responsive Sizing**: Can be set to `fullWidth` to fit its container.
- **Customizable Appearance**: Control the card's `shadow` and `radius`.

## Props

The component accepts the following props:

| Prop            | Type                                   | Default        | Description                                                    |
| --------------- | -------------------------------------- | -------------- | -------------------------------------------------------------- |
| `qrCodeContent` | `string`                               | `.../example`  | The content for the QR code, typically the user's space URL.   |
| `uid`           | `string`                               | `"123456789"`  | The user's Bilibili UID.                                       |
| `username`      | `string`                               | `"用户名"`     | The user's Bilibili username.                                  |
| `variant`       | `"solid"` \| `"flat"` \| `"bordered"`  | `"solid"`      | The style variant of the card.                                 |
| `orientation`   | `"horizontal"` \| `"vertical"`         | `"horizontal"` | The layout orientation of the card's content.                  |
| `shadow`        | `"none"` \| `"sm"` \| `"md"` \| `"lg"` | `"none"`       | The shadow depth of the card.                                  |
| `radius`        | `"none"` \| `"sm"` \| `"md"` \| `"lg"` | `"lg"`         | The corner radius of the card.                                 |
| `fullWidth`     | `boolean`                              | `false`        | If `true`, the card will take up the full width of its parent. |
| `isHoverable`   | `boolean`                              | `false`        | If `true`, applies a hover effect to the card.                 |
| `className`     | `string`                               | `undefined`    | Additional CSS classes to apply to the card.                   |

## Usage Example

Here's a basic example of how to use the `BilibiliProfileCard`:

```tsx
import { BilibiliProfileCard } from "./components/BilibiliProfileCard";

function App() {
  return (
    <BilibiliProfileCard
      uid="1577804"
      username="哔哩哔哩弹幕网"
      qrCodeContent="https://space.bilibili.com/1577804"
      variant="flat"
      radius="md"
      shadow="lg"
    />
  );
}
```

## Variants and Theming

### Solid

The `solid` variant uses a solid pink background (`#FF6699`) with white text. It does not change in dark mode.

### Flat

The `flat` variant has a light, semi-transparent pink background. It adapts to dark mode by using a deeper background color and lighter text for better contrast.

- **Light Mode**: `bg-[#FF6699]/20`, `text-[#992651]`
- **Dark Mode**: `dark:bg-[#66223B]/70`, `dark:text-[#FFA8C6]`

### Bordered

The `bordered` variant has a subtle background with a prominent border. It also supports dark mode.

- **Light Mode**: `bg-[#FF6699]/10`, `text-[#992651]`, `border-[#FF6699]/70`
- **Dark Mode**: `dark:bg-[#66223B]/40`, `dark:text-[#FFA8C6]`, `dark:border-[#FF6699]/50`
