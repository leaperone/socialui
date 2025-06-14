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
    children: { control: 'text' }
  },
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Example content',
    className: 'Example className'
  },
};

