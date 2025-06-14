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
    isHoverable: { control: 'boolean' },
    isPressable: { control: 'boolean' },
    isBlurred: { control: 'boolean' },
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

export const Hoverable: Story = {
  args: {
    qrCodeContent: 'http://weixin.qq.com/r/mp/mBeRiZ3ENsBJrdnq90KK',
    accountName: '海鱼Harry',
    placeholder: '微信搜一搜',
    isHoverable: true,
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

export const Blurred: Story = {
  args: {
    qrCodeContent: 'http://weixin.qq.com/r/mp/mBeRiZ3ENsBJrdnq90KK',
    accountName: '海鱼Harry',
    placeholder: '微信搜一搜',
    isBlurred: true,
  },
};

export const NoShadow: Story = {
  args: {
    qrCodeContent: 'http://weixin.qq.com/r/mp/mBeRiZ3ENsBJrdnq90KK',
    accountName: '海鱼Harry',
    placeholder: '微信搜一搜',
    shadow: 'none',
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

