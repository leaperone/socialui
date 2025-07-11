import type { Meta, StoryObj } from "@storybook/react-vite";
import { WhatsAppContactCard } from "../../whatsapp/whatsapp-contact-card";

const meta: Meta<typeof WhatsAppContactCard> = {
  title: "International/WhatsApp/WhatsAppContactCard",
  component: WhatsAppContactCard,
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
    name: "John Doe",
    phoneNumber: "+1 234 567 890",
    qrCodeContent: "https://wa.me/1234567890",
  },
};

export const Vertical: Story = {
  args: {
    name: "Jane Smith",
    phoneNumber: "+44 20 7946 0958",
    qrCodeContent: "https://wa.me/442079460958",
    orientation: "vertical",
  },
};

export const Flat: Story = {
  args: {
    name: "Business Account",
    phoneNumber: "+1 800 555 0199",
    qrCodeContent: "https://wa.me/18005550199",
    variant: "flat",
  },
};

export const Bordered: Story = {
  args: {
    name: "Support Team",
    phoneNumber: "+61 2 9250 7111",
    qrCodeContent: "https://wa.me/61292507111",
    variant: "bordered",
  },
};

export const FullWidth: Story = {
  args: {
    name: "Sales Department",
    phoneNumber: "+81 3 4567 8910",
    qrCodeContent: "https://wa.me/81345678910",
    fullWidth: true,
  },
  parameters: {
    layout: "padded",
  },
};
