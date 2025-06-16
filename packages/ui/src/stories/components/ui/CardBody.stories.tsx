import type { Meta, StoryObj } from '@storybook/react-vite';
import { CardBody } from '../../../components/ui/card';

const meta = {
  title: 'UI/Components/Ui/CardBody',
  component: CardBody,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' }
  },
} satisfies Meta<typeof CardBody>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Example content',
  },
};