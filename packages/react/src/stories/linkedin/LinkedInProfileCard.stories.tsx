import type { Meta, StoryObj } from "@storybook/react-vite";
import { LinkedInProfileCard } from "../../linkedin/linkedin-profile-card";

const meta: Meta<typeof LinkedInProfileCard> = {
  title: "International/LinkedIn/LinkedInProfileCard",
  component: LinkedInProfileCard,
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
    username: "williamhgates",
    displayName: "Bill Gates",
    followers: "35M",
    connections: "500+",
    qrCodeContent: "https://www.linkedin.com/in/williamhgates/",
    profileUrl: "https://www.linkedin.com/in/williamhgates/",
  },
};

export const Vertical: Story = {
  args: {
    username: "satyanadella",
    displayName: "Satya Nadella",
    followers: "10M",
    connections: "500+",
    qrCodeContent: "https://www.linkedin.com/in/satyanadella/",
    profileUrl: "https://www.linkedin.com/in/satyanadella/",
    orientation: "vertical",
  },
};

export const Flat: Story = {
  args: {
    username: "microsoft",
    displayName: "Microsoft",
    followers: "20M",
    qrCodeContent: "https://www.linkedin.com/company/microsoft/",
    profileUrl: "https://www.linkedin.com/company/microsoft/",
    variant: "flat",
  },
};

export const Bordered: Story = {
  args: {
    username: "google",
    displayName: "Google",
    followers: "25M",
    qrCodeContent: "https://www.linkedin.com/company/google/",
    profileUrl: "https://www.linkedin.com/company/google/",
    variant: "bordered",
  },
};

export const FullWidth: Story = {
  args: {
    username: "apple",
    displayName: "Apple",
    followers: "15M",
    qrCodeContent: "https://www.linkedin.com/company/apple/",
    profileUrl: "https://www.linkedin.com/company/apple/",
    fullWidth: true,
  },
  parameters: {
    layout: "padded",
  },
};
