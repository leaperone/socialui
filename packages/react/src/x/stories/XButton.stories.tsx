import type { Meta, StoryObj } from "@storybook/react-vite";
import { XButton } from "../x-button";

const meta: Meta<typeof XButton> = {
  title: "International/X/XButton",
  component: XButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    username: {
      control: "text",
      description: "X username (without @)",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Button size",
    },
    variant: {
      control: "select",
      options: ["solid", "flat", "bordered"],
      description: "Button variant style",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    username: "elonmusk",
  },
};

export const WithCustomUsername: Story = {
  args: {
    username: "ui2someone",
  },
};

export const AllSizes: Story = {
  render: () => {
    return (
      <div className="flex gap-4 items-center">
        <XButton username="elonmusk" size="sm" />
        <XButton username="elonmusk" size="md" />
        <XButton username="elonmusk" size="lg" />
      </div>
    );
  },
};

export const AllVariants: Story = {
  render: () => {
    return (
      <div className="flex gap-4 items-center">
        <XButton username="elonmusk" variant="solid" />
        <XButton username="elonmusk" variant="flat" />
        <XButton username="elonmusk" variant="bordered" />
      </div>
    );
  },
};
