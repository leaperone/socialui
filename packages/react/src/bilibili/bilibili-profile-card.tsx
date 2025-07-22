import { forwardRef, lazy, Suspense } from "react";
import cn from "../utils/cn";
import { SocialProfileCardPlain } from "../components/social-profile-card-plain";

const IconifyIcon = lazy(() => import("@iconify/react").then(mod => ({ default: mod.Icon })));

export interface BilibiliProfileCardProps {
  qrCodeContent?: string;
  uid?: string;
  username?: string;
  className?: string;
  shadow?: "none" | "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg";
  fullWidth?: boolean;
  isHoverable?: boolean;
  variant?: "solid" | "flat" | "bordered";
  orientation?: "horizontal" | "vertical";
}

export const BilibiliProfileCard = forwardRef<HTMLDivElement, BilibiliProfileCardProps>(
  (
    {
      className,
      qrCodeContent = "https://space.bilibili.com/example",
      uid = "123456789",
      username = "用户名",
      shadow = "none",
      radius = "lg",
      fullWidth = false,
      variant = "solid",
      orientation = "horizontal",
    },
    ref
  ) => {
    const isVertical = orientation === "vertical";

    // Bilibili theme variant styles configuration with #FF6699
    const variantStyles = {
      solid: {
        card: "bg-[#FF6699] text-white",
        qr: "bg-white",
        decorative: { primary: "bg-white/10", secondary: "bg-white/5" },
      },
      flat: {
        card: "bg-[#FF6699]/20 text-[#992651] dark:bg-[#66223B]/70 dark:text-[#FFA8C6]",
        qr: "bg-white",
        decorative: {
          primary: "bg-[#FF6699]/30 dark:bg-[#FFA8C6]/20",
          secondary: "bg-[#FF6699]/20 dark:bg-[#FFA8C6]/10",
        },
      },
      bordered: {
        card: "bg-[#FF6699]/10 text-[#992651] border-2 border-[#FF6699]/70 dark:bg-[#66223B]/40 dark:text-[#FFA8C6] dark:border-[#FF6699]/50",
        qr: "bg-white",
        decorative: {
          primary: "bg-[#FF6699]/20 dark:bg-[#FFA8C6]/20",
          secondary: "bg-[#FF6699]/15 dark:bg-[#FFA8C6]/10",
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
    const userInfoClassName = cn("space-y-2", isVertical ? "text-center" : "");
    const displayNameClassName = "text-lg font-bold";
    const uidClassName = cn(
      "badge badge-sm badge-dash",
      isVertical ? "mx-auto" : "",
      radiusClasses[radius]
    );
    const descriptionClassName = "text-sm opacity-70 font-semibold";

    // Platform icon
    const platformIcon = (
      <Suspense fallback={<div className="h-8 w-8" />}>
        <IconifyIcon icon="simple-icons:bilibili" className="h-8 w-8 opacity-80" />
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

        {/* Bilibili Icon */}
        <div className={cn("absolute z-20", isVertical ? "hidden" : "top-4 right-4")}>
          {platformIcon}
        </div>

        <div className={containerClassName}>
          <SocialProfileCardPlain
            qrCodeContent={qrCodeContent}
            displayName={username}
            uid={uid}
            description="扫码关注我的 Bilibili"
            profileUrl={`https://space.bilibili.com/${uid}`}
            containerClassName={layoutContainerClassName}
            qrContainerClassName={qrContainerClassName}
            contentClassName={contentSectionClassName}
            userInfoClassName={userInfoClassName}
            displayNameClassName={displayNameClassName}
            uidClassName={uidClassName}
            descriptionClassName={descriptionClassName}
          />
        </div>
      </div>
    );
  }
);

BilibiliProfileCard.displayName = "BilibiliProfileCard";
