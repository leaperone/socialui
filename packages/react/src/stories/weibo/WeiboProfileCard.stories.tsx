import type { Meta, StoryObj } from "@storybook/react-vite";
import { WeiboProfileCard } from "../../weibo/weibo-profile-card";

const meta: Meta<typeof WeiboProfileCard> = {
  title: "China/Weibo/WeiboProfileCard",
  component: WeiboProfileCard,
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
    uid: "1618051664",
    username: "新浪科技",
    followers: "45.7M",
    following: "2.3K",
    qrCodeContent: "https://weibo.com/u/1618051664",
  },
};

export const Vertical: Story = {
  args: {
    uid: "1784473157",
    username: "人民日报",
    followers: "138M",
    following: "34",
    qrCodeContent: "https://weibo.com/u/1784473157",
    orientation: "vertical",
  },
};

export const Flat: Story = {
  args: {
    uid: "2656274875",
    username: "央视新闻",
    followers: "115M",
    following: "19",
    qrCodeContent: "https://weibo.com/u/2656274875",
    variant: "flat",
  },
};

export const Bordered: Story = {
  args: {
    uid: "1887344341",
    username: "头条新闻",
    followers: "94.8M",
    following: "437",
    qrCodeContent: "https://weibo.com/u/1887344341",
    variant: "bordered",
  },
};

export const FullWidth: Story = {
  args: {
    uid: "1259110474",
    username: "中国新闻周刊",
    followers: "23.6M",
    following: "1.2K",
    qrCodeContent: "https://weibo.com/u/1259110474",
    fullWidth: true,
  },
  parameters: {
    layout: "padded",
  },
};
