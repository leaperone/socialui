import type { Meta, StoryObj } from "@storybook/react-vite";
import { VCardContactCard } from "../../vcard/vcard-contact-card";

const meta: Meta<typeof VCardContactCard> = {
  title: "Contact/VCard/VCardContactCard",
  component: VCardContactCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["solid", "flat", "bordered"],
    },
    orientation: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
    },
    shadow: {
      control: { type: "select" },
      options: ["none", "sm", "md", "lg"],
    },
    radius: {
      control: { type: "select" },
      options: ["none", "sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fullName: "John Doe",
    organization: "Acme Inc.",
    title: "Software Engineer",
    phone: "+1 (123) 456-7890",
    email: "john.doe@acme.inc",
    website: "acme.inc",
    address: "123 Main St, Anytown, USA",
  },
};

export const Solid: Story = {
  args: {
    ...Default.args,
    variant: "solid",
  },
};

export const Flat: Story = {
  args: {
    ...Default.args,
    variant: "flat",
  },
};

export const Bordered: Story = {
  args: {
    ...Default.args,
    variant: "bordered",
  },
};

export const Vertical: Story = {
  args: {
    ...Default.args,
    orientation: "vertical",
  },
};

export const Minimal: Story = {
  args: {
    fullName: "Jane Smith",
    email: "jane.smith@example.com",
  },
};

export const FullBordered: Story = {
  args: {
    fullName: "Dr. Evelyn Reed",
    organization: "Stellar Innovations",
    title: "Chief Research Scientist",
    phone: "+44 20 7946 0958",
    email: "evelyn.reed@stellarinnovations.com",
    website: "stellarinnovations.com",
    address: "456 Innovation Drive, London, UK",
    variant: "bordered",
  },
};

export const NoPhotoShowsQrCode: Story = {
  args: {
    fullName: "Alex Johnson",
    organization: "Quantum Solutions",
    title: "Project Manager",
    phone: "+1 555 123 4567",
    email: "alex.j@q-solutions.com",
  },
};

export const FullWidth: Story = {
  args: {
    ...Default.args,
    fullWidth: true,
  },
  parameters: {
    layout: "padded",
  },
};
