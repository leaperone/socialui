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
  },
} satisfies Meta<typeof WeChatCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    qrCodeContent: 'http://weixin.qq.com/r/mp/mBeRiZ3ENsBJrdnq90KK',
    accountName: '海鱼Harry',
    placeholder: '微信搜一搜',
  },
};

export const CustomAccount: Story = {
  args: {
    qrCodeContent: 'http://weixin.qq.com/r/mp/mBeRiZ3ENsBJrdnq90KK',
    accountName: 'MyWeChat',
    placeholder: '微信搜一搜',
  },
};

export const Pressable: Story = {
  args: {
    qrCodeContent: 'http://weixin.qq.com/r/mp/mBeRiZ3ENsBJrdnq90KK',
    accountName: '海鱼Harry',
    placeholder: '微信搜一搜',
    isPressable: true,
  },
};

export const Shadow: Story = {
  args: {
    qrCodeContent: 'http://weixin.qq.com/r/mp/mBeRiZ3ENsBJrdnq90KK',
    accountName: '海鱼Harry',
    placeholder: '微信搜一搜',
    shadow: 'lg',
  },
};

export const FullWidth: Story = {
  args: {
    qrCodeContent: 'http://weixin.qq.com/r/mp/mBeRiZ3ENsBJrdnq90KK',
    accountName: '海鱼Harry',
    placeholder: '微信搜一搜',
    fullWidth: true,
  },
};

