import type { Meta, StoryObj } from "@storybook/react-vite";
import { TaobaoStoreCard } from "../../taobao/taobao-store-card";

const meta: Meta<typeof TaobaoStoreCard> = {
  title: "China/Taobao/TaobaoStoreCard",
  component: TaobaoStoreCard,
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
    storeName: "淘宝官方旗舰店",
    sellerName: "淘宝小二",
    rating: "4.9 高",
    qrCodeContent: "https://shop.taobao.com/example_official",
    storeUrl: "https://shop.taobao.com/example_official",
  },
};

export const Vertical: Story = {
  args: {
    storeName: "心选家居生活馆",
    sellerName: "爱生活的小掌柜",
    rating: "4.8 中",
    qrCodeContent: "https://shop.taobao.com/example_home",
    storeUrl: "https://shop.taobao.com/example_home",
    orientation: "vertical",
  },
};

export const Flat: Story = {
  args: {
    storeName: "潮流服饰前沿",
    sellerName: "时尚买手",
    rating: "4.9 高",
    qrCodeContent: "https://shop.taobao.com/example_fashion",
    storeUrl: "https://shop.taobao.com/example_fashion",
    variant: "flat",
  },
};

export const Bordered: Story = {
  args: {
    storeName: "数码科技先锋",
    sellerName: "极客小哥",
    rating: "5.0 高",
    qrCodeContent: "https://shop.taobao.com/example_tech",
    storeUrl: "https://shop.taobao.com/example_tech",
    variant: "bordered",
  },
};

export const FullWidth: Story = {
  args: {
    storeName: "全球零食精选",
    sellerName: "吃货掌门人",
    rating: "4.9 高",
    qrCodeContent: "https://shop.taobao.com/example_snacks",
    storeUrl: "https://shop.taobao.com/example_snacks",
    fullWidth: true,
  },
  parameters: {
    layout: "padded",
  },
};
