import { forwardRef, lazy, Suspense } from "react";

const Icon = lazy(() => import("@iconify/react").then(mod => ({ default: mod.Icon })));

export interface NotPartneredWithGoogleProps {
  // Text content
  prefix?: string;
  suffix?: string;

  // Styling
  className?: string;
  textClassName?: string;
  logoClassName?: string;

  // Accessibility
  ariaLabel?: string;
}

export const NotPartneredWithGoogle = forwardRef<HTMLDivElement, NotPartneredWithGoogleProps>(
  (props, ref) => {
    const {
      prefix = "Not partnered with",
      suffix = "",
      className = "flex items-center justify-center text-gray-600 text-sm",
      textClassName = "",
      logoClassName = "mx-1.5",
      ariaLabel = "Not partnered with Google",
    } = props;

    return (
      <div ref={ref} className={className} aria-label={ariaLabel}>
        <span className={textClassName}>{prefix}</span>
        <Suspense fallback={<div className="h-5 w-5 mx-1.5" />}>
          <Icon icon="simple-icons:google" className={`h-5 w-5 ${logoClassName}`} />
        </Suspense>
        <span className={textClassName}>{suffix}</span>
      </div>
    );
  }
);

NotPartneredWithGoogle.displayName = "NotPartneredWithGoogle";
