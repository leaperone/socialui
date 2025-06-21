import type { Meta, StoryObj } from "@storybook/react-vite";
import { WeChatContactCard } from "../../wechat/wechat-contact-card";

const meta = {
  title: "China/Wechat/WeChatContactCard",
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
    variant: {
      control: { type: "select" },
      options: ["solid", "flat", "bordered"],
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
    nickname: "微信用户",
    variant: "solid",
    shadow: "md",
  },
};

export const Vertical: Story = {
  args: {
    nickname: "微信用户",
    orientation: "vertical",
    shadow: "md",
  },
};

export const Flat: Story = {
  args: {
    nickname: "微信用户",
    variant: "flat",
    shadow: "md",
  },
};

export const Bordered: Story = {
  args: {
    nickname: "微信用户",
    variant: "bordered",
    shadow: "md",
  },
};

export const Hoverable: Story = {
  args: {
    nickname: "微信用户",
    isHoverable: true,
    shadow: "md",
  },
};

export const FullWidth: Story = {
  args: {
    nickname: "微信用户",
    fullWidth: true,
    shadow: "md",
  },
  parameters: {
    layout: "padded",
  },
};
