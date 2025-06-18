import { forwardRef, lazy, Suspense, useEffect, useState } from "react";
import { Card, CardBody } from "../components/ui/card";
import cn from "../utils/cn";
import QRCode from "qrcode";

const IconifyIcon = lazy(() => import("@iconify/react").then(mod => ({ default: mod.Icon })));

export interface WeChatContactCardProps {
  qrCodeContent?: string;
  nickname?: string;
  className?: string;
  shadow?: "none" | "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg";
  fullWidth?: boolean;
  isHoverable?: boolean;
  isPressable?: boolean;
  variant?: "solid" | "flat" | "faded" | "bordered" | "light";
  orientation?: "horizontal" | "vertical";
}

export const WeChatContactCard = forwardRef<HTMLDivElement, WeChatContactCardProps>(
  (
    {
      className,
      qrCodeContent = "http://weixin.qq.com/r/example",
      nickname = "微信用户",
      shadow = "none",
      radius = "lg",
      fullWidth = false,
      isPressable = false,
      variant = "solid",
      orientation = "horizontal",
    },
    ref
  ) => {
    const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>("");
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

    // Variant styles configuration
    const variantStyles = {
      solid: {
        card: "bg-gradient-to-r from-green-500 to-green-400 text-white",
        qr: "bg-white",
        decorative: { primary: "bg-white/10", secondary: "bg-white/5" },
      },
      flat: {
        card: "bg-green-200/50 text-foreground",
        qr: "bg-white",
        decorative: { primary: "bg-green-200/30", secondary: "bg-green-200/20" },
      },
      faded: {
        card: "bg-green-50/50 text-foreground",
        qr: "bg-white/80",
        decorative: { primary: "bg-green-300/20", secondary: "bg-green-300/10" },
      },
      bordered: {
        card: "bg-background text-foreground border-2 border-green-500/70",
        qr: "bg-white",
        decorative: { primary: "bg-green-100/50", secondary: "bg-green-100/30" },
      },
      light: {
        card: "bg-transparent text-foreground",
        qr: "bg-white",
        decorative: { primary: "bg-green-200/30", secondary: "bg-green-200/20" },
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

    const headerClasses = isVertical ? "flex-col items-center gap-3" : "flex items-center gap-3";

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

        {/* WeChat Icon */}
        <div className={cn("absolute z-20", isVertical ? "hidden" : "top-4 right-4")}>
          <Suspense fallback={<div className="h-8 w-8" />}>
            <IconifyIcon icon="ic:baseline-wechat" className="h-8 w-8 opacity-80" />
          </Suspense>
        </div>

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

            {/* Content: nickname and WeChat info */}
            <div className={contentClasses}>
              {/* Nickname display */}
              <div className={cn("space-y-1", isVertical ? "text-center" : "")}>
                <div className="text-lg font-medium">{nickname}</div>
                <div className="text-sm opacity-70">扫一扫二维码加我微信</div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    );
  }
);

WeChatContactCard.displayName = "WeChatContactCard";
