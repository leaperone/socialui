import type { Meta, StoryObj } from '@storybook/react-vite';
import { WeChatCard } from '../wechat';

const meta = {
  title: 'UI/WeChatCard',
  component: WeChatCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    qrCodeContent: { control: 'text' },
    accountName: { control: 'text' },
    placeholder: { control: 'text' },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof WeChatCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    qrCodeContent: 'http://weixin.qq.com/r/mp/mBeRiZ3ENsBJrdnq90KK',
    accountName: '海鱼Harry',
    placeholder: '微信搜一搜',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    qrCodeContent: 'http://weixin.qq.com/r/mp/mBeRiZ3ENsBJrdnq90KK',
    accountName: '海鱼Harry',
    placeholder: '微信搜一搜',
    size: 'lg',
  },
};

export const Small: Story = {
  args: {
    qrCodeContent: 'http://weixin.qq.com/r/mp/mBeRiZ3ENsBJrdnq90KK',
    accountName: '海鱼Harry',
    placeholder: '微信搜一搜',
    size: 'sm',
  },
};

export const CustomAccount: Story = {
  args: {
    qrCodeContent: 'https://weixin.qq.com/r/MyWeChat',
    accountName: 'MyWeChat',
    placeholder: '微信搜一搜',
    size: 'md',
  },
};

