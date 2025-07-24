import type { Meta, StoryObj } from "@storybook/react-vite";
import { WeChatLogo } from "../logo/wechat";

const meta: Meta<typeof WeChatLogo> = {
  title: "China/Wechat/Logo/WeChatLogo",
  component: WeChatLogo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["full-color", "white", "inverted"],
      description: "Logo style variant",
    },
    language: {
      control: { type: "select" },
      options: ["en", "cn"],
      description: "Logo language version",
    },
    size: {
      control: { type: "number", min: 60, max: 300, step: 20 },
      description: "Logo size in pixels",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes",
    },
    alt: {
      control: { type: "text" },
      description: "Alt text for accessibility",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 120,
  },
};

export const Chinese: Story = {
  args: {
    language: "cn",
    size: 120,
  },
};

export const English: Story = {
  args: {
    language: "en",
    size: 120,
  },
};

export const FullColor: Story = {
  args: {
    variant: "full-color",
    size: 120,
  },
};

export const White: Story = {
  args: {
    variant: "white",
    size: 120,
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const Inverted: Story = {
  args: {
    variant: "inverted",
    size: 120,
  },
};

export const Large: Story = {
  args: {
    size: 200,
  },
};

export const Small: Story = {
  args: {
    size: 80,
  },
};

export const LanguageComparison: Story = {
  render: () => (
    <div className="flex flex-col gap-8 items-center">
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">Chinese Version (中文版)</h3>
        <div className="flex items-center gap-6">
          <div className="text-center">
            <WeChatLogo variant="full-color" language="cn" size={100} />
            <p className="mt-2 text-sm text-gray-600">Full Color</p>
          </div>
          <div className="text-center">
            <WeChatLogo variant="inverted" language="cn" size={100} />
            <p className="mt-2 text-sm text-gray-600">Inverted</p>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg mt-4">
          <div className="text-center">
            <WeChatLogo variant="white" language="cn" size={100} />
            <p className="mt-2 text-sm text-white">White (on dark background)</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">English Version (英文版)</h3>
        <div className="flex items-center gap-6">
          <div className="text-center">
            <WeChatLogo variant="full-color" language="en" size={100} />
            <p className="mt-2 text-sm text-gray-600">Full Color</p>
          </div>
          <div className="text-center">
            <WeChatLogo variant="inverted" language="en" size={100} />
            <p className="mt-2 text-sm text-gray-600">Inverted</p>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg mt-4">
          <div className="text-center">
            <WeChatLogo variant="white" language="en" size={100} />
            <p className="mt-2 text-sm text-white">White (on dark background)</p>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8 items-center">
      <div className="flex items-center gap-6">
        <div className="text-center">
          <WeChatLogo variant="full-color" size={100} />
          <p className="mt-2 text-sm text-gray-600">Full Color</p>
        </div>
        <div className="text-center">
          <WeChatLogo variant="inverted" size={100} />
          <p className="mt-2 text-sm text-gray-600">Inverted</p>
        </div>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg">
        <div className="text-center">
          <WeChatLogo variant="white" size={100} />
          <p className="mt-2 text-sm text-white">White (on dark background)</p>
        </div>
      </div>
    </div>
  ),
};

export const Responsive: Story = {
  render: () => (
    <div className="flex items-center gap-4 flex-wrap">
      <WeChatLogo size={60} />
      <WeChatLogo size={80} />
      <WeChatLogo size={100} />
      <WeChatLogo size={120} />
      <WeChatLogo size={150} />
      <WeChatLogo size={200} />
    </div>
  ),
};
