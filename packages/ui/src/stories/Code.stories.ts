import type { Meta, StoryObj } from '@storybook/react-vite';
import { Code } from '../code';

const meta = {
  title: 'UI/Code',
  component: Code,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
    children: { control: 'text' },
  },
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'npm install turbo',
  },
};

export const JavaScriptCode: Story = {
  args: {
    children: 'const hello = "world";',
    className: 'language-javascript',
  },
};

export const TypeScriptCode: Story = {
  args: {
    children: 'interface User { name: string; }',
    className: 'language-typescript',
  },
};

export const BashCommand: Story = {
  args: {
    children: 'pnpm install && pnpm dev',
    className: 'language-bash',
  },
};

export const MultilineCode: Story = {
  args: {
    children: `function greet(name: string) {
  return \`Hello, \${name}!\`;
}`,
    className: 'language-typescript',
  },
}; 