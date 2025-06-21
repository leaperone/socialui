import type { Meta, StoryObj } from "@storybook/react-vite";
import { DaisyUITest } from "../../components/daisyui-test";

const meta = {
  title: "UI/DaisyUITest",
  component: DaisyUITest,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DaisyUITest>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithCustomContent: Story = {
  args: {
    children: (
      <div className="mt-4 p-4 bg-base-200 rounded-lg">
        <h4 className="font-semibold mb-2">自定义内容</h4>
        <p>这是通过 children 属性添加的自定义内容。</p>
      </div>
    ),
  },
};
