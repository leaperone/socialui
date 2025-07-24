import { forwardRef, lazy, Suspense } from "react";
import cn from "../../utils/cn";
import { SocialProfileCardPlain } from "../../components/social-profile-card-plain";

const IconifyIcon = lazy(() => import("@iconify/react").then(mod => ({ default: mod.Icon })));

export interface TwitchLiveRoomCardProps {
  qrCodeContent?: string;
  streamerName?: string;
  streamTitle?: string;
  category?: string;
  viewers?: string;
  isLive?: boolean;
  profileUrl?: string;
  className?: string;
  shadow?: "none" | "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg";
  fullWidth?: boolean;
  variant?: "solid" | "flat" | "bordered";
  orientation?: "horizontal" | "vertical";
}

export const TwitchLiveRoomCard = forwardRef<HTMLDivElement, TwitchLiveRoomCardProps>(
  (
    {
      className,
      qrCodeContent = "https://www.twitch.tv/example",
      streamerName = "Streamer",
      streamTitle = "Playing a cool game!",
      category,
      viewers,
      isLive = true,
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

    // Twitch theme variant styles configuration with #9146FF
    const variantStyles = {
      solid: {
        card: "bg-[#9146FF] text-white",
        qr: "bg-white",
        decorative: { primary: "bg-white/10", secondary: "bg-white/5" },
      },
      flat: {
        card: "bg-[#9146FF]/20 text-[#5a2a9e] dark:bg-[#5a2a9e]/70 dark:text-[#c5a3ff]",
        qr: "bg-white",
        decorative: {
          primary: "bg-[#9146FF]/30 dark:bg-[#c5a3ff]/20",
          secondary: "bg-[#9146FF]/20 dark:bg-[#c5a3ff]/10",
        },
      },
      bordered: {
        card: "bg-[#9146FF]/10 text-[#5a2a9e] border-2 border-[#9146FF]/70 dark:bg-[#5a2a9e]/40 dark:text-[#c5a3ff] dark:border-[#9146FF]/50",
        qr: "bg-white",
        decorative: {
          primary: "bg-[#9146FF]/20 dark:bg-[#c5a3ff]/20",
          secondary: "bg-[#9146FF]/15 dark:bg-[#c5a3ff]/10",
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
    const usernameClassName = "text-sm opacity-90 font-medium";
    const statsClassName = cn("flex gap-4 text-sm", isVertical ? "justify-center" : "");
    const descriptionClassName = "text-sm opacity-70 font-semibold";

    // Format stats data
    const stats = [];
    if (category) {
      stats.push({ label: "Category", value: category });
    }
    if (viewers) {
      stats.push({ label: "Viewers", value: viewers });
    }

    // Create custom display name with live badge
    const displayNameWithBadge = (
      <div className="flex items-center gap-2">
        {isLive && (
          <div className="badge badge-error bg-red-500 text-white text-xs px-2 py-1 rounded">
            LIVE
          </div>
        )}
        <span>{streamerName}</span>
      </div>
    );

    // Platform icon
    const platformIcon = (
      <Suspense fallback={<div className="h-8 w-8" />}>
        <IconifyIcon icon="simple-icons:twitch" className="h-8 w-8 opacity-80" />
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

        {/* Twitch Icon */}
        <div className={cn("absolute z-20", isVertical ? "hidden" : "top-4 right-4")}>
          {platformIcon}
        </div>

        <div className={containerClassName}>
          <SocialProfileCardPlain
            qrCodeContent={qrCodeContent}
            displayName={displayNameWithBadge.toString()}
            username={streamTitle}
            stats={stats}
            description="Scan to watch stream"
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

TwitchLiveRoomCard.displayName = "TwitchLiveRoomCard";
