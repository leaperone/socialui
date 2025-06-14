import { forwardRef, lazy, Suspense, useEffect, useState } from "react";
import { Search } from "lucide-react";
import { Button, Card, CardBody, cn, HeroUIProvider, Tooltip } from "@heroui/react";
import QRCode from "qrcode";

const IconifyIcon = lazy(() => import("@iconify/react").then(mod => ({ default: mod.Icon })));

export interface WeChatCardProps {
  qrCodeContent?: string;
  accountName?: string;
  placeholder?: string;
  className?: string;
  shadow?: "none" | "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg";
  fullWidth?: boolean;
  isHoverable?: boolean;
  isPressable?: boolean;
  variant?: "solid" | "flat" | "faded" | "bordered" | "light";
  orientation?: "horizontal" | "vertical";
}

export const WeChatCard = forwardRef<HTMLDivElement, WeChatCardProps>(
  ({ 
    className, 
    qrCodeContent = "http://weixin.qq.com/r/mp/mBeRiZ3ENsBJrdnq90KK", 
    accountName = "海鱼Harry",
    placeholder = "微信搜一搜",
    shadow = "none",
    radius = "md", 
    fullWidth = false,
    isPressable = false,
    variant = "solid",
    orientation = "horizontal"
  }, ref) => {
    const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>("");
    const isVertical = orientation === "vertical";

    useEffect(() => {
      QRCode.toDataURL(qrCodeContent, {
        width: 120,
        margin: 1,
        color: {
          dark: "#000000",
          light: "#FFFFFF"
        }
      }).then(setQrCodeDataUrl).catch(console.error);
    }, [qrCodeContent]);

    // Variant styles configuration
    const variantStyles = {
      solid: {
        card: "bg-gradient-to-r from-green-500 to-green-400 text-white",
        qr: "bg-white",
        button: "bg-white/95 text-default-600 backdrop-blur-sm",
        decorative: { primary: "bg-white/10", secondary: "bg-white/5" }
      },
      flat: {
        card: "bg-green-200 text-foreground",
        qr: "bg-white",
        button: "bg-white text-default-600",
        decorative: { primary: "bg-green-200/30", secondary: "bg-green-200/20" }
      },
      faded: {
        card: "bg-green-50 text-foreground",
        qr: "bg-white/80",
        button: "bg-white/60 text-default-600 backdrop-blur-sm",
        decorative: { primary: "bg-green-300/20", secondary: "bg-green-300/10" }
      },
      bordered: {
        card: "bg-background text-foreground border-2 border-green-200",
        qr: "bg-white",
        button: "bg-white text-default-600 border border-green-200",
        decorative: { primary: "bg-green-100/50", secondary: "bg-green-100/30" }
      },
      light: {
        card: "bg-green-50 text-foreground",
        qr: "bg-white",
        button: "bg-white text-default-600",
        decorative: { primary: "bg-green-200/30", secondary: "bg-green-200/20" }  
      }
    };

    const currentStyles = variantStyles[variant] || variantStyles.solid;
    const currentShadow = variant === "bordered" ? "none" : shadow;

    // Layout classes based on orientation
    const layoutClasses = isVertical 
      ? "flex-col items-center gap-4" 
      : "flex-row items-center gap-6";

    const qrContainerClasses = isVertical 
      ? "flex-shrink-0" 
      : "flex-shrink-0";

    const contentClasses = isVertical 
      ? "w-full space-y-4 text-center" 
      : "flex-1 space-y-4";

    const headerClasses = isVertical 
      ? "flex items-center justify-center gap-3" 
      : "flex items-center gap-3";

    return (
      <HeroUIProvider>
        <Card 
          ref={ref}
          className={cn("overflow-hidden", currentStyles.card, className)}
          shadow={currentShadow}
          radius={radius}
          fullWidth={fullWidth}
          isPressable={isPressable}
        >
          <CardBody>
            <div className={cn("flex", layoutClasses)}>
              {/* QR Code */}
              <div className={qrContainerClasses}>
                <div className={cn(
                  "h-28 w-28 overflow-hidden p-2",
                  currentStyles.qr,
                  {
                    "rounded-none": radius === "none",
                    "rounded-sm": radius === "sm", 
                    "rounded-md": radius === "md",
                    "rounded-xl": radius === "lg"
                  }
                )}>
                  {qrCodeDataUrl ? (
                    <img
                      src={qrCodeDataUrl}
                      alt="WeChat QR Code"
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <div className="h-full w-full bg-default-100 flex items-center justify-center">
                      <div className="text-xs text-default-500">Loading...</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Content: Icon, title and search section */}
              <div className={contentClasses}>
                {/* Header with WeChat logo and text */}
                <div className={headerClasses}>
                  <Suspense fallback={<div className="h-8 w-8" />}>
                    <IconifyIcon icon="ic:baseline-wechat" className="h-8 w-8" />
                  </Suspense>
                  <span className="text-xl font-medium">{placeholder}</span>
                </div>

                {/* Search input section */}
                <Tooltip content="点击复制 / Click to copy">
                  <Button
                    radius={radius}
                    className={cn("w-full flex items-center gap-3 px-4 py-3 shadow-sm", currentStyles.button)}
                    startContent={<Search className="size-5 text-default-400" />}
                    onPress={() => navigator.clipboard.writeText(accountName)}
                  >
                    <span className={cn("text-base", isVertical ? "text-center" : "flex-1")}>
                      {accountName}
                    </span>
                  </Button>
                </Tooltip>
              </div>
            </div>
          </CardBody>
          <div className={cn("absolute -right-4 -top-4 h-24 w-24 rounded-full", currentStyles.decorative.primary)} />
          <div className={cn("absolute -bottom-6 -left-6 h-32 w-32 rounded-full", currentStyles.decorative.secondary)} />
        </Card>
      </HeroUIProvider>
    );
  }
);

WeChatCard.displayName = "WeChatCard";
