import type { Meta, StoryObj } from "@storybook/react-vite";
import { XButtonModal, openXButtonModal } from "../x-button-modal";

const meta: Meta<typeof XButtonModal> = {
  title: "X/XButtonModal",
  component: XButtonModal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: "text",
      description: "Unique modal ID",
    },
    username: {
      control: "text",
      description: "X username (without @)",
    },
    displayName: {
      control: "text",
      description: "Display name for the user",
    },
    followers: {
      control: "text",
      description: "Number of followers",
    },
    following: {
      control: "text",
      description: "Number of following",
    },
    qrCodeContent: {
      control: "text",
      description: "QR code content URL",
    },
    variant: {
      control: "select",
      options: ["solid", "flat", "bordered"],
      description: "Modal variant style",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Modal size",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const ModalTemplate: Story = {
  render: args => {
    return (
      <div className="space-y-4">
        <XButtonModal {...args} />
      </div>
    );
  },
};

export const Default: Story = {
  ...ModalTemplate,
  args: {
    id: "x-modal-default",
    username: "elonmusk",
    displayName: "Elon Musk",
    followers: "180.5M",
    following: "1,234",
    qrCodeContent: "https://x.com/elonmusk",
    variant: "solid",
    size: "md",
  },
};

export const Flat: Story = {
  ...ModalTemplate,
  args: {
    id: "x-modal-flat",
    username: "ui2someone",
    displayName: "UI2Someone",
    followers: "1.2K",
    following: "890",
    qrCodeContent: "https://x.com/ui2someone",
    variant: "flat",
    size: "md",
  },
};

export const Bordered: Story = {
  ...ModalTemplate,
  args: {
    id: "x-modal-bordered",
    username: "reactjs",
    displayName: "React",
    followers: "2.1M",
    following: "12",
    qrCodeContent: "https://x.com/reactjs",
    variant: "bordered",
    size: "md",
  },
};

export const Small: Story = {
  ...ModalTemplate,
  args: {
    id: "x-modal-small",
    username: "typescript",
    displayName: "TypeScript",
    followers: "890K",
    following: "45",
    qrCodeContent: "https://x.com/typescript",
    variant: "solid",
    size: "sm",
  },
};

export const Large: Story = {
  ...ModalTemplate,
  args: {
    id: "x-modal-large",
    username: "tailwindcss",
    displayName: "Tailwind CSS",
    followers: "75.2K",
    following: "156",
    qrCodeContent: "https://x.com/tailwindcss",
    variant: "solid",
    size: "lg",
  },
};

export const Minimal: Story = {
  ...ModalTemplate,
  args: {
    id: "x-modal-minimal",
    username: "minimal_user",
    variant: "solid",
    size: "md",
  },
};

// Multiple modals example
export const MultipleModals: Story = {
  render: () => {
    return (
      <div className="space-y-4">
        <div className="flex gap-2">
          <button className="btn btn-primary" onClick={() => openXButtonModal("modal-1")}>
            Open Modal 1
          </button>
          <button className="btn btn-secondary" onClick={() => openXButtonModal("modal-2")}>
            Open Modal 2
          </button>
        </div>

        <XButtonModal
          id="modal-1"
          username="elonmusk"
          displayName="Elon Musk"
          followers="180.5M"
          following="1,234"
          variant="solid"
          size="md"
        />

        <XButtonModal
          id="modal-2"
          username="ui2someone"
          displayName="UI2Someone"
          followers="1.2K"
          following="890"
          variant="flat"
          size="lg"
        />
      </div>
    );
  },
};
