import type { Meta, StoryObj } from "@storybook/react-vite";
import { FacebookProfileCard } from "../../facebook/facebook-profile-card";

const meta: Meta<typeof FacebookProfileCard> = {
  title: "International/Facebook/FacebookProfileCard",
  component: FacebookProfileCard,
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
    username: "zuck",
    displayName: "Mark Zuckerberg",
    followers: "119M",
    likes: "120M",
    qrCodeContent: "https://www.facebook.com/zuck",
    profileUrl: "https://www.facebook.com/zuck",
  },
};

export const Vertical: Story = {
  args: {
    username: "meta",
    displayName: "Meta",
    followers: "12.5M",
    likes: "12.2M",
    qrCodeContent: "https://www.facebook.com/meta",
    profileUrl: "https://www.facebook.com/meta",
    orientation: "vertical",
  },
};

export const Flat: Story = {
  args: {
    username: "react",
    displayName: "React",
    followers: "234K",
    likes: "230K",
    qrCodeContent: "https://www.facebook.com/react",
    profileUrl: "https://www.facebook.com/react",
    variant: "flat",
  },
};

export const Bordered: Story = {
  args: {
    username: "google",
    displayName: "Google",
    followers: "28M",
    likes: "27.5M",
    qrCodeContent: "https://www.facebook.com/Google",
    profileUrl: "https://www.facebook.com/Google",
    variant: "bordered",
  },
};

export const FullWidth: Story = {
  args: {
    username: "nasa",
    displayName: "NASA",
    followers: "50M",
    likes: "49M",
    qrCodeContent: "https://www.facebook.com/NASA",
    profileUrl: "https://www.facebook.com/NASA",
    fullWidth: true,
  },
  parameters: {
    layout: "padded",
  },
};
