import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, lazy, Suspense, useEffect, useState } from "react";
import { Search } from "lucide-react";
import QRCode from "qrcode";

const IconifyIcon = lazy(() => import("@iconify/react").then(mod => ({ default: mod.Icon })));

const wechatCard = cva(
  "relative overflow-hidden rounded-2xl bg-gradient-to-r from-green-500 to-green-400 p-6 text-white shadow-lg",
  {
    variants: {
      size: {
        sm: "p-4",
        md: "p-6", 
        lg: "p-8",
      },
    },
    defaultVariants: { size: "md" },
  }
);

export interface WeChatCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof wechatCard> {
  qrCodeContent?: string;
  accountName?: string;
  placeholder?: string;
}

export const WeChatCard = forwardRef<HTMLDivElement, WeChatCardProps>(
  ({ 
    className, 
    size, 
    qrCodeContent = "http://weixin.qq.com/r/mp/mBeRiZ3ENsBJrdnq90KK", 
    accountName = "海鱼Harry",
    placeholder = "微信搜一搜",
    ...props 
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
        <div ref={ref} className={wechatCard({ size, className })} {...props}>
      {/* Main left-right layout */}
      <div className="flex items-center gap-6">
        {/* Left: QR Code section */}
        <div className="flex-shrink-0">
          <div className="relative">
            <div className="h-28 w-28 overflow-hidden rounded-xl bg-white p-2">
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
            <div className="flex items-center gap-3 rounded-full bg-white/95 px-4 py-3 text-gray-600 shadow-sm backdrop-blur-sm">
              <Search className="h-5 w-5 text-gray-400" />
              <span className="flex-1 text-base">{accountName}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white/10"></div>
      <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-white/5"></div>
    </div>
    );
  }
);

WeChatCard.displayName = "WeChatCard";
