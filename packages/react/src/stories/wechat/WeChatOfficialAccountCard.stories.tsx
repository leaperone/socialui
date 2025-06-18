import type { Meta, StoryObj } from "@storybook/react-vite";
import { WeChatOfficialAccountCard } from "../../wechat/wechat-official-account-card";

const meta = {
  title: "SocialUI/Wechat/WeChatOfficialAccountCard",
  component: WeChatOfficialAccountCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    qrCodeContent: { control: "text" },
    accountName: { control: "text" },
    placeholder: { control: "text" },
    className: { control: "text" },
    shadow: {
      control: { type: "select" },
      options: ["none", "sm", "md", "lg"],
    },
    radius: {
      control: { type: "select" },
      options: ["none", "sm", "md", "lg"],
    },
    fullWidth: { control: "boolean" },
    isHoverable: { control: "boolean" },
    isPressable: { control: "boolean" },
    variant: {
      control: { type: "select" },
      options: ["solid", "flat", "faded", "bordered", "light"],
    },
    orientation: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
    },
  },
} satisfies Meta<typeof WeChatOfficialAccountCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    qrCodeContent: "http://weixin.qq.com/r/mp/mBeRiZ3ENsBJrdnq90KK",
    accountName: "海鱼Harry",
    placeholder: "微信搜一搜",
  },
};

export const ShadowNone: Story = {
  args: {
    shadow: "none",
    qrCodeContent: "http://weixin.qq.com/r/mp/mBeRiZ3ENsBJrdnq90KK",
    accountName: "海鱼Harry",
    placeholder: "微信搜一搜",
  },
};

export const ShadowSm: Story = {
  args: {
    shadow: "sm",
    qrCodeContent: "http://weixin.qq.com/r/mp/mBeRiZ3ENsBJrdnq90KK",
    accountName: "海鱼Harry",
    placeholder: "微信搜一搜",
  },
};

export const ShadowMd: Story = {
  args: {
    shadow: "md",
    qrCodeContent: "http://weixin.qq.com/r/mp/mBeRiZ3ENsBJrdnq90KK",
    accountName: "海鱼Harry",
    placeholder: "微信搜一搜",
  },
};

export const ShadowLg: Story = {
  args: {
    shadow: "lg",
    qrCodeContent: "http://weixin.qq.com/r/mp/mBeRiZ3ENsBJrdnq90KK",
    accountName: "海鱼Harry",
    placeholder: "微信搜一搜",
  },
};

export const RadiusNone: Story = {
  args: {
    radius: "none",
    qrCodeContent: "http://weixin.qq.com/r/mp/mBeRiZ3ENsBJrdnq90KK",
    accountName: "海鱼Harry",
    placeholder: "微信搜一搜",
  },
};

export const RadiusSm: Story = {
  args: {
    radius: "sm",
    qrCodeContent: "http://weixin.qq.com/r/mp/mBeRiZ3ENsBJrdnq90KK",
    accountName: "海鱼Harry",
    placeholder: "微信搜一搜",
  },
};

export const RadiusMd: Story = {
  args: {
    radius: "md",
    qrCodeContent: "http://weixin.qq.com/r/mp/mBeRiZ3ENsBJrdnq90KK",
    accountName: "海鱼Harry",
    placeholder: "微信搜一搜",
  },
};

export const RadiusLg: Story = {
  args: {
    radius: "lg",
    qrCodeContent: "http://weixin.qq.com/r/mp/mBeRiZ3ENsBJrdnq90KK",
    accountName: "海鱼Harry",
    placeholder: "微信搜一搜",
  },
};

export const VariantSolid: Story = {
  args: {
    variant: "solid",
    qrCodeContent: "http://weixin.qq.com/r/mp/mBeRiZ3ENsBJrdnq90KK",
    accountName: "海鱼Harry",
    placeholder: "微信搜一搜",
  },
};

export const VariantFlat: Story = {
  args: {
    variant: "flat",
    qrCodeContent: "http://weixin.qq.com/r/mp/mBeRiZ3ENsBJrdnq90KK",
    accountName: "海鱼Harry",
    placeholder: "微信搜一搜",
  },
};

export const VariantFaded: Story = {
  args: {
    variant: "faded",
    qrCodeContent: "http://weixin.qq.com/r/mp/mBeRiZ3ENsBJrdnq90KK",
    accountName: "海鱼Harry",
    placeholder: "微信搜一搜",
  },
};

export const VariantBordered: Story = {
  args: {
    variant: "bordered",
    qrCodeContent: "http://weixin.qq.com/r/mp/mBeRiZ3ENsBJrdnq90KK",
    accountName: "海鱼Harry",
    placeholder: "微信搜一搜",
  },
};

export const VariantLight: Story = {
  args: {
    variant: "light",
    qrCodeContent: "http://weixin.qq.com/r/mp/mBeRiZ3ENsBJrdnq90KK",
    accountName: "海鱼Harry",
    placeholder: "微信搜一搜",
  },
};

export const OrientationHorizontal: Story = {
  args: {
    orientation: "horizontal",
    qrCodeContent: "http://weixin.qq.com/r/mp/mBeRiZ3ENsBJrdnq90KK",
    accountName: "海鱼Harry",
    placeholder: "微信搜一搜",
  },
};

export const OrientationVertical: Story = {
  args: {
    orientation: "vertical",
    qrCodeContent: "http://weixin.qq.com/r/mp/mBeRiZ3ENsBJrdnq90KK",
    accountName: "海鱼Harry",
    placeholder: "微信搜一搜",
  },
};
