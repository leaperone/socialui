import type { Meta, StoryObj } from "@storybook/react-vite";
import { ColorShowcase } from "../../../components/ui/color-showcase";

const meta = {
  title: "UI/Components/Ui/ColorShowcase",
  component: ColorShowcase,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ColorShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
