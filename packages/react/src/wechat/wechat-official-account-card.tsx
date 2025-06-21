import { forwardRef, lazy, Suspense, useEffect, useState } from "react";
import { Search, Check } from "lucide-react";
import { Button } from "../components/button";
import { Card, CardBody } from "../components/card";
import { Tooltip } from "../components/tooltip";
import cn from "../utils/cn";
import QRCode from "qrcode";

const IconifyIcon = lazy(() => import("@iconify/react").then(mod => ({ default: mod.Icon })));

export interface WeChatOfficialAccountCardProps {
  qrCodeContent?: string;
  accountName?: string;
  placeholder?: string;
  className?: string;
  shadow?: "none" | "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg";
  fullWidth?: boolean;
  isHoverable?: boolean;
  isPressable?: boolean;
  variant?: "solid" | "flat" | "faded" | "bordered" | "light";
  orientation?: "horizontal" | "vertical";
}

export const WeChatOfficialAccountCard = forwardRef<HTMLDivElement, WeChatOfficialAccountCardProps>(
  (
    {
      className,
      qrCodeContent = "http://weixin.qq.com/r/mp/mBeRiZ3ENsBJrdnq90KK",
      accountName = "海鱼Harry",
      placeholder = "微信搜一搜",
      shadow = "none",
      radius = "md",
      fullWidth = false,
      isPressable = false,
      variant = "solid",
      orientation = "horizontal",
    },
    ref
  ) => {
    const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>("");
    const [isCopied, setIsCopied] = useState(false);
    const isVertical = orientation === "vertical";

    useEffect(() => {
      QRCode.toDataURL(qrCodeContent, {
        width: 120,
        margin: 1,
        color: {
          dark: "#000000",
          light: "#FFFFFF",
        },
      })
        .then(setQrCodeDataUrl)
        .catch(console.error);
    }, [qrCodeContent]);

    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(accountName);
        setIsCopied(true);
        // Reset the copied state after 2 seconds
        setTimeout(() => setIsCopied(false), 2000);
      } catch (error) {
        console.error("Failed to copy text:", error);
      }
    };

    // Variant styles configuration
    const variantStyles = {
      solid: {
        card: "bg-gradient-to-r from-success-500 to-success-400 text-white",
        qr: "bg-white",
        button: {
          color: "default" as const,
          variant: "light" as const,
          className: "bg-white/95 backdrop-blur-sm",
        },
        decorative: { primary: "bg-white/10", secondary: "bg-white/5" },
      },
      flat: {
        card: "bg-success-100/50 text-foreground",
        qr: "bg-white",
        button: { color: "success" as const, variant: "flat" as const, className: "" },
        decorative: { primary: "bg-success-200/30", secondary: "bg-success-200/20" },
      },
      faded: {
        card: "bg-success-50/50 text-foreground",
        qr: "bg-white/80",
        button: {
          color: "success" as const,
          variant: "faded" as const,
          className: "backdrop-blur-sm",
        },
        decorative: { primary: "bg-success-300/20", secondary: "bg-success-300/10" },
      },
      bordered: {
        card: "bg-background text-foreground border-2 border-success-500/70",
        qr: "bg-white",
        button: { color: "success" as const, variant: "bordered" as const, className: "" },
        decorative: { primary: "bg-success-100/50", secondary: "bg-success-100/30" },
      },
      light: {
        card: "bg-transparent text-foreground",
        qr: "bg-white",
        button: { color: "success" as const, variant: "light" as const, className: "" },
        decorative: { primary: "bg-success-200/30", secondary: "bg-success-200/20" },
      },
    };

    const currentStyles =
      variantStyles[variant as keyof typeof variantStyles] || variantStyles.solid;
    const currentShadow = variant === "bordered" ? "none" : shadow;

    // Layout classes based on orientation
    const layoutClasses = isVertical
      ? "flex-col items-center gap-4"
      : "flex-row items-center gap-6";

    const qrContainerClasses = isVertical ? "flex-shrink-0" : "flex-shrink-0";

    const contentClasses = isVertical ? "w-full space-y-4 text-center" : "flex-1 space-y-4";

    const headerClasses = isVertical
      ? "flex items-center justify-center gap-3"
      : "flex items-center gap-3";

    return (
      <Card
        ref={ref}
        className={cn("relative overflow-hidden", currentStyles.card, className)}
        shadow={currentShadow}
        radius={radius}
        fullWidth={fullWidth}
        isPressable={isPressable}
      >
        {/* Decorative circles - positioned inside card boundaries */}
        <div
          className={cn(
            "absolute right-4 top-4 h-24 w-24 rounded-full translate-x-1/2 -translate-y-1/2",
            currentStyles.decorative.primary
          )}
        />
        <div
          className={cn(
            "absolute bottom-6 left-6 h-32 w-32 rounded-full -translate-x-1/2 translate-y-1/2",
            currentStyles.decorative.secondary
          )}
        />

        <CardBody className="relative z-10">
          <div className={cn("flex", layoutClasses)}>
            {/* QR Code */}
            <div className={qrContainerClasses}>
              <div
                className={cn("h-28 w-28 overflow-hidden p-2", currentStyles.qr, {
                  "rounded-none": radius === "none",
                  "rounded-sm": radius === "sm",
                  "rounded-md": radius === "md",
                  "rounded-xl": radius === "lg",
                })}
              >
                {qrCodeDataUrl ? (
                  <img
                    src={qrCodeDataUrl}
                    alt="WeChat QR Code"
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <div className="h-full w-full bg-gray-100 flex items-center justify-center">
                    <div className="text-xs text-gray-500">Loading...</div>
                  </div>
                )}
              </div>
            </div>

            {/* Content: Icon, title and search section */}
            <div className={contentClasses}>
              {/* Header with WeChat logo and text */}
              <div className={headerClasses}>
                <Suspense fallback={<div className="h-8 w-8" />}>
                  <IconifyIcon icon="ic:baseline-wechat" className="h-8 w-8" />
                </Suspense>
                <span className="text-xl font-medium">{placeholder}</span>
              </div>

              {/* Search input section */}
              <Tooltip content={isCopied ? "已复制 / Copied!" : "点击复制 / Click to copy"}>
                <Button
                  color={currentStyles.button.color}
                  variant={currentStyles.button.variant}
                  radius={radius}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 shadow-sm transition-all duration-300",
                    currentStyles.button.className,
                    isCopied && "bg-success-100/80"
                  )}
                  startContent={
                    isCopied ? (
                      <Check className="size-5 text-success-600" />
                    ) : (
                      <Search className="size-5 opacity-60" />
                    )
                  }
                  onPress={handleCopy}
                >
                  <span
                    className={cn(
                      "text-base transition-all duration-300",
                      isVertical ? "text-center" : "flex-1"
                    )}
                  >
                    {isCopied ? "已复制!" : accountName}
                  </span>
                </Button>
              </Tooltip>
            </div>
          </div>
        </CardBody>
      </Card>
    );
  }
);

WeChatOfficialAccountCard.displayName = "WeChatOfficialAccountCard";
