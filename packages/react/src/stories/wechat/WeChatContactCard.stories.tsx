import type { Meta, StoryObj } from "@storybook/react-vite";
import { WeChatContactCard } from "../../wechat/wechat-contact-card";

const meta = {
  title: "Wechat/WeChatContactCard",
  component: WeChatContactCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    qrCodeContent: { control: "text" },
    nickname: { control: "text" },
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
} satisfies Meta<typeof WeChatContactCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    qrCodeContent: "Example qrCodeContent",
    nickname: "Example nickname",

    className: "Example className",
    shadow: "none",
    radius: "lg",
    fullWidth: false,
    isHoverable: false,
    isPressable: false,
    variant: "solid",
    orientation: "horizontal",
  },
};
export const ShadowNone: Story = {
  args: {
    shadow: "none",
    qrCodeContent: "Example qrCodeContent",
    nickname: "Example nickname",
    className: "Example className",
    radius: "none",
    fullWidth: false,
    isHoverable: false,
    isPressable: false,
    variant: "solid",
    orientation: "horizontal",
  },
};
export const ShadowSm: Story = {
  args: {
    shadow: "sm",
    qrCodeContent: "Example qrCodeContent",
    nickname: "Example nickname",
    className: "Example className",
    radius: "none",
    fullWidth: false,
    isHoverable: false,
    isPressable: false,
    variant: "solid",
    orientation: "horizontal",
  },
};
export const ShadowMd: Story = {
  args: {
    shadow: "md",
    qrCodeContent: "Example qrCodeContent",
    nickname: "Example nickname",

    className: "Example className",
    radius: "none",
    fullWidth: false,
    isHoverable: false,
    isPressable: false,
    variant: "solid",
    orientation: "horizontal",
  },
};
export const ShadowLg: Story = {
  args: {
    shadow: "lg",
    qrCodeContent: "Example qrCodeContent",
    nickname: "Example nickname",
    className: "Example className",
    radius: "none",
    fullWidth: false,
    isHoverable: false,
    isPressable: false,
    variant: "solid",
    orientation: "horizontal",
  },
};
export const RadiusNone: Story = {
  args: {
    radius: "none",
    qrCodeContent: "Example qrCodeContent",
    nickname: "Example nickname",
    className: "Example className",
    shadow: "none",
    fullWidth: false,
    isHoverable: false,
    isPressable: false,
    variant: "solid",
    orientation: "horizontal",
  },
};
export const RadiusSm: Story = {
  args: {
    radius: "sm",
    qrCodeContent: "Example qrCodeContent",
    nickname: "Example nickname",
    className: "Example className",
    shadow: "none",
    fullWidth: false,
    isHoverable: false,
    isPressable: false,
    variant: "solid",
    orientation: "horizontal",
  },
};
export const RadiusMd: Story = {
  args: {
    radius: "md",
    qrCodeContent: "Example qrCodeContent",
    nickname: "Example nickname",
    className: "Example className",
    shadow: "none",
    fullWidth: false,
    isHoverable: false,
    isPressable: false,
    variant: "solid",
    orientation: "horizontal",
  },
};
export const RadiusLg: Story = {
  args: {
    radius: "lg",
    qrCodeContent: "Example qrCodeContent",
    nickname: "Example nickname",
    className: "Example className",
    shadow: "none",
    fullWidth: false,
    isHoverable: false,
    isPressable: false,
    variant: "solid",
    orientation: "horizontal",
  },
};
export const VariantSolid: Story = {
  args: {
    variant: "solid",
    qrCodeContent: "Example qrCodeContent",
    nickname: "Example nickname",
    className: "Example className",
    shadow: "none",
    radius: "none",
    fullWidth: false,
    isHoverable: false,
    isPressable: false,
    orientation: "horizontal",
  },
};
export const VariantFlat: Story = {
  args: {
    variant: "flat",
    qrCodeContent: "Example qrCodeContent",
    nickname: "Example nickname",
    className: "Example className",
    shadow: "none",
    radius: "none",
    fullWidth: false,
    isHoverable: false,
    isPressable: false,
    orientation: "horizontal",
  },
};
export const VariantFaded: Story = {
  args: {
    variant: "faded",
    qrCodeContent: "Example qrCodeContent",
    nickname: "Example nickname",
    className: "Example className",
    shadow: "none",
    radius: "none",
    fullWidth: false,
    isHoverable: false,
    isPressable: false,
    orientation: "horizontal",
  },
};
export const VariantBordered: Story = {
  args: {
    variant: "bordered",
    qrCodeContent: "Example qrCodeContent",
    nickname: "Example nickname",
    className: "Example className",
    shadow: "none",
    radius: "none",
    fullWidth: false,
    isHoverable: false,
    isPressable: false,
    orientation: "horizontal",
  },
};
export const VariantLight: Story = {
  args: {
    variant: "light",
    qrCodeContent: "Example qrCodeContent",
    nickname: "Example nickname",
    className: "Example className",
    shadow: "none",
    radius: "none",
    fullWidth: false,
    isHoverable: false,
    isPressable: false,
    orientation: "horizontal",
  },
};
export const OrientationHorizontal: Story = {
  args: {
    orientation: "horizontal",
    qrCodeContent: "Example qrCodeContent",
    nickname: "Example nickname",
    className: "Example className",
    shadow: "none",
    radius: "none",
    fullWidth: false,
    isHoverable: false,
    isPressable: false,
    variant: "solid",
  },
};
export const OrientationVertical: Story = {
  args: {
    orientation: "vertical",
    qrCodeContent: "Example qrCodeContent",
    nickname: "Example nickname",
    className: "Example className",
    shadow: "none",
    radius: "none",
    fullWidth: false,
    isHoverable: false,
    isPressable: false,
    variant: "solid",
  },
};
