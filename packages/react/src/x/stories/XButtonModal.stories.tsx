import type { Meta, StoryObj } from "@storybook/react-vite";
import { XButtonModal } from "../x-button-modal";

const meta: Meta<typeof XButtonModal> = {
  title: "International/X/XButtonModal",
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

export const AllVariants: Story = {
  render: () => {
    return (
      <div className="flex gap-4 items-center">
        <XButtonModal
          id="x-modal-solid"
          username="elonmusk"
          displayName="Elon Musk"
          followers="180.5M"
          following="1,234"
          qrCodeContent="https://x.com/elonmusk"
          variant="solid"
          size="md"
        />
        <XButtonModal
          id="x-modal-flat"
          username="ui2someone"
          displayName="UI2Someone"
          followers="1.2K"
          following="890"
          qrCodeContent="https://x.com/ui2someone"
          variant="flat"
          size="md"
        />
        <XButtonModal
          id="x-modal-bordered"
          username="reactjs"
          displayName="React"
          followers="2.1M"
          following="12"
          qrCodeContent="https://x.com/reactjs"
          variant="bordered"
          size="md"
        />
      </div>
    );
  },
};

export const AllSizes: Story = {
  render: () => {
    return (
      <div className="flex gap-4 items-center">
        <XButtonModal
          id="x-modal-sm"
          username="elonmusk"
          displayName="Elon Musk"
          followers="180.5M"
          following="1,234"
          qrCodeContent="https://x.com/elonmusk"
          variant="solid"
          size="sm"
        />
        <XButtonModal
          id="x-modal-md"
          username="elonmusk"
          displayName="Elon Musk"
          followers="180.5M"
          following="1,234"
          qrCodeContent="https://x.com/elonmusk"
          variant="solid"
          size="md"
        />
        <XButtonModal
          id="x-modal-lg"
          username="elonmusk"
          displayName="Elon Musk"
          followers="180.5M"
          following="1,234"
          qrCodeContent="https://x.com/elonmusk"
          variant="solid"
          size="lg"
        />
      </div>
    );
  },
};
