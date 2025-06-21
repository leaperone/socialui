import type { Meta, StoryObj } from "@storybook/react-vite";
import { WeChatOfficialAccountCard } from "../../wechat/wechat-official-account-card";

const meta = {
  title: "China/Wechat/WeChatOfficialAccountCard",
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
    variant: {
      control: { type: "select" },
      options: ["solid", "flat", "bordered"],
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
    accountName: "海鱼Harry",
    placeholder: "微信搜一搜",
    shadow: "md",
  },
};

export const Vertical: Story = {
  args: {
    accountName: "海鱼Harry",
    placeholder: "微信搜一搜",
    orientation: "vertical",
    shadow: "md",
  },
};

export const Flat: Story = {
  args: {
    accountName: "海鱼Harry",
    placeholder: "微信搜一搜",
    variant: "flat",
    shadow: "md",
  },
};

export const Bordered: Story = {
  args: {
    accountName: "海鱼Harry",
    placeholder: "微信搜一搜",
    variant: "bordered",
    shadow: "md",
  },
};

export const Hoverable: Story = {
  args: {
    accountName: "海鱼Harry",
    placeholder: "微信搜一搜",
    isHoverable: true,
    shadow: "md",
  },
};

export const FullWidth: Story = {
  args: {
    accountName: "海鱼Harry",
    placeholder: "微信搜一搜",
    fullWidth: true,
    shadow: "md",
  },
  parameters: {
    layout: "padded",
  },
};
