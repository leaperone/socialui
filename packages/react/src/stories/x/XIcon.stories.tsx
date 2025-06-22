import type { Meta, StoryObj } from "@storybook/react-vite";
import { XIcon } from "../../x/logo/x";

const meta: Meta<typeof XIcon> = {
  title: "Logos/XIcon",
  component: XIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "number", min: 16, max: 64, step: 4 },
      description: "Icon size in pixels",
    },
    color: {
      control: { type: "color" },
      description: "Icon color",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 24,
  },
};

export const Large: Story = {
  args: {
    size: 48,
  },
};

export const CustomColor: Story = {
  args: {
    size: 32,
    color: "#1DA1F2",
  },
};

export const Black: Story = {
  args: {
    size: 32,
    color: "#000000",
  },
};

export const White: Story = {
  args: {
    size: 32,
    color: "#FFFFFF",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const DifferentSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <XIcon size={16} />
      <XIcon size={24} />
      <XIcon size={32} />
      <XIcon size={48} />
      <XIcon size={64} />
    </div>
  ),
};
