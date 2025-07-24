import { forwardRef, lazy, Suspense } from "react";
import cn from "../../utils/cn";
import { SocialProfileCardPlain } from "../../components/social-profile-card-plain";

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
    const isVertical = orientation === "vertical";

    // Stripe theme variant styles configuration with #7069FE
    const variantStyles = {
      solid: {
        card: "bg-[#7069FE] text-white",
        qr: "bg-white",
        decorative: { primary: "bg-white/10", secondary: "bg-white/5" },
      },
      flat: {
        card: "bg-[#7069FE]/20 text-[#4A44A8] dark:bg-[#4A44A8]/70 dark:text-[#B9B6FF]",
        qr: "bg-white",
        decorative: {
          primary: "bg-[#7069FE]/30 dark:bg-[#B9B6FF]/20",
          secondary: "bg-[#7069FE]/20 dark:bg-[#B9B6FF]/10",
        },
      },
      bordered: {
        card: "bg-[#7069FE]/10 text-[#4A44A8] border-2 border-[#7069FE]/70 dark:bg-[#4A44A8]/40 dark:text-[#B9B6FF] dark:border-[#7069FE]/50",
        qr: "bg-white",
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

    const contentClasses = isVertical ? "w-full space-y-4 text-center" : "flex-1 space-y-4";

    // Build className props for SocialProfileCardPlain
    const cardClassName = cn(
      "card relative overflow-hidden",
      currentStyles.card,
      shadowClasses[shadow],
      radiusClasses[radius],
      fullWidth ? "w-full" : "w-fit",
      isVertical ? "w-fit" : "min-w-96",
      className
    );

    const containerClassName = cn("card-body relative z-10");
    const layoutContainerClassName = cn("flex", layoutClasses);

    const qrContainerClassName = cn(
      "flex-shrink-0 h-28 w-28 overflow-hidden p-2",
      currentStyles.qr,
      radiusClasses[radius]
    );

    const contentSectionClassName = contentClasses;
    const userInfoClassName = cn("space-y-3", isVertical ? "text-center" : "");
    const displayNameClassName = "text-xl font-bold";
    const usernameClassName = "text-lg opacity-80 font-medium";
    const descriptionClassName = "text-sm opacity-70";
    const actionButtonClassName = cn(
      "mt-2 px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200",
      "hover:scale-105 active:scale-95",
      variant === "solid" && "bg-white text-[#7069FE] hover:bg-gray-100",
      variant === "flat" && "bg-[#7069FE] text-white hover:bg-[#5A53E0]",
      variant === "bordered" &&
        "bg-transparent text-[#4A44A8] border border-[#7069FE]/70 hover:bg-[#7069FE]/20"
    );

    // Format price display
    const formattedPrice = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
    }).format(parseFloat(price));

    // Platform icon
    const platformIcon = (
      <Suspense fallback={<div className="h-8 w-8" />}>
        <IconifyIcon icon="simple-icons:stripe" className="h-8 w-8 opacity-80" />
      </Suspense>
    );

    return (
      <div className={cardClassName} ref={ref}>
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

        {/* Stripe Icon */}
        <div className={cn("absolute z-20", isVertical ? "hidden" : "top-4 right-4")}>
          {platformIcon}
        </div>

        <div className={containerClassName}>
          <SocialProfileCardPlain
            qrCodeContent={productUrl || qrCodeContent}
            displayName={productName}
            username={formattedPrice}
            description={description}
            profileUrl={productUrl || qrCodeContent}
            containerClassName={layoutContainerClassName}
            qrContainerClassName={qrContainerClassName}
            contentClassName={contentSectionClassName}
            userInfoClassName={userInfoClassName}
            displayNameClassName={displayNameClassName}
            usernameClassName={usernameClassName}
            descriptionClassName={descriptionClassName}
            actionButtonClassName={actionButtonClassName}
          />
        </div>
      </div>
    );
  }
);

StripeProductCard.displayName = "StripeProductCard";
