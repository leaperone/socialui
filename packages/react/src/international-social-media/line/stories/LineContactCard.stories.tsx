import type { Meta, StoryObj } from "@storybook/react-vite";
import { LineContactCard } from "../../line/line-contact-card";

const meta: Meta<typeof LineContactCard> = {
  title: "International/Line/LineContactCard",
  component: LineContactCard,
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
    displayName: "Brown",
    lineId: "brown_line",
    qrCodeContent: "https://line.me/ti/p/example_brown",
  },
};

export const Vertical: Story = {
  args: {
    displayName: "Cony",
    lineId: "cony_line",
    qrCodeContent: "https://line.me/ti/p/example_cony",
    orientation: "vertical",
  },
};

export const Flat: Story = {
  args: {
    displayName: "Sally",
    lineId: "sally_line",
    qrCodeContent: "https://line.me/ti/p/example_sally",
    variant: "flat",
  },
};

export const Bordered: Story = {
  args: {
    displayName: "Leonard",
    lineId: "leonard_line",
    qrCodeContent: "https://line.me/ti/p/example_leonard",
    variant: "bordered",
  },
};

export const FullWidth: Story = {
  args: {
    displayName: "James",
    lineId: "james_line",
    qrCodeContent: "https://line.me/ti/p/example_james",
    fullWidth: true,
  },
  parameters: {
    layout: "padded",
  },
};
