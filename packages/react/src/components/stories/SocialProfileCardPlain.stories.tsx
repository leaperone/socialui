import type { Meta, StoryObj } from "@storybook/react-vite";
import { SocialProfileCardPlain } from "../social-profile-card-plain";

const meta: Meta<typeof SocialProfileCardPlain> = {
  title: "Components/SocialProfileCardPlain",
  component: SocialProfileCardPlain,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    qrCodeContent: {
      control: "text",
      description: "Content for the QR code",
    },
    displayName: {
      control: "text",
      description: "Display name of the user",
    },
    username: {
      control: "text",
      description: "Username or handle",
    },
    uid: {
      control: "text",
      description: "User ID",
    },
    description: {
      control: "text",
      description: "Description text",
    },
    profileUrl: {
      control: "text",
      description: "Profile URL for links",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    qrCodeContent: "https://example.com/profile",
    displayName: "John Doe",
    username: "johndoe",
    description: "Scan QR code to connect",
    className: "p-6 bg-blue-600 text-white rounded-xl shadow-xl max-w-md",
    containerClassName: "flex gap-6 items-start",
    qrContainerClassName: "flex-shrink-0 h-28 w-28 overflow-hidden p-2 bg-white rounded-lg",
    qrImageClassName: "h-full w-full object-contain",
    contentClassName: "flex-1 space-y-4",
    userInfoClassName: "space-y-2",
    displayNameClassName: "text-xl font-bold text-white",
    usernameClassName: "text-sm text-blue-100",
    descriptionClassName: "text-sm text-blue-50",
  },
};

export const WithStats: Story = {
  args: {
    ...Default.args,
    stats: [
      { label: "Followers", value: "1.2K" },
      { label: "Following", value: "456" },
    ],
    statsClassName: "flex gap-4 text-sm",
    statItemClassName: "text-blue-100",
  },
};

export const WithUID: Story = {
  args: {
    ...Default.args,
    uid: "123456789",
    uidClassName: "text-xs text-blue-200 font-mono",
  },
};

export const DarkTheme: Story = {
  args: {
    qrCodeContent: "https://example.com/profile",
    displayName: "Jane Smith",
    username: "janesmith",
    description: "Connect with me",
    className: "p-6 bg-gray-900 text-white rounded-2xl shadow-2xl max-w-md border border-gray-700",
    containerClassName: "flex gap-6 items-start",
    qrContainerClassName: "flex-shrink-0 h-28 w-28 overflow-hidden p-2 bg-white rounded-lg",
    qrImageClassName: "h-full w-full object-contain",
    contentClassName: "flex-1 space-y-4",
    userInfoClassName: "space-y-2",
    displayNameClassName: "text-xl font-bold text-white",
    usernameClassName: "text-sm text-gray-300",
    descriptionClassName: "text-sm text-gray-200",
  },
};

export const VerticalLayout: Story = {
  args: {
    qrCodeContent: "https://example.com/profile",
    displayName: "Alex Johnson",
    username: "alexj",
    description: "Scan to follow",
    className:
      "p-6 bg-gradient-to-b from-purple-500 to-pink-500 text-white rounded-xl shadow-lg max-w-xs",
    containerClassName: "flex flex-col items-center gap-4",
    qrContainerClassName: "flex-shrink-0 h-32 w-32 overflow-hidden p-2 bg-white rounded-lg",
    qrImageClassName: "h-full w-full object-contain",
    contentClassName: "text-center space-y-3",
    userInfoClassName: "space-y-2",
    displayNameClassName: "text-lg font-bold text-white",
    usernameClassName: "text-sm text-purple-100",
    descriptionClassName: "text-sm text-purple-50",
  },
};

export const MinimalStyle: Story = {
  args: {
    qrCodeContent: "https://example.com/profile",
    displayName: "Sam Wilson",
    username: "samw",
    description: "Connect",
    className: "p-4 bg-gray-50 rounded max-w-md",
    containerClassName: "flex gap-3 items-start",
    qrContainerClassName: "flex-shrink-0 h-20 w-20 overflow-hidden p-1 bg-white rounded border",
    qrImageClassName: "h-full w-full object-contain",
    contentClassName: "flex-1 space-y-2",
    userInfoClassName: "space-y-1",
    displayNameClassName: "text-lg font-semibold text-gray-800",
    usernameClassName: "text-xs text-gray-500",
    descriptionClassName: "text-xs text-gray-600",
  },
};
