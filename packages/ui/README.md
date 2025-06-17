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

```tsx
import { Button, Card, CardBody } from "@socialui/react";
import "@socialui/react/styles";

function App() {
  return (
    <Card>
      <CardBody>
        <Button color="primary" variant="solid">
          Hello World!
        </Button>
      </CardBody>
    </Card>
  );
}
```

## Components

### Button

Versatile button component with multiple variants and colors.

```tsx
<Button color="primary" variant="solid" size="md">
  Primary Button
</Button>
<Button color="success" variant="bordered" size="lg">
  Success Button
</Button>
```

### Card

Flexible card component for content containers.

```tsx
<Card variant="bordered" color="primary">
  <CardBody>
    <h3>Card Title</h3>
    <p>Card content goes here...</p>
  </CardBody>
</Card>
```

### Tooltip

Simple tooltip component for additional information.

```tsx
<Tooltip content="This is a tooltip">
  <Button>Hover me</Button>
</Tooltip>
```

### WeChat Components

Specialized components for WeChat integration.

```tsx
import { WeChatCard } from "@socialui/react";

<WeChatCard
  qrCodeContent="http://weixin.qq.com/r/example"
  accountName="Your Account"
  placeholder="微信搜一搜"
/>;
```

## Color System

Our UI library features a complete semantic color system:

### Semantic Colors

- `default` - Default/neutral color
- `primary` - Primary brand color
- `secondary` - Secondary color
- `success` - Success/positive actions
- `warning` - Warning/caution
- `danger` - Error/destructive actions
- `info` - Information/help

### Usage Examples

```tsx
// Button colors
<Button color="primary">Primary</Button>
<Button color="success">Success</Button>
<Button color="warning">Warning</Button>
<Button color="danger">Danger</Button>

// Tailwind classes with color scales
<div className="bg-primary-500 text-primary-foreground">
  Primary background
</div>
<div className="bg-success-100 text-success-900">
  Light success background
</div>
```

### Color Scales

Each semantic color includes a complete scale from 50-900:

```tsx
<div className="bg-primary-50">Lightest</div>
<div className="bg-primary-500">Medium</div>
<div className="bg-primary-900">Darkest</div>
```

## Styling

### Tailwind CSS Integration

This library is built on Tailwind CSS. Make sure to include our styles:

```tsx
import "@socialui/react/styles";
```

### Dark Mode

Components automatically support dark mode when you add the `dark` class to your root element:

```html
<html className="dark">
  <!-- Your app content -->
</html>
```

## TypeScript Support

All components are fully typed with TypeScript:

```tsx
import { ButtonProps, CardProps } from "@socialui/react";

const MyButton: React.FC<ButtonProps> = props => {
  return <Button {...props} />;
};
```

## Storybook Documentation

For interactive component documentation and examples, visit our Storybook (link to be added).

## Contributing

We welcome contributions! Please see our contributing guidelines for more information.

## License

MIT License - see LICENSE file for details.

## Changelog

### 1.0.0

- Initial release
- Button, Card, Tooltip, and WeChat components
- Complete semantic color system
- Dark mode support
- TypeScript support
