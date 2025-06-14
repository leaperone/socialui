import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from '../card';

const meta = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
    title: { control: 'text' },
    href: { control: 'text' },
    children: { control: 'text' }
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Example content',
    className: 'Example className',
    title: 'Example title',
    href: 'Example href'
  },
};

