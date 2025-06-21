import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../../components/button";
import { HomeIcon } from "lucide-react";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["solid", "bordered", "light", "flat", "faded", "shadow"],
    },
    color: {
      control: { type: "select" },
      options: ["default", "primary", "secondary", "success", "warning", "danger"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    radius: {
      control: { type: "select" },
      options: ["none", "sm", "md", "lg", "full"],
    },
    fullWidth: {
      control: { type: "boolean" },
    },
    isDisabled: {
      control: { type: "boolean" },
    },
    isLoading: {
      control: { type: "boolean" },
    },
    isIconOnly: {
      control: { type: "boolean" },
    },
    disableAnimation: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const AllCombinations: Story = {
  render: () => {
    const variants = ["solid", "bordered", "light", "flat", "faded", "shadow"] as const;
    const colors = ["default", "primary", "secondary", "success", "warning", "danger"] as const;

    return (
      <div className="space-y-6">
        {variants.map(variant => (
          <div key={variant} className="space-y-2">
            <h3 className="text-sm font-medium capitalize text-gray-700 dark:text-gray-300">
              {variant}
            </h3>
            <div className="flex flex-wrap gap-2">
              {colors.map(color => (
                <Button key={`${variant}-${color}`} variant={variant} color={color}>
                  {color}
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  },
};

export const Loading: Story = {
  args: {
    children: "Loading Button",
    isLoading: true,
    color: "primary",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    isDisabled: true,
    color: "primary",
  },
};

export const FullWidth: Story = {
  args: {
    children: "Full Width Button",
    fullWidth: true,
    color: "primary",
  },
};

export const WithStartContent: Story = {
  args: {
    children: "Download",
    startContent: (
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    color: "primary",
  },
};

export const WithEndContent: Story = {
  args: {
    children: "Next",
    endContent: (
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    ),
    color: "primary",
  },
};

export const IconOnly: Story = {
  args: {
    isIconOnly: true,
    children: <HomeIcon />,
    color: "primary",
  },
};
