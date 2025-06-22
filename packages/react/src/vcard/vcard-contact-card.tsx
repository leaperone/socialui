import { forwardRef, lazy, Suspense, useEffect, useState } from "react";
import cn from "../utils/cn";
import QRCode from "qrcode";
import { Phone, Mail, Globe, MapPin, Building, User } from "lucide-react";

const IconifyIcon = lazy(() => import("@iconify/react").then(mod => ({ default: mod.Icon })));

export interface VCardContactCardProps {
  fullName?: string;
  organization?: string;
  title?: string;
  phone?: string;
  email?: string;
  website?: string;
  address?: string;
  className?: string;
  shadow?: "none" | "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg";
  fullWidth?: boolean;
  variant?: "solid" | "flat" | "bordered";
  orientation?: "horizontal" | "vertical";
}

const generateVCardString = (props: VCardContactCardProps) => {
  const { fullName, organization, title, phone, email, website, address } = props;
  let vCard = "BEGIN:VCARD\n";
  vCard += "VERSION:3.0\n";
  if (fullName) vCard += `FN:${fullName}\n`;
  if (organization) vCard += `ORG:${organization}\n`;
  if (title) vCard += `TITLE:${title}\n`;
  if (phone) vCard += `TEL;TYPE=WORK,VOICE:${phone}\n`;
  if (email) vCard += `EMAIL:${email}\n`;
  if (website) vCard += `URL:${website}\n`;
  if (address) vCard += `ADR;TYPE=WORK:;;${address.replace(/,/g, ";")}\n`;
  vCard += "END:VCARD";
  return vCard;
};

export const VCardContactCard = forwardRef<HTMLDivElement, VCardContactCardProps>((props, ref) => {
  const {
    className,
    fullName = "Full Name",
    organization,
    title,
    phone,
    email,
    website,
    address,
    shadow = "none",
    radius = "lg",
    fullWidth = false,
    variant = "solid",
    orientation = "horizontal",
  } = props;

  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>("");
  const isVertical = orientation === "vertical";

  useEffect(() => {
    const vCardString = generateVCardString(props);
    QRCode.toDataURL(vCardString, {
      width: 120,
      margin: 1,
      color: {
        dark: "#000000",
        light: "#FFFFFF",
      },
    })
      .then(setQrCodeDataUrl)
      .catch(console.error);
  }, [props]);

  const variantStyles = {
    solid: {
      card: "bg-[#0052CC] text-white",
      qr: "bg-white",
      icon: "text-white/80",
      decorative: { primary: "bg-white/10", secondary: "bg-white/5" },
    },
    flat: {
      card: "bg-[#0052CC]/20 text-[#002B6C] dark:bg-[#002B6C]/70 dark:text-[#A8C5FF]",
      qr: "bg-white",
      icon: "text-[#0052CC]/80 dark:text-[#A8C5FF]/80",
      decorative: {
        primary: "bg-[#0052CC]/30 dark:bg-[#A8C5FF]/20",
        secondary: "bg-[#0052CC]/20 dark:bg-[#A8C5FF]/10",
      },
    },
    bordered: {
      card: "bg-[#0052CC]/10 text-[#002B6C] border-2 border-[#0052CC]/70 dark:bg-[#002B6C]/40 dark:text-[#A8C5FF] dark:border-[#0052CC]/50",
      qr: "bg-white",
      icon: "text-[#0052CC]/80 dark:text-[#A8C5FF]/80",
      decorative: {
        primary: "bg-[#0052CC]/20 dark:bg-[#A8C5FF]/20",
        secondary: "bg-[#0052CC]/15 dark:bg-[#A8C5FF]/10",
      },
    },
  };

  const currentStyles = variantStyles[variant] || variantStyles.solid;
  const shadowClasses = { none: "", sm: "shadow-sm", md: "shadow-md", lg: "shadow-lg" };
  const radiusClasses = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-xl",
  };
  const layoutClasses = isVertical ? "flex-col items-center gap-4" : "flex-row items-center gap-6";
  const contentClasses = isVertical ? "w-full space-y-3 text-center" : "flex-1 space-y-3";

  return (
    <div
      ref={ref}
      className={cn(
        "card relative overflow-hidden",
        currentStyles.card,
        shadowClasses[shadow],
        radiusClasses[radius],
        fullWidth ? "w-full" : "w-fit",
        isVertical ? "w-fit" : "min-w-96",
        className
      )}
    >
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

      <div className="card-body relative z-10">
        <div className={cn("flex", layoutClasses)}>
          <div className="flex-shrink-0">
            <div
              className={cn(
                "h-28 w-28 overflow-hidden p-1.5",
                currentStyles.qr,
                radiusClasses[radius]
              )}
            >
              {qrCodeDataUrl ? (
                <img
                  src={qrCodeDataUrl}
                  alt="vCard QR Code"
                  className="h-full w-full object-contain"
                />
              ) : (
                <div className="h-full w-full bg-gray-100 flex items-center justify-center">
                  <div className="text-xs text-gray-500">Loading...</div>
                </div>
              )}
            </div>
          </div>

          <div className={contentClasses}>
            <div className={isVertical ? "text-center" : ""}>
              <div className="text-xl font-bold">{fullName}</div>
              {title && <div className="text-sm opacity-80">{title}</div>}
              {organization && <div className="text-sm opacity-80">{organization}</div>}
            </div>

            <div
              className={cn(
                "space-y-2 text-sm",
                isVertical ? "mx-auto w-fit text-left" : "text-left"
              )}
            >
              {phone && (
                <div className="flex items-center gap-2">
                  <Phone className={cn("size-4", currentStyles.icon)} />
                  <span>{phone}</span>
                </div>
              )}
              {email && (
                <div className="flex items-center gap-2">
                  <Mail className={cn("size-4", currentStyles.icon)} />
                  <a href={`mailto:${email}`} className="hover:underline">
                    {email}
                  </a>
                </div>
              )}
              {website && (
                <div className="flex items-center gap-2">
                  <Globe className={cn("size-4", currentStyles.icon)} />
                  <a
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {website}
                  </a>
                </div>
              )}
              {address && (
                <div className="flex items-center gap-2">
                  <MapPin className={cn("size-4", currentStyles.icon)} />
                  <span>{address}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

VCardContactCard.displayName = "VCardContactCard";
