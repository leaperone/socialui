import { forwardRef, lazy, Suspense } from "react";
import cn from "../utils/cn";
import { SocialProfileCardPlain } from "../components/social-profile-card-plain";

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
    const isVertical = orientation === "vertical";

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
    const uidClassName = "text-sm opacity-70";
    const statsClassName = cn("flex gap-4 text-sm", isVertical ? "justify-center" : "");
    const descriptionClassName = "text-sm opacity-70 font-semibold";

    // Format stats data
    const stats = [];
    if (following) {
      stats.push({ label: "关注", value: following });
    }
    if (followers) {
      stats.push({ label: "粉丝", value: followers });
    }

    // Platform icon
    const platformIcon = (
      <Suspense fallback={<div className="h-8 w-8" />}>
        <IconifyIcon icon="simple-icons:sinaweibo" className="h-8 w-8 opacity-80" />
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

        {/* Weibo Icon */}
        <div className={cn("absolute z-20", isVertical ? "hidden" : "top-4 right-4")}>
          {platformIcon}
        </div>

        <div className={containerClassName}>
          <SocialProfileCardPlain
            qrCodeContent={qrCodeContent}
            displayName={username}
            uid={uid}
            stats={stats}
            description="扫码关注我的微博"
            profileUrl={profileUrl || `https://weibo.com/u/${uid}`}
            containerClassName={layoutContainerClassName}
            qrContainerClassName={qrContainerClassName}
            contentClassName={contentSectionClassName}
            userInfoClassName={userInfoClassName}
            displayNameClassName={displayNameClassName}
            uidClassName={uidClassName}
            statsClassName={statsClassName}
            descriptionClassName={descriptionClassName}
          />
        </div>
      </div>
    );
  }
);

WeiboProfileCard.displayName = "WeiboProfileCard";
