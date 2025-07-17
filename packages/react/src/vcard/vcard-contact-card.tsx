import { forwardRef } from "react";
import cn from "../utils/cn";
import { VCardContactCardPlain } from "./vcard-contact-card-plain";

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

  const isVertical = orientation === "vertical";

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

  // Build className props for VCardContactCardPlain
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
    "flex-shrink-0 h-28 w-28 overflow-hidden p-1.5",
    currentStyles.qr,
    radiusClasses[radius]
  );

  const qrImageClassName = "h-full w-full object-contain";

  const contentSectionClassName = contentClasses;

  const nameClassName = "text-xl font-bold";
  const titleClassName = "text-sm opacity-80";
  const organizationClassName = "text-sm opacity-80";

  const contactInfoClassName = cn(
    "space-y-2 text-sm",
    isVertical ? "mx-auto w-fit text-left" : "text-left"
  );

  // Create icon-specific class names for each contact type
  const createContactClassName = (baseClass: string = "") => {
    return cn(
      "flex items-center gap-2",
      baseClass,
      "[&_svg]:w-4 [&_svg]:h-4 [&_svg]:flex-shrink-0",
      variant === "solid" && "[&_svg]:text-white/80",
      variant === "flat" && "[&_svg]:text-[#0052CC]/80 dark:[&_svg]:text-[#A8C5FF]/80",
      variant === "bordered" && "[&_svg]:text-[#0052CC]/80 dark:[&_svg]:text-[#A8C5FF]/80",
      "[&_a]:hover:underline"
    );
  };

  return (
    <div className={cardClassName} ref={ref}>
      {/* Decorative elements */}
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
        <VCardContactCardPlain
          fullName={fullName}
          organization={organization}
          title={title}
          phone={phone}
          email={email}
          website={website}
          address={address}
          containerClassName={layoutContainerClassName}
          qrContainerClassName={qrContainerClassName}
          qrImageClassName={qrImageClassName}
          contentClassName={contentSectionClassName}
          nameClassName={isVertical ? cn(nameClassName, "text-center") : nameClassName}
          titleClassName={isVertical ? cn(titleClassName, "text-center") : titleClassName}
          organizationClassName={
            isVertical ? cn(organizationClassName, "text-center") : organizationClassName
          }
          contactInfoClassName={contactInfoClassName}
          phoneClassName={createContactClassName()}
          emailClassName={createContactClassName()}
          websiteClassName={createContactClassName()}
          addressClassName={createContactClassName()}
        />
      </div>
    </div>
  );
});

VCardContactCard.displayName = "VCardContactCard";
