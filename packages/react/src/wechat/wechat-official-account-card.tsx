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
      radius = "md",
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

    const variantStyles = {
      solid: {
        card: "bg-gradient-to-r from-[#07c160] to-[#34d783] text-white",
        qr: "bg-white",
        button: "btn btn-ghost bg-white/95 backdrop-blur-sm text-[#07c160] hover:bg-white",
        decorative: { primary: "bg-white/10", secondary: "bg-white/5" },
      },
      flat: {
        card: "bg-[#e2f9ed]/50 text-[#058141] dark:bg-[#058141]/70 dark:text-[#c5f2db]",
        qr: "bg-white",
        button:
          "btn btn-ghost bg-[#c5f2db]/50 hover:bg-[#c5f2db] dark:bg-[#c5f2db]/20 dark:text-[#e2f9ed] hover:dark:bg-[#c5f2db]/30",
        decorative: {
          primary: "bg-[#c5f2db]/30 dark:bg-[#c5f2db]/20",
          secondary: "bg-[#c5f2db]/20 dark:bg-[#c5f2db]/10",
        },
      },
      bordered: {
        card: "bg-[#e2f9ed]/30 text-[#058141] border-2 border-[#34d783]/70 dark:bg-[#046a36]/40 dark:text-[#c5f2db] dark:border-[#34d783]/50",
        qr: "bg-white",
        button:
          "btn btn-outline border-[#34d783] text-[#34d783] hover:bg-[#34d783] hover:border-[#34d783] hover:text-white dark:border-[#c5f2db]/50 dark:text-[#e2f9ed] hover:dark:bg-[#c5f2db]/10 hover:dark:text-black",
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
    const userInfoClassName = cn("space-y-4", isVertical ? "text-center" : "");

    // Create custom display name with WeChat icon and placeholder
    const displayNameWithIcon = (
      <div className={cn("flex items-center gap-3", isVertical ? "justify-center" : "")}>
        <Suspense fallback={<div className="h-8 w-8" />}>
          <IconifyIcon icon="ic:baseline-wechat" className="h-8 w-8" />
        </Suspense>
        <span className="text-xl font-medium">{placeholder}</span>
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

        <div className={containerClassName}>
          <div className={layoutContainerClassName}>
            <SocialProfileCardPlain
              qrCodeContent={qrCodeContent}
              qrContainerClassName={qrContainerClassName}
            />

            <div className={contentSectionClassName}>
              <div className={userInfoClassName}>
                {displayNameWithIcon}

                <div
                  className="tooltip w-full"
                  data-tip={isCopied ? "已复制 / Copied!" : "点击复制 / Click to copy"}
                >
                  <button
                    onClick={handleCopy}
                    className={cn(
                      "w-full flex items-center justify-start gap-3 px-4 py-3 shadow-sm transition-all duration-300",
                      currentStyles.button,
                      isCopied && "bg-[#c5f2db]/80"
                    )}
                  >
                    {isCopied ? (
                      <Check className="size-5 text-[#07c160]" />
                    ) : (
                      <Search className="size-5 opacity-60" />
                    )}
                    <span
                      className={cn(
                        "text-base transition-all duration-300",
                        isVertical ? "text-center" : ""
                      )}
                    >
                      {isCopied ? "已复制!" : accountName}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

WeChatOfficialAccountCard.displayName = "WeChatOfficialAccountCard";
