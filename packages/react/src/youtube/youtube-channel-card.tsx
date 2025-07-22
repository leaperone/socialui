import { forwardRef, lazy, Suspense } from "react";
import cn from "../utils/cn";
import { SocialProfileCardPlain } from "../components/social-profile-card-plain";

const IconifyIcon = lazy(() => import("@iconify/react").then(mod => ({ default: mod.Icon })));

export interface YouTubeChannelCardProps {
  qrCodeContent?: string;
  channelName?: string;
  subscribers?: string;
  videos?: string;
  channelUrl?: string;
  className?: string;
  shadow?: "none" | "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg";
  fullWidth?: boolean;
  variant?: "solid" | "flat" | "bordered";
  orientation?: "horizontal" | "vertical";
}

export const YouTubeChannelCard = forwardRef<HTMLDivElement, YouTubeChannelCardProps>(
  (
    {
      className,
      qrCodeContent = "https://www.youtube.com/channel/example",
      channelName = "YouTube Channel",
      subscribers,
      videos,
      channelUrl,
      shadow = "none",
      radius = "lg",
      fullWidth = false,
      variant = "solid",
      orientation = "horizontal",
    },
    ref
  ) => {
    const isVertical = orientation === "vertical";

    // YouTube theme variant styles configuration with #CD201F
    const variantStyles = {
      solid: {
        card: "bg-[#CD201F] text-white",
        qr: "bg-white",
        decorative: { primary: "bg-white/10", secondary: "bg-white/5" },
      },
      flat: {
        card: "bg-[#CD201F]/20 text-[#8C1615] dark:bg-[#8C1615]/70 dark:text-[#E88F8E]",
        qr: "bg-white",
        decorative: {
          primary: "bg-[#CD201F]/30 dark:bg-[#E88F8E]/20",
          secondary: "bg-[#CD201F]/20 dark:bg-[#E88F8E]/10",
        },
      },
      bordered: {
        card: "bg-[#CD201F]/10 text-[#8C1615] border-2 border-[#CD201F]/70 dark:bg-[#8C1615]/40 dark:text-[#E88F8E] dark:border-[#CD201F]/50",
        qr: "bg-white",
        decorative: {
          primary: "bg-[#CD201F]/20 dark:bg-[#E88F8E]/20",
          secondary: "bg-[#CD201F]/15 dark:bg-[#E88F8E]/10",
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
    const statsClassName = cn("flex gap-4 text-sm", isVertical ? "justify-center" : "");
    const descriptionClassName = "text-sm opacity-70 font-semibold";

    // Format stats data
    const stats = [];
    if (subscribers) {
      stats.push({ label: "Subscribers", value: subscribers });
    }
    if (videos) {
      stats.push({ label: "Videos", value: videos });
    }

    // Platform icon
    const platformIcon = (
      <Suspense fallback={<div className="h-8 w-8" />}>
        <IconifyIcon icon="simple-icons:youtube" className="h-8 w-8 opacity-80" />
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

        {/* YouTube Icon */}
        <div className={cn("absolute z-20", isVertical ? "hidden" : "top-4 right-4")}>
          {platformIcon}
        </div>

        <div className={containerClassName}>
          <SocialProfileCardPlain
            qrCodeContent={qrCodeContent}
            displayName={channelName}
            stats={stats}
            description="Scan QR code to subscribe on YouTube"
            profileUrl={channelUrl || qrCodeContent}
            containerClassName={layoutContainerClassName}
            qrContainerClassName={qrContainerClassName}
            contentClassName={contentSectionClassName}
            userInfoClassName={userInfoClassName}
            displayNameClassName={displayNameClassName}
            statsClassName={statsClassName}
            descriptionClassName={descriptionClassName}
          />
        </div>
      </div>
    );
  }
);

YouTubeChannelCard.displayName = "YouTubeChannelCard";
