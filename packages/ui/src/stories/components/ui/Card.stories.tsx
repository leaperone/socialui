import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from '../../../components/ui/card';

const meta = {
  title: 'UI/Components/Ui/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
    shadow: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg'],
    },
    radius: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg'],
    },
    fullWidth: { control: 'boolean' },
    isPressable: { control: 'boolean' },
    variant: {
      control: { type: 'select' },
      options: ['solid', 'flat', 'faded', 'bordered', 'light'],
    }
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Example content',
    shadow: 'none',
    radius: 'none',
    fullWidth: false,
    isPressable: false,
    variant: 'solid'
  },
};
export const ShadowNone: Story = {
  args: {
    children: 'Example content',
    shadow: 'none',
    radius: 'none',
    fullWidth: false,
    isPressable: false,
    variant: 'solid'
  },
};
export const ShadowSm: Story = {
  args: {
    children: 'Example content',
    shadow: 'sm',
    radius: 'none',
    fullWidth: false,
    isPressable: false,
    variant: 'solid'
  },
};
export const ShadowMd: Story = {
  args: {
    children: 'Example content',
    shadow: 'md',
    radius: 'none',
    fullWidth: false,
    isPressable: false,
    variant: 'solid'
  },
};
export const ShadowLg: Story = {
  args: {
    children: 'Example content',
    shadow: 'lg',
    radius: 'none',
    fullWidth: false,
    isPressable: false,
    variant: 'solid'
  },
};
export const RadiusNone: Story = {
  args: {
    children: 'Example content',
    radius: 'none',
    shadow: 'none',
    fullWidth: false,
    isPressable: false,
    variant: 'solid'
  },
};
export const RadiusSm: Story = {
  args: {
    children: 'Example content',
    radius: 'sm',
    shadow: 'none',
    fullWidth: false,
    isPressable: false,
    variant: 'solid'
  },
};
export const RadiusMd: Story = {
  args: {
    children: 'Example content',
    radius: 'md',
    shadow: 'none',
    fullWidth: false,
    isPressable: false,
    variant: 'solid'
  },
};
export const RadiusLg: Story = {
  args: {
    children: 'Example content',
    radius: 'lg',
    shadow: 'none',
    fullWidth: false,
    isPressable: false,
    variant: 'solid'
  },
};
export const VariantSolid: Story = {
  args: {
    children: 'Example content',
    variant: 'solid',
    shadow: 'none',
    radius: 'none',
    fullWidth: false,
    isPressable: false,
  },
};
export const VariantFlat: Story = {
  args: {
    children: 'Example content',
    variant: 'flat',
    shadow: 'none',
    radius: 'none',
    fullWidth: false,
    isPressable: false,
  },
};
export const VariantFaded: Story = {
  args: {
    children: 'Example content',
    variant: 'faded',
    shadow: 'none',
    radius: 'none',
    fullWidth: false,
    isPressable: false,
  },
};
export const VariantBordered: Story = {
  args: {
    children: 'Example content',
    variant: 'bordered',
    shadow: 'none',
    radius: 'none',
    fullWidth: false,
    isPressable: false,
  },
};
export const VariantLight: Story = {
  args: {
    children: 'Example content',
    variant: 'light',
    shadow: 'none',
    radius: 'none',
    fullWidth: false,
    isPressable: false,
  },
};