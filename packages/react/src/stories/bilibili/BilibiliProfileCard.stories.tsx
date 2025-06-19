import type { Meta, StoryObj } from "@storybook/react-vite";
import { BilibiliProfileCard } from "../../bilibili/bilibili-profile-card";

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
      options: ["solid", "flat", "faded", "bordered", "light"],
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
    fans: "1024.5万",
    following: "1",
    videos: "1.2万",
    qrCodeContent: "https://space.bilibili.com/1577804",
    profileUrl: "https://space.bilibili.com/1577804",
  },
};

export const Vertical: Story = {
  args: {
    uid: "11073",
    username: "老番茄",
    fans: "1689.2万",
    following: "251",
    videos: "1.8万",
    qrCodeContent: "https://space.bilibili.com/11073",
    profileUrl: "https://space.bilibili.com/11073",
    orientation: "vertical",
  },
};

export const Flat: Story = {
  args: {
    uid: "208259",
    username: "Lex Burner",
    fans: "891.3万",
    following: "184",
    videos: "3.2万",
    qrCodeContent: "https://space.bilibili.com/208259",
    profileUrl: "https://space.bilibili.com/208259",
    variant: "flat",
  },
};

export const Bordered: Story = {
  args: {
    uid: "14082",
    username: "影视飓风",
    fans: "1245.6万",
    following: "89",
    videos: "2.1万",
    qrCodeContent: "https://space.bilibili.com/14082",
    profileUrl: "https://space.bilibili.com/14082",
    variant: "bordered",
  },
};

export const Light: Story = {
  args: {
    uid: "546195",
    username: "敖厂长",
    fans: "1967.4万",
    following: "712",
    videos: "456",
    qrCodeContent: "https://space.bilibili.com/546195",
    profileUrl: "https://space.bilibili.com/546195",
    variant: "light",
  },
};

export const Pressable: Story = {
  args: {
    uid: "37663924",
    username: "CodeSheep程序羊",
    fans: "45.6万",
    following: "234",
    videos: "89",
    qrCodeContent: "https://space.bilibili.com/37663924",
    profileUrl: "https://space.bilibili.com/37663924",
    isPressable: true,
    shadow: "md",
  },
};

export const FullWidth: Story = {
  args: {
    uid: "98888",
    username: "Bilibili 技术官方",
    fans: "156.8万",
    following: "42",
    videos: "1234",
    qrCodeContent: "https://space.bilibili.com/98888",
    profileUrl: "https://space.bilibili.com/98888",
    fullWidth: true,
  },
  parameters: {
    layout: "padded",
  },
};

export const MinimalInfo: Story = {
  args: {
    uid: "123456",
    username: "新用户",
    qrCodeContent: "https://space.bilibili.com/123456",
    profileUrl: "https://space.bilibili.com/123456",
  },
};
