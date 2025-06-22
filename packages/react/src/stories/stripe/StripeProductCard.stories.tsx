import type { Meta, StoryObj } from "@storybook/react-vite";
import { StripeProductCard } from "../../stripe/stripe-product-card";

const meta: Meta<typeof StripeProductCard> = {
  title: "International/Stripe/StripeProductCard",
  component: StripeProductCard,
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
    productName: "Pro Subscription",
    price: "49.00",
    currency: "USD",
    description: "Unlock all premium features for your account.",
    buttonText: "Subscribe Now",
    productUrl: "https://buy.stripe.com/test_1",
  },
};

export const Vertical: Story = {
  args: {
    productName: "E-book: The Art of Code",
    price: "19.99",
    currency: "USD",
    description: "A deep dive into software craftsmanship.",
    buttonText: "Buy E-book",
    productUrl: "https://buy.stripe.com/test_2",
    orientation: "vertical",
  },
};

export const Flat: Story = {
  args: {
    productName: "Donation",
    price: "10.00",
    currency: "EUR",
    description: "Support our open-source project.",
    buttonText: "Donate €10",
    productUrl: "https://buy.stripe.com/test_3",
    variant: "flat",
  },
};

export const Bordered: Story = {
  args: {
    productName: "Workshop Ticket",
    price: "250.00",
    currency: "JPY",
    description: "Entry to the 2-day virtual workshop.",
    buttonText: "Get Ticket",
    productUrl: "https://buy.stripe.com/test_4",
    variant: "bordered",
  },
};

export const FullWidth: Story = {
  args: {
    productName: "Lifetime Deal",
    price: "499.00",
    currency: "USD",
    description: "One-time payment for lifetime access to all our tools.",
    buttonText: "Buy Lifetime Deal",
    productUrl: "https://buy.stripe.com/test_5",
    fullWidth: true,
  },
  parameters: {
    layout: "padded",
  },
};
