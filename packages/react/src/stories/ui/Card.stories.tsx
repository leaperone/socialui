import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card, CardBody, CardFigure, CardActions } from "../../components/card";

const meta = {
  title: "UI/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["solid", "flat", "faded", "bordered", "light"],
    },
    color: {
      control: { type: "select" },
      options: ["default", "primary", "secondary", "success", "warning", "danger", "info"],
    },
    shadow: {
      control: { type: "select" },
      options: ["none", "sm", "md", "lg"],
    },
    radius: {
      control: { type: "select" },
      options: ["none", "sm", "md", "lg"],
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    fullWidth: {
      control: { type: "boolean" },
    },
    isPressable: {
      control: { type: "boolean" },
    },
    side: {
      control: { type: "boolean" },
    },
    imageFull: {
      control: { type: "boolean" },
    },
    bordered: {
      control: { type: "boolean" },
    },
    dashed: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <CardBody>
        <h3 className="text-lg font-semibold">Card Title</h3>
        <p className="text-gray-600 dark:text-gray-400">
          This is a basic card with some content. It uses the default styling and includes a title
          and description.
        </p>
      </CardBody>
    ),
  },
};

export const AllVariants: Story = {
  args: {
    children: <div />,
  },
  render: () => {
    const variants = ["solid", "flat", "faded", "bordered", "light"] as const;
    const colors = [
      "default",
      "primary",
      "secondary",
      "success",
      "warning",
      "danger",
      "info",
    ] as const;

    return (
      <div className="space-y-8">
        {variants.map(variant => (
          <div key={variant} className="space-y-4">
            <h3 className="text-lg font-semibold capitalize text-gray-700 dark:text-gray-300">
              {variant} Variant
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {colors.map(color => (
                <Card
                  key={`${variant}-${color}`}
                  variant={variant}
                  color={color}
                  className="w-full"
                >
                  <CardBody>
                    <h4 className="font-medium capitalize">{color}</h4>
                    <p className="text-sm opacity-80">
                      This is a {variant} card with {color} color theme.
                    </p>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  },
};

export const ShadowVariants: Story = {
  args: {
    children: <div />,
  },
  render: () => {
    const shadows = ["none", "sm", "md", "lg"] as const;

    return (
      <div className="space-y-6">
        <h3 className="text-lg font-semibold">Shadow Variants</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {shadows.map(shadow => (
            <Card key={shadow} shadow={shadow} className="w-full">
              <CardBody>
                <h4 className="font-medium capitalize">{shadow} shadow</h4>
                <p className="text-sm opacity-80">
                  This card demonstrates the {shadow} shadow variant.
                </p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    );
  },
};

export const RadiusVariants: Story = {
  args: {
    children: <div />,
  },
  render: () => {
    const radiuses = ["none", "sm", "md", "lg"] as const;

    return (
      <div className="space-y-6">
        <h3 className="text-lg font-semibold">Border Radius Variants</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {radiuses.map(radius => (
            <Card key={radius} radius={radius} className="w-full">
              <CardBody>
                <h4 className="font-medium capitalize">{radius} radius</h4>
                <p className="text-sm opacity-80">
                  This card demonstrates the {radius} border radius.
                </p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    );
  },
};

export const SizeVariants: Story = {
  args: {
    children: <div />,
  },
  render: () => {
    const sizes = ["xs", "sm", "md", "lg", "xl"] as const;

    return (
      <div className="space-y-6">
        <h3 className="text-lg font-semibold">Size Variants</h3>
        <div className="space-y-4">
          {sizes.map(size => (
            <Card key={size} size={size} className="w-full max-w-md">
              <CardBody>
                <h4 className="font-medium capitalize">{size} size</h4>
                <p className="text-sm opacity-80">
                  This card demonstrates the {size} size variant.
                </p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    );
  },
};

export const Pressable: Story = {
  args: {
    isPressable: true,
    children: (
      <CardBody>
        <h3 className="text-lg font-semibold">Pressable Card</h3>
        <p className="text-gray-600 dark:text-gray-400">
          This card has hover effects and cursor pointer. Click to see the interaction.
        </p>
      </CardBody>
    ),
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: (
      <CardBody>
        <h3 className="text-lg font-semibold">Full Width Card</h3>
        <p className="text-gray-600 dark:text-gray-400">
          This card takes up the full width of its container.
        </p>
      </CardBody>
    ),
  },
};

export const CustomColor: Story = {
  args: {
    colorHex: "#8B5CF6",
    variant: "solid",
    children: (
      <CardBody>
        <h3 className="text-lg font-semibold">Custom Color Card</h3>
        <p className="text-gray-600 dark:text-gray-400">
          This card uses a custom purple color (#8B5CF6) instead of the predefined color themes.
        </p>
      </CardBody>
    ),
  },
};

export const ComplexContent: Story = {
  args: {
    variant: "bordered",
    color: "primary",
    children: (
      <CardBody>
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold">Feature Card</h3>
            <p className="text-sm opacity-80">
              This card demonstrates more complex content with an icon, title, and description.
            </p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-primary/20">
          <div className="flex justify-between text-sm">
            <span>Status: Active</span>
            <span className="text-primary font-medium">View Details</span>
          </div>
        </div>
      </CardBody>
    ),
  },
};

export const Interactive: Story = {
  args: {
    children: <div />,
  },
  render: () => {
    return (
      <div className="space-y-4">
        <Card isPressable className="w-full max-w-md">
          <CardBody>
            <h3 className="text-lg font-semibold">Interactive Card</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Hover over this card to see the shadow effect. It's also clickable!
            </p>
            <div className="mt-4">
              <button className="btn btn-primary btn-sm">Action Button</button>
            </div>
          </CardBody>
        </Card>

        <Card variant="faded" color="success" isPressable className="w-full max-w-md">
          <CardBody>
            <h3 className="text-lg font-semibold">Success Card</h3>
            <p className="text-gray-600 dark:text-gray-400">
              This is a success-themed card with faded variant and pressable interaction.
            </p>
          </CardBody>
        </Card>
      </div>
    );
  },
};

export const WithImage: Story = {
  args: {
    children: (
      <>
        <CardFigure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </CardFigure>
        <CardBody>
          <h2 className="card-title">Card Title</h2>
          <p>
            A card component has a figure, a body part, and inside body there are title and actions
            parts
          </p>
          <CardActions className="justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </CardActions>
        </CardBody>
      </>
    ),
  },
};

export const ProductCard: Story = {
  args: {
    variant: "bordered",
    shadow: "md",
    children: (
      <>
        <CardFigure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Product"
            className="w-full h-48 object-cover"
          />
        </CardFigure>
        <CardBody>
          <h2 className="card-title">Product Name</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            This is a beautiful product with amazing features and great quality.
          </p>
          <div className="flex items-center justify-between mt-4">
            <span className="text-2xl font-bold text-primary">$99.99</span>
            <CardActions>
              <button className="btn btn-primary btn-sm">Add to Cart</button>
              <button className="btn btn-outline btn-sm">Details</button>
            </CardActions>
          </div>
        </CardBody>
      </>
    ),
  },
};

export const ProfileCard: Story = {
  args: {
    variant: "flat",
    color: "primary",
    children: (
      <>
        <CardFigure className="px-6 pt-6">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt="Profile"
              />
            </div>
          </div>
        </CardFigure>
        <CardBody className="text-center">
          <h2 className="card-title justify-center">John Doe</h2>
          <p className="text-sm opacity-80">Software Developer</p>
          <p className="text-xs opacity-60">
            Building amazing user interfaces with React and daisyUI
          </p>
          <CardActions className="justify-center mt-4">
            <button className="btn btn-primary btn-sm">Follow</button>
            <button className="btn btn-outline btn-sm">Message</button>
          </CardActions>
        </CardBody>
      </>
    ),
  },
};

export const SideCard: Story = {
  args: {
    side: true,
    children: (
      <>
        <CardFigure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            alt="Movie"
          />
        </CardFigure>
        <CardBody>
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <CardActions className="justify-end">
            <button className="btn btn-primary">Watch</button>
          </CardActions>
        </CardBody>
      </>
    ),
  },
};

export const ResponsiveCard: Story = {
  args: {
    children: (
      <>
        <CardFigure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
            alt="Album"
          />
        </CardFigure>
        <CardBody>
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <CardActions className="justify-end">
            <button className="btn btn-primary">Listen</button>
          </CardActions>
        </CardBody>
      </>
    ),
  },
  render: args => (
    <Card {...args} className="lg:card-side bg-base-100 shadow-sm w-96">
      {args.children}
    </Card>
  ),
};

export const ImageFullCard: Story = {
  args: {
    imageFull: true,
    children: (
      <>
        <CardFigure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Background"
          />
        </CardFigure>
        <CardBody className="relative z-10">
          <h2 className="card-title text-white">Overlay Content</h2>
          <p className="text-white/80">This content appears over the background image.</p>
          <CardActions className="justify-end">
            <button className="btn btn-primary">Action</button>
          </CardActions>
        </CardBody>
      </>
    ),
  },
};

export const BorderVariants: Story = {
  args: {
    children: <div />,
  },
  render: () => {
    return (
      <div className="space-y-6">
        <h3 className="text-lg font-semibold">Border Variants</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card bordered className="w-full">
            <CardBody>
              <h4 className="font-medium">Bordered Card</h4>
              <p className="text-sm opacity-80">This card uses the bordered modifier.</p>
            </CardBody>
          </Card>

          <Card dashed className="w-full">
            <CardBody>
              <h4 className="font-medium">Dashed Card</h4>
              <p className="text-sm opacity-80">This card uses the dashed modifier.</p>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  },
};
