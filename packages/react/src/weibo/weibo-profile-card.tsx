import { forwardRef, lazy, Suspense, useEffect, useState } from "react";
import cn from "../utils/cn";
import QRCode from "qrcode";

const IconifyIcon = lazy(() => import("@iconify/react").then(mod => ({ default: mod.Icon })));

export interface WeiboProfileCardProps {
  qrCodeContent?: string;
  uid?: string;
  username?: string;
  followers?: string;
  following?: string;
  profileUrl?: string;
  className?: string;
  shadow?: "none" | "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg";
  fullWidth?: boolean;
  variant?: "solid" | "flat" | "bordered";
  orientation?: "horizontal" | "vertical";
}

export const WeiboProfileCard = forwardRef<HTMLDivElement, WeiboProfileCardProps>(
  (
    {
      className,
      qrCodeContent = "https://weibo.com/example",
      uid = "123456789",
      username = "微博用户",
      followers,
      following,
      profileUrl,
      shadow = "none",
      radius = "lg",
      fullWidth = false,
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

    // Weibo theme variant styles configuration with #DF2029
    const variantStyles = {
      solid: {
        card: "bg-[#DF2029] text-white",
        qr: "bg-white",
        decorative: { primary: "bg-white/10", secondary: "bg-white/5" },
      },
      flat: {
        card: "bg-[#DF2029]/20 text-[#B21A21] dark:bg-[#B21A21]/70 dark:text-[#E8636A]",
        qr: "bg-white",
        decorative: {
          primary: "bg-[#DF2029]/30 dark:bg-[#E8636A]/20",
          secondary: "bg-[#DF2029]/20 dark:bg-[#E8636A]/10",
        },
      },
      bordered: {
        card: "bg-[#DF2029]/10 text-[#B21A21] border-2 border-[#DF2029]/70 dark:bg-[#B21A21]/40 dark:text-[#E8636A] dark:border-[#DF2029]/50",
        qr: "bg-white",
        decorative: {
          primary: "bg-[#DF2029]/20 dark:bg-[#E8636A]/20",
          secondary: "bg-[#DF2029]/15 dark:bg-[#E8636A]/10",
        },
      },
    };

    const currentStyles =
      variantStyles[variant as keyof typeof variantStyles] || variantStyles.solid;

    // Shadow classes mapping
    const shadowClasses = {
      none: "",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
    };

    // Radius classes mapping
    const radiusClasses = {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-xl",
    };

    // Layout classes based on orientation
    const layoutClasses = isVertical
      ? "flex-col items-center gap-4"
      : "flex-row items-center gap-6";

    const qrContainerClasses = isVertical ? "flex-shrink-0" : "flex-shrink-0";

    const contentClasses = isVertical ? "w-full space-y-4 text-center" : "flex-1 space-y-4";

    return (
      <div
        ref={ref}
        className={cn(
          "card relative overflow-hidden",
          currentStyles.card,
          shadowClasses[shadow],
          radiusClasses[radius],
          fullWidth ? "w-full" : "w-fit",
          isVertical ? "w-fit" : "min-w-96",
          className
        )}
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

        {/* Weibo Icon */}
        <div className={cn("absolute z-20", isVertical ? "hidden" : "top-4 right-4")}>
          <Suspense fallback={<div className="h-8 w-8" />}>
            <IconifyIcon icon="simple-icons:sinaweibo" className="h-8 w-8 opacity-80" />
          </Suspense>
        </div>

        <div className="card-body relative z-10">
          <div className={cn("flex", layoutClasses)}>
            {/* QR Code */}
            <div className={cn(qrContainerClasses)}>
              <button
                onClick={() =>
                  window.open(
                    profileUrl || `https://weibo.com/u/${uid}`,
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                className={cn(
                  "h-28 w-28 overflow-hidden p-2",
                  currentStyles.qr,
                  radiusClasses[radius]
                )}
                title="点击跳转到微博主页"
              >
                {qrCodeDataUrl ? (
                  <img
                    src={qrCodeDataUrl}
                    alt="Weibo Profile QR Code"
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <div
                    className={cn(
                      "h-full w-full bg-gray-100 flex items-center justify-center",
                      radiusClasses[radius]
                    )}
                  >
                    <div className="text-xs text-gray-500">Loading...</div>
                  </div>
                )}
              </button>
            </div>

            {/* Content: user info */}
            <div className={contentClasses}>
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
                  {followers && (
                    <div>
                      <span className="font-medium">{followers}</span>
                      <span className="opacity-70 ml-1">粉丝</span>
                    </div>
                  )}
                </div>

                <div className="text-sm opacity-70 font-semibold">扫码关注我的微博</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

WeiboProfileCard.displayName = "WeiboProfileCard";
