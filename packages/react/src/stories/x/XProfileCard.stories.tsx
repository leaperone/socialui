import type { Meta, StoryObj } from "@storybook/react-vite";
import { XProfileCard } from "../../x/x-profile-card";

const meta: Meta<typeof XProfileCard> = {
  title: "International/X/XProfileCard",
  component: XProfileCard,
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
    username: "elonmusk",
    displayName: "Elon Musk",
    // followers: "163.7M",
    // following: "743",
    qrCodeContent: "https://x.com/elonmusk",
    profileUrl: "https://x.com/elonmusk",
  },
};

export const Vertical: Story = {
  args: {
    username: "openai",
    displayName: "OpenAI",
    followers: "6.2M",
    following: "12",
    qrCodeContent: "https://x.com/openai",
    profileUrl: "https://x.com/openai",
    orientation: "vertical",
  },
};

export const Flat: Story = {
  args: {
    username: "vercel",
    displayName: "Vercel",
    followers: "234.5K",
    following: "168",
    qrCodeContent: "https://x.com/vercel",
    profileUrl: "https://x.com/vercel",
    variant: "flat",
  },
};

export const Bordered: Story = {
  args: {
    username: "github",
    displayName: "GitHub",
    followers: "2.1M",
    following: "348",
    qrCodeContent: "https://x.com/github",
    profileUrl: "https://x.com/github",
    variant: "bordered",
  },
};

export const Light: Story = {
  args: {
    username: "nextjs",
    displayName: "Next.js",
    followers: "89.3K",
    following: "42",
    qrCodeContent: "https://x.com/nextjs",
    profileUrl: "https://x.com/nextjs",
    variant: "light",
  },
};

export const Pressable: Story = {
  args: {
    username: "reactjs",
    displayName: "React",
    followers: "718.2K",
    following: "267",
    qrCodeContent: "https://x.com/reactjs",
    profileUrl: "https://x.com/reactjs",
    isPressable: true,
    shadow: "md",
  },
};

export const FullWidth: Story = {
  args: {
    username: "tailwindcss",
    displayName: "Tailwind CSS",
    followers: "397.8K",
    following: "124",
    qrCodeContent: "https://x.com/tailwindcss",
    profileUrl: "https://x.com/tailwindcss",
    fullWidth: true,
  },
  parameters: {
    layout: "padded",
  },
};
