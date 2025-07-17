import type { Meta, StoryObj } from "@storybook/react-vite";
import { VCardContactCardPlain } from "../vcard-contact-card-plain";

const meta: Meta<typeof VCardContactCardPlain> = {
  title: "Contact/VCard/VCardContactCardPlain",
  component: VCardContactCardPlain,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    fullName: {
      control: "text",
      description: "Full name of the contact",
    },
    organization: {
      control: "text",
      description: "Organization name",
    },
    title: {
      control: "text",
      description: "Job title or position",
    },
    phone: {
      control: "text",
      description: "Phone number",
    },
    email: {
      control: "text",
      description: "Email address",
    },
    website: {
      control: "text",
      description: "Website URL",
    },
    address: {
      control: "text",
      description: "Physical address",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fullName: "John Doe",
    organization: "Tech Corp",
    title: "Software Engineer",
    phone: "+1 (555) 123-4567",
    email: "john.doe@techcorp.com",
    website: "https://johndoe.dev",
    address: "123 Tech Street, Silicon Valley, CA 94000",
    className: "p-4 bg-white border border-gray-200 rounded-lg shadow-lg max-w-md",
    containerClassName: "flex gap-4 items-start",
    qrContainerClassName: "flex-shrink-0 my-auto",
    qrImageClassName: "w-24 h-24 border rounded",
    contentClassName: "flex-1 space-y-3",
    nameClassName: "text-lg font-bold text-gray-900",
    titleClassName: "text-sm text-gray-600",
    organizationClassName: "text-sm text-gray-600",
    contactInfoClassName: "space-y-2 text-sm text-gray-700",
    phoneClassName: "flex items-center gap-2",
    emailClassName: "flex items-center gap-2",
    websiteClassName: "flex items-center gap-2",
    addressClassName: "flex items-center gap-2",
  },
};

export const BlueTheme: Story = {
  args: {
    ...Default.args,
    className: "p-6 bg-blue-600 text-white rounded-xl shadow-xl max-w-md",
    containerClassName: "flex gap-6 items-start",
    qrContainerClassName: "flex-shrink-0",
    qrImageClassName: "w-28 h-28 border-2 border-white rounded-lg",
    contentClassName: "flex-1 space-y-4",
    nameClassName: "text-xl font-bold text-white",
    titleClassName: "text-sm text-blue-100",
    organizationClassName: "text-sm text-blue-100",
    contactInfoClassName: "space-y-2 text-sm text-blue-50",
    phoneClassName: "flex items-center gap-2 hover:text-white transition-colors",
    emailClassName: "flex items-center gap-2 hover:text-white transition-colors",
    websiteClassName: "flex items-center gap-2 hover:text-white transition-colors",
    addressClassName: "flex items-center gap-2 hover:text-white transition-colors",
  },
};

export const DarkTheme: Story = {
  args: {
    ...Default.args,
    className: "p-6 bg-gray-900 text-white rounded-2xl shadow-2xl max-w-md border border-gray-700",
    containerClassName: "flex gap-6 items-start",
    qrContainerClassName: "flex-shrink-0",
    qrImageClassName: "w-28 h-28 border border-gray-600 rounded-lg bg-white",
    contentClassName: "flex-1 space-y-4",
    nameClassName: "text-xl font-bold text-white",
    titleClassName: "text-sm text-gray-300",
    organizationClassName: "text-sm text-gray-300",
    contactInfoClassName: "space-y-2 text-sm text-gray-200",
    phoneClassName: "flex items-center gap-2 hover:text-yellow-400 transition-colors",
    emailClassName: "flex items-center gap-2 hover:text-yellow-400 transition-colors",
    websiteClassName: "flex items-center gap-2 hover:text-yellow-400 transition-colors",
    addressClassName: "flex items-center gap-2 hover:text-yellow-400 transition-colors",
  },
};

export const VerticalLayout: Story = {
  args: {
    ...Default.args,
    className:
      "p-6 bg-gradient-to-b from-purple-500 to-pink-500 text-white rounded-xl shadow-lg max-w-xs",
    containerClassName: "flex flex-col items-center gap-4",
    qrContainerClassName: "flex-shrink-0",
    qrImageClassName: "w-32 h-32 border-2 border-white rounded-lg",
    contentClassName: "text-center space-y-3",
    nameClassName: "text-lg font-bold text-white",
    titleClassName: "text-sm text-purple-100",
    organizationClassName: "text-sm text-purple-100",
    contactInfoClassName: "space-y-2 text-sm text-purple-50",
    phoneClassName: "flex items-center gap-2 justify-center",
    emailClassName: "flex items-center gap-2 justify-center",
    websiteClassName: "flex items-center gap-2 justify-center",
    addressClassName: "flex items-center gap-2 justify-center",
  },
};

export const MinimalStyle: Story = {
  args: {
    ...Default.args,
    className: "p-4 bg-gray-50 rounded max-w-md",
    containerClassName: "flex gap-3 items-start",
    qrContainerClassName: "flex-shrink-0",
    qrImageClassName: "w-20 h-20 rounded",
    contentClassName: "flex-1 space-y-2",
    nameClassName: "text-lg font-semibold text-gray-800",
    titleClassName: "text-xs text-gray-500",
    organizationClassName: "text-xs text-gray-500",
    contactInfoClassName: "space-y-1 text-xs text-gray-600",
    phoneClassName: "flex items-center gap-2",
    emailClassName: "flex items-center gap-2",
    websiteClassName: "flex items-center gap-2",
    addressClassName: "flex items-center gap-2",
  },
};
