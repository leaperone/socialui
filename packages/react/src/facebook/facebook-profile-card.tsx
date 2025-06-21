import { forwardRef, lazy, Suspense, useEffect, useState } from "react";
import cn from "../utils/cn";
import QRCode from "qrcode";

const IconifyIcon = lazy(() => import("@iconify/react").then(mod => ({ default: mod.Icon })));

export interface FacebookProfileCardProps {
  qrCodeContent?: string;
  username?: string;
  displayName?: string;
  followers?: string;
  likes?: string;
  profileUrl?: string;
  className?: string;
  shadow?: "none" | "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg";
  fullWidth?: boolean;
  variant?: "solid" | "flat" | "bordered";
  orientation?: "horizontal" | "vertical";
}

export const FacebookProfileCard = forwardRef<HTMLDivElement, FacebookProfileCardProps>(
  (
    {
      className,
      qrCodeContent = "https://www.facebook.com/example",
      username = "facebook.user",
      displayName = "Facebook User",
      followers,
      likes,
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

    // Facebook theme variant styles configuration with #1877F2
    const variantStyles = {
      solid: {
        card: "bg-[#1877F2] text-white",
        qr: "bg-white",
        decorative: { primary: "bg-white/10", secondary: "bg-white/5" },
      },
      flat: {
        card: "bg-[#1877F2]/20 text-[#0E478F] dark:bg-[#0E478F]/70 dark:text-[#8CB8F7]",
        qr: "bg-white",
        decorative: {
          primary: "bg-[#1877F2]/30 dark:bg-[#8CB8F7]/20",
          secondary: "bg-[#1877F2]/20 dark:bg-[#8CB8F7]/10",
        },
      },
      bordered: {
        card: "bg-[#1877F2]/10 text-[#0E478F] border-2 border-[#1877F2]/70 dark:bg-[#0E478F]/40 dark:text-[#8CB8F7] dark:border-[#1877F2]/50",
        qr: "bg-white",
        decorative: {
          primary: "bg-[#1877F2]/20 dark:bg-[#8CB8F7]/20",
          secondary: "bg-[#1877F2]/15 dark:bg-[#8CB8F7]/10",
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
            <IconifyIcon icon="simple-icons:facebook" className="h-8 w-8 opacity-80" />
          </Suspense>
        </div>

        <div className="card-body relative z-10">
          <div className={cn("flex", layoutClasses)}>
            <div className={cn(qrContainerClasses)}>
              <button
                onClick={() =>
                  window.open(
                    profileUrl || `https://www.facebook.com/${username}`,
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                className={cn(
                  "h-28 w-28 overflow-hidden p-2",
                  currentStyles.qr,
                  radiusClasses[radius]
                )}
                title="Click to visit Facebook page"
              >
                {qrCodeDataUrl ? (
                  <img
                    src={qrCodeDataUrl}
                    alt="Facebook Profile QR Code"
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
                      <span className="opacity-70 ml-1">Followers</span>
                    </div>
                  )}
                  {likes && (
                    <div>
                      <span className="font-medium">{likes}</span>
                      <span className="opacity-70 ml-1">Likes</span>
                    </div>
                  )}
                </div>

                <div className="text-sm opacity-70 font-semibold">
                  Scan QR code to connect on Facebook
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

FacebookProfileCard.displayName = "FacebookProfileCard";
