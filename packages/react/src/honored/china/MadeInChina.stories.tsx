import type { Meta, StoryObj } from "@storybook/react-vite";
import { MadeInChina } from "./made-in-china";

const meta: Meta<typeof MadeInChina> = {
  title: "Honored/MadeInChina",
  component: MadeInChina,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    prefix: {
      control: "text",
      description: "Text before the China flag",
    },
    suffix: {
      control: "text",
      description: "Text after the China flag",
    },
    className: {
      control: "text",
      description: "CSS classes for the container",
    },
    textClassName: {
      control: "text",
      description: "CSS classes for text elements",
    },
    flagClassName: {
      control: "text",
      description: "CSS classes for the flag",
    },
    ariaLabel: {
      control: "text",
      description: "Accessibility label",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const CustomText: Story = {
  args: {
    prefix: "Proudly",
    suffix: "in China",
  },
};

export const LargeSize: Story = {
  args: {
    className: "flex items-center justify-center text-gray-600 text-lg",
    flagClassName: "mx-2 h-7 w-7",
  },
};

export const SmallSize: Story = {
  args: {
    className: "flex items-center justify-center text-gray-600 text-xs",
    flagClassName: "mx-1 h-4 w-4",
  },
};

export const DarkTheme: Story = {
  args: {
    className: "flex items-center justify-center text-gray-300 text-sm bg-gray-900 p-4 rounded",
    flagClassName: "mx-1.5 h-5 w-5",
  },
};

export const ColoredText: Story = {
  args: {
    className: "flex items-center justify-center text-blue-600 text-sm",
    flagClassName: "mx-1.5 h-5 w-5",
  },
};

export const CenteredCard: Story = {
  args: {
    className:
      "flex items-center justify-center text-gray-600 text-sm bg-white border border-gray-200 p-6 rounded-lg shadow-sm",
    flagClassName: "mx-1.5 h-5 w-5",
  },
};
