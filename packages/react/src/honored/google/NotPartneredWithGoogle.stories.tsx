import type { Meta, StoryObj } from "@storybook/react-vite";
import { NotPartneredWithGoogle } from "./not-partnered-with-google";

const meta: Meta<typeof NotPartneredWithGoogle> = {
  title: "Honored/NotPartneredWithGoogle",
  component: NotPartneredWithGoogle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    prefix: {
      control: "text",
      description: "Text before the Google logo",
    },
    suffix: {
      control: "text",
      description: "Text after the Google logo",
    },
    className: {
      control: "text",
      description: "CSS classes for the container",
    },
    textClassName: {
      control: "text",
      description: "CSS classes for text elements",
    },
    logoClassName: {
      control: "text",
      description: "CSS classes for the logo",
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
    prefix: "Proudly not partnered with",
    suffix: "",
  },
};

export const LargeSize: Story = {
  args: {
    className: "flex items-center justify-center text-gray-600 text-lg",
    logoClassName: "mx-2",
  },
};

export const SmallSize: Story = {
  args: {
    className: "flex items-center justify-center text-gray-600 text-xs",
    logoClassName: "mx-1",
  },
};

export const DarkTheme: Story = {
  args: {
    className: "flex items-center justify-center text-gray-300 text-sm bg-gray-900 p-4 rounded",
    logoClassName: "mx-1.5",
  },
};

export const ColoredText: Story = {
  args: {
    className: "flex items-center justify-center text-blue-600 text-sm",
    logoClassName: "mx-1.5",
  },
};

export const CenteredCard: Story = {
  args: {
    className:
      "flex items-center justify-center text-gray-600 text-sm bg-white border border-gray-200 p-6 rounded-lg shadow-sm",
    logoClassName: "mx-1.5",
  },
};
