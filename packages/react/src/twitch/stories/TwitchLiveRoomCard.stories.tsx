import type { Meta, StoryObj } from "@storybook/react-vite";
import { TwitchLiveRoomCard } from "../../twitch/twitch-live-room-card";

const meta: Meta<typeof TwitchLiveRoomCard> = {
  title: "International/Twitch/TwitchLiveRoomCard",
  component: TwitchLiveRoomCard,
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
    isLive: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    streamerName: "shroud",
    streamTitle: "VALORANT | PROVANDO O NOVO AGENTE",
    category: "Valorant",
    viewers: "35.3K",
    isLive: true,
    qrCodeContent: "https://www.twitch.tv/shroud",
    profileUrl: "https://www.twitch.tv/shroud",
  },
};

export const Vertical: Story = {
  args: {
    streamerName: "xQc",
    streamTitle: "Reacting to things | Viewer videos",
    category: "Just Chatting",
    viewers: "78.1K",
    isLive: true,
    qrCodeContent: "https://www.twitch.tv/xqcow",
    profileUrl: "https://www.twitch.tv/xqcow",
    orientation: "vertical",
  },
};

export const Flat: Story = {
  args: {
    streamerName: "summit1g",
    streamTitle: "GTA RP | Summit's Back!",
    category: "Grand Theft Auto V",
    viewers: "22.5K",
    isLive: true,
    qrCodeContent: "https://www.twitch.tv/summit1g",
    profileUrl: "https://www.twitch.tv/summit1g",
    variant: "flat",
  },
};

export const Bordered: Story = {
  args: {
    streamerName: "pokimane",
    streamTitle: "Chill stream and Valorant later",
    category: "Just Chatting",
    viewers: "15.8K",
    isLive: true,
    qrCodeContent: "https://www.twitch.tv/pokimane",
    profileUrl: "https://www.twitch.tv/pokimane",
    variant: "bordered",
  },
};

export const Offline: Story = {
  args: {
    streamerName: "LIRIK",
    streamTitle: "Last stream was 2 hours ago",
    category: "Offline",
    isLive: false,
    qrCodeContent: "https://www.twitch.tv/lirik",
    profileUrl: "https://www.twitch.tv/lirik",
  },
};

export const FullWidth: Story = {
  args: {
    streamerName: "Ninja",
    streamTitle: "Fortnite with the squad!",
    category: "Fortnite",
    viewers: "45.2K",
    isLive: true,
    qrCodeContent: "https://www.twitch.tv/ninja",
    profileUrl: "https://www.twitch.tv/ninja",
    fullWidth: true,
  },
  parameters: {
    layout: "padded",
  },
};
