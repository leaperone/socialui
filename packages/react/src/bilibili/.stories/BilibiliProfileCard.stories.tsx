import type { Meta, StoryObj } from "@storybook/react-vite";
import { BilibiliProfileCard } from "../bilibili-profile-card";

const meta: Meta<typeof BilibiliProfileCard> = {
  title: "China/Bilibili/BilibiliProfileCard",
  component: BilibiliProfileCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["solid", "flat", "bordered"],
    },
    orientation: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
    },
    shadow: {
      control: { type: "select" },
      options: ["none", "sm", "md", "lg"],
    },
    radius: {
      control: { type: "select" },
      options: ["none", "sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    uid: "1577804",
    username: "哔哩哔哩弹幕网",
    qrCodeContent: "https://space.bilibili.com/1577804",
  },
};

export const Vertical: Story = {
  args: {
    uid: "11073",
    username: "老番茄",
    qrCodeContent: "https://space.bilibili.com/11073",
    orientation: "vertical",
  },
};

export const Flat: Story = {
  args: {
    uid: "208259",
    username: "Lex Burner",
    qrCodeContent: "https://space.bilibili.com/208259",
    variant: "flat",
  },
};

export const Bordered: Story = {
  args: {
    uid: "14082",
    username: "影视飓风",
    qrCodeContent: "https://space.bilibili.com/14082",
    variant: "bordered",
  },
};

export const Pressable: Story = {
  args: {
    uid: "37663924",
    username: "CodeSheep程序羊",
    qrCodeContent: "https://space.bilibili.com/37663924",
    shadow: "md",
  },
};

export const FullWidth: Story = {
  args: {
    uid: "98888",
    username: "Bilibili 技术官方",
    qrCodeContent: "https://space.bilibili.com/98888",
    fullWidth: true,
  },
  parameters: {
    layout: "padded",
  },
};
