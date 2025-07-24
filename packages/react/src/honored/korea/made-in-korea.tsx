import { forwardRef, lazy, Suspense } from "react";

const Icon = lazy(() => import("@iconify/react").then(mod => ({ default: mod.Icon })));

export interface MadeInKoreaProps {
  prefix?: string;
  suffix?: string;
  className?: string;
  textClassName?: string;
  flagClassName?: string;
  ariaLabel?: string;
}

export const MadeInKorea = forwardRef<HTMLDivElement, MadeInKoreaProps>((props, ref) => {
  const {
    prefix = "Made in",
    suffix = "Korea",
    className = "flex items-center justify-center text-gray-600 text-sm",
    textClassName = "",
    flagClassName = "mx-1.5 h-5 w-5",
    ariaLabel = "Made in Korea",
  } = props;

  return (
    <div ref={ref} className={className} aria-label={ariaLabel}>
      <Suspense fallback={<div className={flagClassName} />}>
        <Icon icon="circle-flags:kr" className={flagClassName} />
      </Suspense>
      <span className={textClassName}>{prefix}</span>
      &nbsp;
      <span className={textClassName}>{suffix}</span>
    </div>
  );
});

MadeInKorea.displayName = "MadeInKorea";
