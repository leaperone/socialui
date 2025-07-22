"use client";

import { forwardRef, lazy, Suspense, useState } from "react";
import { Search, Check } from "lucide-react";
import cn from "../utils/cn";
import { SocialProfileCardPlain } from "../components/social-profile-card-plain";

const IconifyIcon = lazy(() => import("@iconify/react").then(mod => ({ default: mod.Icon })));

export interface WeChatOfficialAccountCardProps {
  qrCodeContent?: string;
  accountName?: string;
  placeholder?: string;
  className?: string;
  shadow?: "none" | "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg";
  fullWidth?: boolean;
  variant?: "solid" | "flat" | "bordered";
  orientation?: "horizontal" | "vertical";
}

export const WeChatOfficialAccountCard = forwardRef<HTMLDivElement, WeChatOfficialAccountCardProps>(
  (
    {
      className,
      qrCodeContent = "http://weixin.qq.com/r/mp/mBeRiZ3ENsBJrdnq90KK",
      accountName = "海鱼Harry",
      placeholder = "微信搜一搜",
      shadow = "none",
      radius = "lg",
      fullWidth = false,
      variant = "solid",
      orientation = "horizontal",
    },
    ref
  ) => {
    const [isCopied, setIsCopied] = useState(false);
    const isVertical = orientation === "vertical";

    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(accountName);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      } catch (error) {
        console.error("Failed to copy text:", error);
      }
    };

    // WeChat theme variant styles configuration - 统一使用与 WeChatContactCard 相同的样式
    const variantStyles = {
      solid: {
        card: "bg-gradient-to-r from-[#07c160] to-[#34d783] text-white",
        qr: "bg-white",
        decorative: { primary: "bg-white/10", secondary: "bg-white/5" },
      },
      flat: {
        card: "bg-[#c5f2db]/50 text-[#058141] dark:bg-[#058141]/70 dark:text-[#c5f2db]",
        qr: "bg-white",
        decorative: {
          primary: "bg-[#c5f2db]/30 dark:bg-[#c5f2db]/20",
          secondary: "bg-[#c5f2db]/20 dark:bg-[#c5f2db]/10",
        },
      },
      bordered: {
        card: "bg-[#e2f9ed]/30 text-[#058141] border-2 border-[#34d783]/70 dark:bg-[#046a36]/40 dark:text-[#c5f2db] dark:border-[#34d783]/50",
        qr: "bg-white",
        decorative: {
          primary: "bg-[#e2f9ed]/50 dark:bg-[#c5f2db]/20",
          secondary: "bg-[#e2f9ed]/30 dark:bg-[#c5f2db]/10",
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

    // Layout classes based on orientation - 与 WeChatContactCard 保持一致
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
    const userInfoClassName = cn("space-y-1", isVertical ? "text-center" : "");
    const displayNameClassName = "text-lg font-medium";
    const usernameClassName = "text-sm opacity-70";
    const descriptionClassName = "text-sm opacity-70";

    // Platform icon
    const platformIcon = (
      <Suspense fallback={<div className="h-8 w-8" />}>
        <IconifyIcon icon="ic:baseline-wechat" className="h-8 w-8 opacity-80" />
      </Suspense>
    );

    // 创建自定义的用户名显示，包含复制功能
    const customUsername = (
      <div
        className="tooltip cursor-pointer"
        data-tip={isCopied ? "已复制!" : "点击复制账号名"}
        onClick={handleCopy}
      >
        <div
          className={cn(
            usernameClassName,
            "hover:opacity-100 transition-opacity flex items-center gap-1"
          )}
        >
          {isCopied ? <Check className="size-3 text-[#07c160]" /> : <Search className="size-3" />}
          <span>{isCopied ? "已复制!" : accountName}</span>
        </div>
      </div>
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

        {/* WeChat Icon */}
        <div className={cn("absolute z-20", isVertical ? "hidden" : "top-4 right-4")}>
          {platformIcon}
        </div>

        <div className={containerClassName}>
          <SocialProfileCardPlain
            qrCodeContent={qrCodeContent}
            displayName={placeholder}
            username={customUsername}
            description="扫一扫二维码关注公众号"
            containerClassName={layoutContainerClassName}
            qrContainerClassName={qrContainerClassName}
            contentClassName={contentSectionClassName}
            userInfoClassName={userInfoClassName}
            displayNameClassName={displayNameClassName}
            usernameClassName="block"
            descriptionClassName={descriptionClassName}
          />
        </div>
      </div>
    );
  }
);

WeChatOfficialAccountCard.displayName = "WeChatOfficialAccountCard";
