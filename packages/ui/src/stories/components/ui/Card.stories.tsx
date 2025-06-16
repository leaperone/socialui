import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card, CardBody, Button } from "../../../components/ui";

const meta = {
  title: "UI/Components/Ui/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    shadow: {
      control: { type: "select" },
      options: ["none", "sm", "md", "lg"],
    },
    radius: {
      control: { type: "select" },
      options: ["none", "sm", "md", "lg"],
    },
    fullWidth: { control: "boolean" },
    isPressable: { control: "boolean" },
    variant: {
      control: { type: "select" },
      options: ["solid", "flat", "faded", "bordered", "light"],
    },
    color: {
      control: { type: "select" },
      options: ["default", "primary", "secondary", "success", "warning", "danger", "info"],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <CardBody>
        <h3 className="text-lg font-semibold mb-2">Default Card</h3>
        <p className="text-sm opacity-80 mb-4">
          This is a basic card component with customizable variants and styling options.
        </p>
        <Button color="primary" size="sm">
          Learn More
        </Button>
      </CardBody>
    ),
    variant: "solid",
    color: "default",
    shadow: "none",
    radius: "md",
    fullWidth: false,
    isPressable: false,
  },
};

export const ColorVariants: Story = {
  args: {
    children: "Color variants showcase",
  },
  render: () => (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {["primary", "secondary", "success", "warning", "danger", "info"].map(color => (
        <Card key={color} color={color as any} variant="light" className="w-60">
          <CardBody>
            <h4 className="font-semibold capitalize mb-2">{color} Card</h4>
            <p className="text-sm opacity-80 mb-3">Card with {color} color theme.</p>
            <Button color={color as any} variant="solid" size="sm" fullWidth>
              Action
            </Button>
          </CardBody>
        </Card>
      ))}
    </div>
  ),
};

export const VariantShowcase: Story = {
  args: {
    children: "Variant showcase",
  },
  render: () => (
    <div className="space-y-6">
      {["solid", "bordered", "light", "faded", "flat"].map(variant => (
        <div key={variant} className="space-y-4">
          <h3 className="text-lg font-semibold capitalize">{variant} Variant</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {["primary", "success", "warning"].map(color => (
              <Card key={color} color={color as any} variant={variant as any} className="w-64">
                <CardBody>
                  <h4 className="font-medium capitalize mb-2">
                    {color} {variant}
                  </h4>
                  <p className="text-sm opacity-80 mb-3">
                    {variant} card with {color} theme.
                  </p>
                  <div className="flex gap-2">
                    <Button color={color as any} variant="bordered" size="sm">
                      Cancel
                    </Button>
                    <Button color={color as any} variant="solid" size="sm">
                      Confirm
                    </Button>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

export const InteractiveCard: Story = {
  args: {
    children: "Interactive card demo",
  },
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card color="primary" variant="bordered" isPressable className="w-80">
        <CardBody>
          <h3 className="text-lg font-semibold mb-2">Interactive Card</h3>
          <p className="text-sm opacity-80 mb-4">
            This card responds to hover and click interactions.
          </p>
          <Button color="primary" variant="light" size="sm" fullWidth>
            Click me
          </Button>
        </CardBody>
      </Card>

      <Card color="success" variant="faded" shadow="lg" className="w-80">
        <CardBody>
          <h3 className="text-lg font-semibold mb-2">Shadowed Card</h3>
          <p className="text-sm opacity-80 mb-4">Card with elevation and backdrop blur effect.</p>
          <Button color="success" variant="ghost" size="sm" fullWidth>
            Ghost Button
          </Button>
        </CardBody>
      </Card>
    </div>
  ),
};

export const ComplexLayout: Story = {
  args: {
    children: "Complex layout demo",
  },
  render: () => (
    <Card color="info" variant="bordered" className="w-96">
      <CardBody>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-info/20 rounded-full flex items-center justify-center">
            <span className="text-info font-bold">i</span>
          </div>
          <div>
            <h3 className="font-semibold">Information Card</h3>
            <p className="text-sm opacity-60">Complex layout example</p>
          </div>
        </div>

        <p className="text-sm opacity-80 mb-4">
          This card demonstrates how to create more complex layouts with headers, content sections,
          and multiple actions.
        </p>

        <div className="space-y-3">
          <div className="flex items-center justify-between p-2 bg-info/10 rounded">
            <span className="text-sm">Setting 1</span>
            <Button color="info" variant="flat" size="sm">
              Enable
            </Button>
          </div>

          <div className="flex items-center justify-between p-2 bg-info/10 rounded">
            <span className="text-sm">Setting 2</span>
            <Button color="info" variant="flat" size="sm">
              Configure
            </Button>
          </div>
        </div>

        <div className="flex gap-2 mt-4">
          <Button color="info" variant="bordered" size="sm">
            Cancel
          </Button>
          <Button color="info" variant="solid" size="sm">
            Save Changes
          </Button>
        </div>
      </CardBody>
    </Card>
  ),
};
