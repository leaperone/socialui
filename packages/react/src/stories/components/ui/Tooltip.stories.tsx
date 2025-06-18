import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tooltip } from "../../../components/ui/tooltip";

const meta = {
  title: "UI/Components/Ui/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text" },
    content: { control: "text" },
    className: { control: "text" },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Example content",
    content: "Example content",
    className: "Example className",
  },
};
