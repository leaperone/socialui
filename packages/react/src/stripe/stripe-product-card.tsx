import { forwardRef, lazy, Suspense, useEffect, useState } from "react";
import cn from "../utils/cn";
import QRCode from "qrcode";

const IconifyIcon = lazy(() => import("@iconify/react").then(mod => ({ default: mod.Icon })));

export interface StripeProductCardProps {
  qrCodeContent?: string;
  productName?: string;
  price?: string;
  currency?: string;
  description?: string;
  buttonText?: string;
  productUrl?: string;
  className?: string;
  shadow?: "none" | "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg";
  fullWidth?: boolean;
  variant?: "solid" | "flat" | "bordered";
  orientation?: "horizontal" | "vertical";
}

export const StripeProductCard = forwardRef<HTMLDivElement, StripeProductCardProps>(
  (
    {
      className,
      qrCodeContent = "https://buy.stripe.com/example",
      productName = "Product Name",
      price = "99.99",
      currency = "USD",
      description = "A brief description of the product.",
      buttonText = "Pay Now",
      productUrl,
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
      const url = productUrl || qrCodeContent;
      QRCode.toDataURL(url, {
        width: 120,
        margin: 1,
        color: {
          dark: "#000000",
          light: "#FFFFFF",
        },
      })
        .then(setQrCodeDataUrl)
        .catch(console.error);
    }, [qrCodeContent, productUrl]);

    // Stripe theme variant styles configuration with #7069FE
    const variantStyles = {
      solid: {
        card: "bg-[#7069FE] text-white",
        qr: "bg-white",
        button: "bg-white text-[#7069FE] hover:bg-gray-100",
        decorative: { primary: "bg-white/10", secondary: "bg-white/5" },
      },
      flat: {
        card: "bg-[#7069FE]/20 text-[#4A44A8] dark:bg-[#4A44A8]/70 dark:text-[#B9B6FF]",
        qr: "bg-white",
        button: "bg-[#7069FE] text-white hover:bg-[#5A53E0]",
        decorative: {
          primary: "bg-[#7069FE]/30 dark:bg-[#B9B6FF]/20",
          secondary: "bg-[#7069FE]/20 dark:bg-[#B9B6FF]/10",
        },
      },
      bordered: {
        card: "bg-[#7069FE]/10 text-[#4A44A8] border-2 border-[#7069FE]/70 dark:bg-[#4A44A8]/40 dark:text-[#B9B6FF] dark:border-[#7069FE]/50",
        qr: "bg-white",
        button: "bg-transparent text-[#4A44A8] border border-[#7069FE]/70 hover:bg-[#7069FE]/20",
        decorative: {
          primary: "bg-[#7069FE]/20 dark:bg-[#B9B6FF]/20",
          secondary: "bg-[#7069FE]/15 dark:bg-[#B9B6FF]/10",
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
            <IconifyIcon icon="simple-icons:stripe" className="h-8 w-8 opacity-80" />
          </Suspense>
        </div>

        <div className="card-body relative z-10">
          <div className={cn("flex", layoutClasses)}>
            <div className={cn(qrContainerClasses)}>
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
                    alt="Stripe Product QR Code"
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

            <div className={contentClasses}>
              <div className={cn("space-y-3", isVertical ? "text-center" : "")}>
                <div className="space-y-1">
                  <div className="text-xl font-bold">{productName}</div>
                  <div className="text-lg opacity-80 font-medium">
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency,
                    }).format(parseFloat(price))}
                  </div>
                </div>
                <p className="text-sm opacity-70">{description}</p>
                <button
                  onClick={() =>
                    window.open(productUrl || qrCodeContent, "_blank", "noopener,noreferrer")
                  }
                  className={cn(
                    "mt-2 px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200",
                    "hover:scale-105 active:scale-95",
                    currentStyles.button
                  )}
                >
                  {buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

StripeProductCard.displayName = "StripeProductCard";
