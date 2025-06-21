import type { Meta, StoryObj } from "@storybook/react-vite";
import { YouTubeChannelCard } from "../../youtube/youtube-channel-card";

const meta: Meta<typeof YouTubeChannelCard> = {
  title: "International/YouTube/YouTubeChannelCard",
  component: YouTubeChannelCard,
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
    channelName: "MrBeast",
    subscribers: "250M",
    videos: "750",
    qrCodeContent: "https://www.youtube.com/@MrBeast",
    channelUrl: "https://www.youtube.com/@MrBeast",
  },
};

export const Vertical: Story = {
  args: {
    channelName: "PewDiePie",
    subscribers: "111M",
    videos: "4.7K",
    qrCodeContent: "https://www.youtube.com/@PewDiePie",
    channelUrl: "https://www.youtube.com/@PewDiePie",
    orientation: "vertical",
  },
};

export const Flat: Story = {
  args: {
    channelName: "TED",
    subscribers: "23M",
    videos: "3.9K",
    qrCodeContent: "https://www.youtube.com/@TED",
    channelUrl: "https://www.youtube.com/@TED",
    variant: "flat",
  },
};

export const Bordered: Story = {
  args: {
    channelName: "National Geographic",
    subscribers: "21M",
    videos: "2.1K",
    qrCodeContent: "https://www.youtube.com/@NatGeo",
    channelUrl: "https://www.youtube.com/@NatGeo",
    variant: "bordered",
  },
};

export const FullWidth: Story = {
  args: {
    channelName: "NASA",
    subscribers: "11M",
    videos: "5.4K",
    qrCodeContent: "https://www.youtube.com/@NASA",
    channelUrl: "https://www.youtube.com/@NASA",
    fullWidth: true,
  },
  parameters: {
    layout: "padded",
  },
};
