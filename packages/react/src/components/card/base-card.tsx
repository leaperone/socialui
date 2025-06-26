import { lazy, Suspense, useEffect, useState } from "react";
import cn from "../../utils/cn";
import QRCode from "qrcode";

const IconifyIcon = lazy(() => import("@iconify/react").then(mod => ({ default: mod.Icon })));

// Example: { solid: "bg-[#25D366]", flat: "bg-[#25D366]/20", bordered: "bg-[#25D366]/10" }
interface VariantProps {
  solid: string;
  flat: string;
  bordered: string;
}

export interface BaseCardProps {
  children?: React.ReactNode;
  fullWidth?: boolean;
  showImage?: boolean;
  imageUrl?: string;
  imageAlt?: string;
  imagePlacement?: "top" | "side" | "full";
  shadow?: "none" | "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg";
  variant?: "solid" | "flat" | "bordered";
  variantProps?: VariantProps;
  className?: string;
  avatarUrl?: string;
  displayName?: string;
  username?: string;
  showQRCode?: boolean;
  qrCodeContent?: string;
  qrCodeSize?: number;
  isVertical?: boolean;
}

export function BaseCard({
  children,
  showImage = false,
  imageUrl = "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
  imageAlt = "Card Image",
  imagePlacement = "top",
  fullWidth = false,
  shadow = "none",
  radius = "lg",
  variant = "solid",
  variantProps,
  className,
  avatarUrl = "https://img.daisyui.com/images/profile/demo/batperson@192.webp",
  displayName,
  username,
  showQRCode = false,
  qrCodeContent = "",
  qrCodeSize = 128,
  isVertical = false,
}: BaseCardProps) {
  const currentBgColor = variantProps?.[variant] || "bg-background";
  const currentRadius = `rounded-${radius}`;
  const currentShadow = `shadow-${shadow}`;
  const currentFullWidth = fullWidth ? "w-full" : "w-fit";
  const currentImagePlacement =
    imagePlacement === "top" ? "" : imagePlacement === "side" ? "card-side" : "image-full";
  const avatarRadius = radius === "lg" ? "rounded-full" : currentRadius;

  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>("");

  useEffect(() => {
    if (showQRCode && qrCodeContent) {
      QRCode.toDataURL(qrCodeContent, {
        width: qrCodeSize,
        margin: 1,
        color: {
          dark: "#000000",
          light: "#FFFFFF",
        },
      })
        .then(url => {
          setQrCodeDataUrl(url);
        })
        .catch(err => {
          console.error("Error generating QR code:", err);
        });
    }
  }, [showQRCode, qrCodeContent, qrCodeSize]);

  return (
    <div
      className={cn(
        "card overflow-hidden",
        currentBgColor,
        currentRadius,
        currentShadow,
        currentFullWidth,
        currentImagePlacement,
        className
      )}
    >
      {showImage && (
        <figure>
          <img src={imageUrl} alt={imageAlt} />
        </figure>
      )}
      {isVertical ? (
        <div className={cn("card-body p-6 text-center flex flex-col items-center justify-center")}>
          {avatarUrl && (
            <div className="avatar mb-4">
              <div className={cn("w-24", avatarRadius)}>
                <img src={avatarUrl} />
              </div>
            </div>
          )}
          {displayName && (
            <h3 className="text-lg font-semibold text-base-content mb-2">{displayName}</h3>
          )}
          {username && <p className="text-sm text-base-content/70 mb-4">{username}</p>}
          {qrCodeDataUrl && (
            <div className="flex justify-center mb-4">
              <img
                src={qrCodeDataUrl}
                alt="QR Code"
                className={currentRadius}
                width={qrCodeSize}
                height={qrCodeSize}
              />
            </div>
          )}
          {children}
        </div>
      ) : (
        <div className={cn("card-body p-6")}>
          <div className="flex items-center gap-6 justify-center">
            {qrCodeDataUrl && (
              <div className="flex-shrink-0">
                <img
                  src={qrCodeDataUrl}
                  alt="QR Code"
                  className={currentRadius}
                  width={qrCodeSize}
                  height={qrCodeSize}
                />
              </div>
            )}
            <div className="flex flex-col items-start justify-start">
              {avatarUrl && (
                <div className="avatar">
                  <div className={cn("w-24", avatarRadius)}>
                    <img src={avatarUrl} />
                  </div>
                </div>
              )}
              {displayName && (
                <h3 className="text-lg font-semibold text-base-content mb-1">{displayName}</h3>
              )}
              {username && <p className="text-sm text-base-content/70">{username}</p>}
            </div>
          </div>
          {children}
        </div>
      )}
    </div>
  );
}
