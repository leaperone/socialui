import type { Meta, StoryObj } from "@storybook/react-vite";
import { BaseCard } from "./base-card";

const meta: Meta<typeof BaseCard> = {
  title: "Components/Card/BaseCard",
  component: BaseCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: false,
      description: "Card content",
    },
    fullWidth: {
      control: "boolean",
      description: "Make card full width",
    },
    showImage: {
      control: "boolean",
      description: "Show image in card",
    },
    imageUrl: {
      control: "text",
      description: "Image URL for card",
    },
    imageAlt: {
      control: "text",
      description: "Image alt text",
    },
    imagePlacement: {
      control: "select",
      options: ["top", "side", "full"],
      description: "Image placement in card",
    },
    shadow: {
      control: "select",
      options: ["none", "sm", "md", "lg"],
      description: "Shadow size",
    },
    radius: {
      control: "select",
      options: ["none", "sm", "md", "lg"],
      description: "Border radius",
    },
    variant: {
      control: "select",
      options: ["solid", "flat", "bordered"],
      description: "Card variant style",
    },
    variantProps: {
      control: "object",
      description: "Variant style properties",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
    avatarUrl: { control: "text" },
    displayName: { control: "text" },
    username: { control: "text" },
    showQRCode: { control: "boolean" },
    qrCodeContent: { control: "text" },
    qrCodeSize: { control: "number" },
    isVertical: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    displayName: "John Doe",
    username: "@johndoe",
    showQRCode: true,
    qrCodeContent: "https://example.com/johndoe",
    className: "max-w-96",
    variantProps: {
      solid: "bg-blue-500",
      flat: "bg-blue-500/20",
      bordered: "bg-blue-500/10 border-2 border-blue-500",
    },
  },
};

// Horizontal layout
export const Horizontal: Story = {
  args: {
    displayName: "Jane Smith",
    username: "@janesmith",
    showQRCode: true,
    qrCodeContent: "https://example.com/janesmith",
    isVertical: false,
    className: "max-w-96",
    variantProps: {
      solid: "bg-blue-500",
      flat: "bg-blue-500/20",
      bordered: "bg-blue-500/10 border-2 border-blue-500",
    },
  },
};

// Vertical layout
export const IsVertical: Story = {
  args: {
    displayName: "Mike Johnson",
    username: "@mikejohnson",
    showQRCode: true,
    qrCodeContent: "https://example.com/mikejohnson",
    isVertical: true,
    className: "max-w-96",
    variantProps: {
      solid: "bg-blue-500",
      flat: "bg-blue-500/20",
      bordered: "bg-blue-500/10 border-2 border-blue-500",
    },
  },
};

// Custom QR code size
export const CustomQRCodeSize: Story = {
  args: {
    displayName: "Sarah Wilson",
    username: "@sarahwilson",
    showQRCode: true,
    qrCodeContent: "https://example.com/sarahwilson",
    qrCodeSize: 80,
    className: "max-w-96",
    variantProps: {
      solid: "bg-blue-500",
      flat: "bg-blue-500/20",
      bordered: "bg-blue-500/10 border-2 border-blue-500",
    },
  },
};

// Without QR code
export const NoQRCode: Story = {
  args: {
    displayName: "Tom Brown",
    username: "@tombrown",
    showQRCode: false,
    isVertical: true,
    className: "max-w-96",
    variantProps: {
      solid: "bg-blue-500",
      flat: "bg-blue-500/20",
      bordered: "bg-blue-500/10 border-2 border-blue-500",
    },
  },
};

// Variants
export const Variants: Story = {
  args: {
    displayName: "Card Variants",
    username: "solid | flat | bordered",
    showQRCode: true,
    qrCodeContent: "https://example.com/variants",
    isVertical: true,
    className: "max-w-96",
    variantProps: {
      solid: "bg-blue-500",
      flat: "bg-blue-500/20 text-blue-700",
      bordered: "bg-blue-500/10 border-2 border-blue-500 text-blue-700",
    },
  },
  render: () => (
    <div className="flex gap-4 flex-wrap justify-center">
      <BaseCard
        displayName="Solid Variant"
        username="@solid"
        showQRCode
        qrCodeContent="https://example.com/solid"
        variant="solid"
        variantProps={{
          solid: "bg-blue-500",
          flat: "bg-blue-500/20 text-blue-700",
          bordered: "bg-blue-500/10 border-2 border-blue-500 text-blue-700",
        }}
        className="max-w-80"
      />
      <BaseCard
        displayName="Flat Variant"
        username="@flat"
        showQRCode
        qrCodeContent="https://example.com/flat"
        variant="flat"
        variantProps={{
          solid: "bg-blue-500",
          flat: "bg-blue-500/20 text-blue-700",
          bordered: "bg-blue-500/10 border-2 border-blue-500 text-blue-700",
        }}
        className="max-w-80"
      />
      <BaseCard
        displayName="Bordered Variant"
        username="@bordered"
        showQRCode
        qrCodeContent="https://example.com/bordered"
        variant="bordered"
        variantProps={{
          solid: "bg-blue-500",
          flat: "bg-blue-500/20 text-blue-700",
          bordered: "bg-blue-500/10 border-2 border-blue-500 text-blue-700",
        }}
        className="max-w-80"
      />
    </div>
  ),
};

// Full width
export const FullWidth: Story = {
  args: {
    displayName: "Full Width Card",
    username: "@fullwidthuser",
    showQRCode: true,
    qrCodeContent: "https://example.com/fullwidthuser",
    isVertical: true,
    className: "w-full",
    variantProps: {
      solid: "bg-blue-500",
      flat: "bg-blue-500/20",
      bordered: "bg-blue-500/10 border-2 border-blue-500",
    },
  },
};

// Image placement stories
export const TopImage: Story = {
  args: {
    showImage: true,
    imagePlacement: "top",
    displayName: "Top Image Card",
    username: "@topimage",
    showQRCode: true,
    qrCodeContent: "https://example.com/topimage",
    isVertical: true,
    className: "max-w-96",
    variantProps: {
      solid: "bg-blue-500",
      flat: "bg-blue-500/20",
      bordered: "bg-blue-500/10 border-2 border-blue-500",
    },
  },
};

export const SideImage: Story = {
  args: {
    showImage: true,
    imagePlacement: "side",
    displayName: "Side Image Card",
    username: "@sideimage",
    showQRCode: true,
    qrCodeContent: "https://example.com/sideimage",
    isVertical: true,
    className: "max-w-96",
    variantProps: {
      solid: "bg-blue-500",
      flat: "bg-blue-500/20",
      bordered: "bg-blue-500/10 border-2 border-blue-500",
    },
  },
};

export const FullImage: Story = {
  args: {
    showImage: true,
    imagePlacement: "full",
    displayName: "Full Image Card",
    username: "@fullimage",
    showQRCode: true,
    qrCodeContent: "https://example.com/fullimage",
    isVertical: true,
    className: "max-w-96",
    variantProps: {
      solid: "bg-blue-500",
      flat: "bg-blue-500/20",
      bordered: "bg-blue-500/10 border-2 border-blue-500",
    },
  },
};
