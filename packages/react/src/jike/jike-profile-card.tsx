import { forwardRef, lazy, Suspense, useEffect, useState } from "react";
import cn from "../utils/cn";
import QRCode from "qrcode";

const IconifyIcon = lazy(() => import("@iconify/react").then(mod => ({ default: mod.Icon })));

export interface JikeProfileCardProps {
  qrCodeContent?: string;
  username?: string;
  displayName?: string;
  followers?: string;
  following?: string;
  posts?: string;
  profileUrl?: string;
  className?: string;
  shadow?: "none" | "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg";
  fullWidth?: boolean;
  variant?: "solid" | "flat" | "bordered";
  orientation?: "horizontal" | "vertical";
}

export const JikeProfileCard = forwardRef<HTMLDivElement, JikeProfileCardProps>(
  (
    {
      className,
      qrCodeContent = "https://m.okjike.com/users/example",
      username = "jikeuser",
      displayName = "即刻用户",
      followers,
      following,
      posts,
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

    // Jike theme variant styles configuration with #FFE900
    const variantStyles = {
      solid: {
        card: "bg-[#FFE900] text-black",
        qr: "bg-white",
        decorative: { primary: "bg-black/10", secondary: "bg-black/5" },
      },
      flat: {
        card: "bg-[#FFE900]/40 text-[#5B5000] dark:bg-[#5B5000]/70 dark:text-[#FFF266]",
        qr: "bg-white",
        decorative: {
          primary: "bg-[#FFE900]/50 dark:bg-[#FFF266]/20",
          secondary: "bg-[#FFE900]/30 dark:bg-[#FFF266]/10",
        },
      },
      bordered: {
        card: "bg-[#FFE900]/20 text-[#5B5000] border-2 border-[#FFE900]/90 dark:bg-[#5B5000]/40 dark:text-[#FFF266] dark:border-[#FFE900]/50",
        qr: "bg-white",
        decorative: {
          primary: "bg-[#FFE900]/40 dark:bg-[#FFF266]/20",
          secondary: "bg-[#FFE900]/20 dark:bg-[#FFF266]/10",
        },
      },
    };

    const currentStyles =
      variantStyles[variant as keyof typeof variantStyles] || variantStyles.solid;

    const shadowClasses = {
      none: "",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
    };

    const radiusClasses = {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-xl",
    };

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

        <div className={cn("absolute z-20", isVertical ? "hidden" : "top-4 right-4")}>
          <Suspense fallback={<div className="h-8 w-8" />}>
            <IconifyIcon icon="simple-icons:jike" className="h-8 w-8 opacity-80" />
          </Suspense>
        </div>

        <div className="card-body relative z-10">
          <div className={cn("flex", layoutClasses)}>
            <div className={cn(qrContainerClasses)}>
              <button
                onClick={() =>
                  window.open(profileUrl || qrCodeContent, "_blank", "noopener,noreferrer")
                }
                className={cn(
                  "h-28 w-28 overflow-hidden p-2",
                  currentStyles.qr,
                  radiusClasses[radius]
                )}
                title="点击访问即刻主页"
              >
                {qrCodeDataUrl ? (
                  <img
                    src={qrCodeDataUrl}
                    alt="Jike Profile QR Code"
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

            <div className={contentClasses}>
              <div className={cn("space-y-2", isVertical ? "text-center" : "")}>
                <div className="space-y-1">
                  <div className="text-lg font-bold">{displayName}</div>
                  <div className="text-sm opacity-70">@{username}</div>
                </div>

                <div className={cn("flex gap-4 text-sm", isVertical ? "justify-center" : "")}>
                  {followers && (
                    <div>
                      <span className="font-medium">{followers}</span>
                      <span className="opacity-70 ml-1">关注</span>
                    </div>
                  )}
                  {following && (
                    <div>
                      <span className="font-medium">{following}</span>
                      <span className="opacity-70 ml-1">正在关注</span>
                    </div>
                  )}
                  {posts && (
                    <div>
                      <span className="font-medium">{posts}</span>
                      <span className="opacity-70 ml-1">动态</span>
                    </div>
                  )}
                </div>

                <div className="text-sm opacity-70 font-semibold">扫码在即刻关注我</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

JikeProfileCard.displayName = "JikeProfileCard";
