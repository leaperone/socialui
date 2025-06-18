import { forwardRef, lazy, Suspense, useEffect, useState } from "react";
import { Card, CardBody } from "../components/ui/card";
import cn from "../utils/cn";
import QRCode from "qrcode";

const IconifyIcon = lazy(() => import("@iconify/react").then(mod => ({ default: mod.Icon })));

export interface BilibiliProfileCardProps {
  qrCodeContent?: string;
  uid?: string;
  username?: string;
  fans?: string;
  following?: string;
  videos?: string;
  profileUrl?: string;
  className?: string;
  shadow?: "none" | "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg";
  fullWidth?: boolean;
  isHoverable?: boolean;
  isPressable?: boolean;
  variant?: "solid" | "flat" | "faded" | "bordered" | "light";
  orientation?: "horizontal" | "vertical";
}

export const BilibiliProfileCard = forwardRef<HTMLDivElement, BilibiliProfileCardProps>(
  (
    {
      className,
      qrCodeContent = "https://space.bilibili.com/example",
      uid = "123456789",
      username = "用户名",
      fans,
      following,
      videos,
      profileUrl,
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

    // Bilibili theme variant styles configuration
    const variantStyles = {
      solid: {
        card: "bg-pink-500 text-white",
        qr: "bg-white",
        decorative: { primary: "bg-white/10", secondary: "bg-white/5" },
      },
      flat: {
        card: "bg-pink-200/50 text-foreground",
        qr: "bg-white",
        decorative: { primary: "bg-pink-200/30", secondary: "bg-pink-200/20" },
      },
      faded: {
        card: "bg-pink-50/50 text-foreground",
        qr: "bg-white/80",
        decorative: { primary: "bg-pink-300/20", secondary: "bg-pink-300/10" },
      },
      bordered: {
        card: "bg-background text-foreground border-2 border-pink-500/70",
        qr: "bg-white",
        decorative: { primary: "bg-pink-100/50", secondary: "bg-pink-100/30" },
      },
      light: {
        card: "bg-transparent text-foreground",
        qr: "bg-white",
        decorative: { primary: "bg-pink-200/30", secondary: "bg-pink-200/20" },
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

        {/* Bilibili Icon */}
        <div className={cn("absolute z-20", isVertical ? "hidden" : "top-4 right-4")}>
          <Suspense fallback={<div className="h-8 w-8" />}>
            <IconifyIcon icon="simple-icons:bilibili" className="h-8 w-8 opacity-80" />
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
                    alt="Bilibili Profile QR Code"
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <div className="h-full w-full bg-gray-100 flex items-center justify-center">
                    <div className="text-xs text-gray-500">Loading...</div>
                  </div>
                )}
              </div>
            </div>

            {/* Content: user info */}
            <div className={contentClasses}>
              {/* User display */}
              <div className={cn("space-y-2", isVertical ? "text-center" : "")}>
                <div className="space-y-1">
                  <div className="text-lg font-bold">{username}</div>
                  <div className="text-sm opacity-70">UID: {uid}</div>
                </div>

                {/* Stats */}
                <div className={cn("flex gap-4 text-sm", isVertical ? "justify-center" : "")}>
                  {following && (
                    <div>
                      <span className="font-medium">{following}</span>
                      <span className="opacity-70 ml-1">关注</span>
                    </div>
                  )}
                  {fans && (
                    <div>
                      <span className="font-medium">{fans}</span>
                      <span className="opacity-70 ml-1">粉丝</span>
                    </div>
                  )}
                  {videos && (
                    <div>
                      <span className="font-medium">{videos}</span>
                      <span className="opacity-70 ml-1">视频</span>
                    </div>
                  )}
                </div>

                <div className="text-xs opacity-60">扫码关注我的 Bilibili</div>

                {/* Profile Button */}
                {profileUrl && (
                  <button
                    onClick={() => window.open(profileUrl, "_blank", "noopener,noreferrer")}
                    className={cn(
                      "mt-3 px-4 w-full py-2 rounded-full text-sm font-medium transition-all duration-200",
                      "hover:scale-105 active:scale-95",
                      variant === "solid"
                        ? "bg-white text-pink-600 hover:bg-gray-100"
                        : "bg-pink-500 text-white hover:bg-pink-600",
                      "border border-current/20"
                    )}
                  >
                    查看主页
                  </button>
                )}
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    );
  }
);

BilibiliProfileCard.displayName = "BilibiliProfileCard";
