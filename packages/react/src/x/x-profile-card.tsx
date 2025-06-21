import { forwardRef, lazy, Suspense, useEffect, useState } from "react";
import cn from "../utils/cn";
import QRCode from "qrcode";

const IconifyIcon = lazy(() => import("@iconify/react").then(mod => ({ default: mod.Icon })));

export interface XProfileCardProps {
  qrCodeContent?: string;
  username?: string;
  displayName?: string;
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

export const XProfileCard = forwardRef<HTMLDivElement, XProfileCardProps>(
  (
    {
      className,
      qrCodeContent = "https://x.com/example",
      username = "username",
      displayName = "Display Name",
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

    // X theme variant styles configuration
    const variantStyles = {
      solid: {
        card: "bg-gradient-to-r from-black to-gray-900 text-white",
        qr: "bg-white",
        decorative: { primary: "bg-white/10", secondary: "bg-white/5" },
      },
      flat: {
        card: "bg-gray-100/80 text-gray-900 dark:bg-gray-800/80 dark:text-gray-100",
        qr: "bg-white",
        decorative: {
          primary: "bg-gray-300/30 dark:bg-gray-600/30",
          secondary: "bg-gray-300/20 dark:bg-gray-600/20",
        },
      },
      bordered: {
        card: "bg-transparent text-gray-900 border-2 border-gray-200 dark:text-gray-100 dark:border-gray-700",
        qr: "bg-white",
        decorative: {
          primary: "bg-gray-200/50 dark:bg-gray-700/50",
          secondary: "bg-gray-200/30 dark:bg-gray-700/30",
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

        {/* X Icon */}
        <div className={cn("absolute z-20", isVertical ? "hidden" : "top-4 right-4")}>
          <Suspense fallback={<div className="h-8 w-8" />}>
            <IconifyIcon icon="simple-icons:x" className="h-8 w-8 opacity-80" />
          </Suspense>
        </div>

        <div className="card-body relative z-10">
          <div className={cn("flex", layoutClasses)}>
            {/* QR Code */}
            <div className={qrContainerClasses}>
              <div
                className={cn(
                  "h-28 w-28 overflow-hidden p-2",
                  currentStyles.qr,
                  radiusClasses[radius]
                )}
              >
                {qrCodeDataUrl ? (
                  <img
                    src={qrCodeDataUrl}
                    alt="X Profile QR Code"
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
              </div>
            </div>

            {/* Content: user info */}
            <div className={contentClasses}>
              {/* User display */}
              <div className={cn("space-y-2", isVertical ? "text-center" : "")}>
                <div className="space-y-1">
                  <div className="text-lg font-bold">{displayName}</div>
                  <div className="text-sm opacity-70">@{username}</div>
                </div>

                {/* Stats */}
                <div className={cn("flex gap-4 text-sm", isVertical ? "justify-center" : "")}>
                  {following && (
                    <div>
                      <span className="font-medium">{following}</span>
                      <span className="opacity-70 ml-1">Following</span>
                    </div>
                  )}
                  {followers && (
                    <div>
                      <span className="font-medium">{followers}</span>
                      <span className="opacity-70 ml-1">Followers</span>
                    </div>
                  )}
                </div>

                <div className="text-xs opacity-60">Scan QR code to follow on X</div>

                {/* Profile Button */}
                {profileUrl && (
                  <button
                    onClick={() => window.open(profileUrl, "_blank", "noopener,noreferrer")}
                    className={cn(
                      "mt-3 px-4 w-full py-2 rounded-full text-sm font-medium transition-all duration-200",
                      "hover:scale-105 active:scale-95",
                      variant === "solid"
                        ? "bg-white text-black hover:bg-gray-100"
                        : "bg-black text-white hover:bg-gray-800",
                      "border border-current/20"
                    )}
                  >
                    View Profile
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

XProfileCard.displayName = "XProfileCard";
