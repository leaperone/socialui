import { forwardRef, lazy, Suspense, useEffect, useState } from "react";
import { Search } from "lucide-react";
import { Button, Card, CardBody, cn, HeroUIProvider } from "@heroui/react";
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
  isBlurred?: boolean;
}

export const WeChatCard = forwardRef<HTMLDivElement, WeChatCardProps>(
  ({ 
    className, 
    qrCodeContent = "http://weixin.qq.com/r/mp/mBeRiZ3ENsBJrdnq90KK", 
    accountName = "海鱼Harry",
    placeholder = "微信搜一搜",
    shadow = "lg",
    radius = "lg", 
    fullWidth = false,
    isHoverable = false,
    isPressable = false,
    isBlurred = false
  }, ref) => {
    const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>("");

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

    return (
      <HeroUIProvider>

      <Card 
        ref={ref}
        className={`relative overflow-hidden bg-gradient-to-r from-green-500 to-green-400 text-white ${className || ""}`}
        shadow={shadow}
        radius={radius}
        fullWidth={fullWidth}
        isHoverable={isHoverable}
        isPressable={isPressable}
        isBlurred={isBlurred}
      >
        <CardBody>
          <div className="flex items-center gap-6">
        <div className="flex-shrink-0">
          <div className="relative">
            <div className={cn(
              "h-28 w-28 overflow-hidden bg-white p-2",
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
                <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                  <div className="text-gray-400 text-xs">Loading...</div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right: Icon, title and search section */}
        <div className="flex-1 space-y-4">
          {/* Header with WeChat logo and text */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Suspense fallback={<div className="h-8 w-8" />}>
                <IconifyIcon icon="ic:baseline-wechat" className="h-8 w-8" />
              </Suspense>
            </div>
            <span className="text-xl font-medium">{placeholder}</span>
          </div>

          {/* Search input section */}
          <div className="relative">
            <Button
              radius={radius}
              className="w-full flex items-center gap-3 bg-white/95 px-4 py-3 text-gray-600 shadow-sm backdrop-blur-sm"
              onPress={() => {
                navigator.clipboard.writeText(accountName);
              }}
            >
              <Search className="h-5 w-5 text-gray-400" />
              <span className="flex-1 text-base">{accountName}</span>
            </Button>
          </div>
        </div>
      </div>

          {/* Decorative elements */}
          <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white/10"></div>
          <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-white/5"></div>
        </CardBody>
      </Card>
      </HeroUIProvider>
    );
  }
);

WeChatCard.displayName = "WeChatCard";
