import { forwardRef, lazy, Suspense } from "react";
import cn from "../utils/cn";
import { SocialProfileCardPlain } from "../components/social-profile-card-plain";

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
    const isVertical = orientation === "vertical";

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
    const usernameClassName = "text-sm opacity-70";
    const statsClassName = cn("flex gap-4 text-sm", isVertical ? "justify-center" : "");
    const descriptionClassName = "text-sm opacity-70 font-semibold";

    // Format stats data
    const stats = [];
    if (followers) {
      stats.push({ label: "关注", value: followers });
    }
    if (following) {
      stats.push({ label: "正在关注", value: following });
    }
    if (posts) {
      stats.push({ label: "动态", value: posts });
    }

    // Platform icon
    const platformIcon = (
      <Suspense fallback={<div className="h-8 w-8" />}>
        <IconifyIcon icon="simple-icons:jike" className="h-8 w-8 opacity-80" />
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

        {/* Jike Icon */}
        <div className={cn("absolute z-20", isVertical ? "hidden" : "top-4 right-4")}>
          {platformIcon}
        </div>

        <div className={containerClassName}>
          <SocialProfileCardPlain
            qrCodeContent={qrCodeContent}
            displayName={displayName}
            username={username}
            stats={stats}
            description="扫码在即刻关注我"
            profileUrl={profileUrl || qrCodeContent}
            containerClassName={layoutContainerClassName}
            qrContainerClassName={qrContainerClassName}
            contentClassName={contentSectionClassName}
            userInfoClassName={userInfoClassName}
            displayNameClassName={displayNameClassName}
            usernameClassName={usernameClassName}
            statsClassName={statsClassName}
            descriptionClassName={descriptionClassName}
          />
        </div>
      </div>
    );
  }
);

JikeProfileCard.displayName = "JikeProfileCard";
