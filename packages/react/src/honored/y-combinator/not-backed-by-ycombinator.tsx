import { forwardRef, lazy, Suspense } from "react";

const Icon = lazy(() => import("@iconify/react").then(mod => ({ default: mod.Icon })));

export interface NotBackedByYCombinatorProps {
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

export const NotBackedByYCombinator = forwardRef<HTMLDivElement, NotBackedByYCombinatorProps>(
  (props, ref) => {
    const {
      prefix = "Not backed by",
      suffix = "Combinator",
      className = "flex items-center justify-center text-gray-600 text-sm",
      textClassName = "",
      logoClassName = "mx-1.5 text-[#FF6600]",
      ariaLabel = "Not backed by Y Combinator",
    } = props;

    return (
      <div ref={ref} className={className} aria-label={ariaLabel}>
        <span className={textClassName}>{prefix}</span>
        <Suspense fallback={<div className="h-5 w-5 mx-1.5" />}>
          <Icon icon="simple-icons:ycombinator" className={`h-5 w-5 ${logoClassName}`} />
        </Suspense>
        <span className={textClassName}>{suffix}</span>
      </div>
    );
  }
);

NotBackedByYCombinator.displayName = "NotBackedByYCombinator";
