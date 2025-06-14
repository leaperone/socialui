import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../button';

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['solid', 'outline', 'ghost'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'solid',
    size: 'md',
  },
};

export const Solid: Story = {
  args: {
    children: 'Solid Button',
    variant: 'solid',
    size: 'md',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
    size: 'md',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
    size: 'md',
  },
};

export const Small: Story = {
  args: {
    children: 'Small Button',
    variant: 'solid',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    variant: 'solid',
    size: 'lg',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    variant: 'solid',
    size: 'md',
    disabled: true,
  },
};
