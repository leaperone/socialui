import type { Meta, StoryObj } from "@storybook/react-vite";
import { JikeProfileCard } from "../../jike/jike-profile-card";

const meta: Meta<typeof JikeProfileCard> = {
  title: "China/Jike/JikeProfileCard",
  component: JikeProfileCard,
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
    username: "dev",
    displayName: "即刻开发人员",
    followers: "1.2K",
    following: "34",
    posts: "150",
    qrCodeContent: "https://m.okjike.com/users/413155",
    profileUrl: "https://m.okjike.com/users/413155",
  },
};

export const Vertical: Story = {
  args: {
    username: "jike",
    displayName: "即刻",
    followers: "54K",
    following: "12",
    posts: "300",
    qrCodeContent: "https://m.okjike.com/users/1",
    profileUrl: "https://m.okjike.com/users/1",
    orientation: "vertical",
  },
};

export const Flat: Story = {
  args: {
    username: "CEO",
    displayName: "即刻CEO",
    followers: "23K",
    following: "100",
    posts: "500",
    qrCodeContent: "https://m.okjike.com/users/2",
    profileUrl: "https://m.okjike.com/users/2",
    variant: "flat",
  },
};

export const Bordered: Story = {
  args: {
    username: "design",
    displayName: "即刻设计",
    followers: "5K",
    following: "20",
    posts: "80",
    qrCodeContent: "https://m.okjike.com/users/3",
    profileUrl: "https://m.okjike.com/users/3",
    variant: "bordered",
  },
};

export const FullWidth: Story = {
  args: {
    username: "hr",
    displayName: "即刻HR",
    followers: "1K",
    following: "5",
    posts: "30",
    qrCodeContent: "https://m.okjike.com/users/4",
    profileUrl: "https://m.okjike.com/users/4",
    fullWidth: true,
  },
  parameters: {
    layout: "padded",
  },
};
