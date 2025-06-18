import { forwardRef, ButtonHTMLAttributes, ReactNode } from "react";
import cn from "../../utils/cn";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "ghost";
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger" | "info";
  size?: "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  startContent?: ReactNode;
  endContent?: ReactNode;
  spinner?: ReactNode;
  spinnerPlacement?: "start" | "end";
  fullWidth?: boolean;
  isIconOnly?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  disableAnimation?: boolean;
  onPress?: () => void;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = "solid",
      color = "default",
      size = "md",
      radius = "md",
      startContent,
      endContent,
      spinner,
      spinnerPlacement = "start",
      fullWidth = false,
      isIconOnly = false,
      isDisabled = false,
      isLoading = false,
      disableAnimation = false,
      onPress,
      onClick,
      disabled,
      ...props
    },
    ref
  ) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (isDisabled || isLoading) return;

      if (onPress) {
        onPress();
      }
      if (onClick) {
        onClick(e);
      }
    };

    const getVariantClasses = () => {
      const colorClasses = {
        default: {
          solid: "bg-default text-default-foreground hover:bg-default/90 focus:bg-default/80",
          bordered: "border-2 border-default text-default hover:bg-default/10 focus:bg-default/10",
          light: "bg-default/20 text-default hover:bg-default/30 focus:bg-default/30",
          flat: "bg-default/10 text-default hover:bg-default/20 focus:bg-default/20",
          faded:
            "bg-default/20 text-default hover:bg-default/30 focus:bg-default/30 border border-default/20",
          shadow:
            "bg-default text-default-foreground shadow-lg hover:bg-default/90 focus:bg-default/80 shadow-default/25",
          ghost: "text-default hover:bg-default/10 focus:bg-default/10",
        },
        primary: {
          solid: "bg-primary text-primary-foreground hover:bg-primary/90 focus:bg-primary/80",
          bordered: "border-2 border-primary text-primary hover:bg-primary/10 focus:bg-primary/10",
          light: "bg-primary/20 text-primary hover:bg-primary/30 focus:bg-primary/30",
          flat: "bg-primary/10 text-primary hover:bg-primary/20 focus:bg-primary/20",
          faded:
            "bg-primary/20 text-primary hover:bg-primary/30 focus:bg-primary/30 border border-primary/20",
          shadow:
            "bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 focus:bg-primary/80 shadow-primary/25",
          ghost: "text-primary hover:bg-primary/10 focus:bg-primary/10",
        },
        secondary: {
          solid:
            "bg-secondary text-secondary-foreground hover:bg-secondary/90 focus:bg-secondary/80",
          bordered:
            "border-2 border-secondary text-secondary hover:bg-secondary/10 focus:bg-secondary/10",
          light: "bg-secondary/20 text-secondary hover:bg-secondary/30 focus:bg-secondary/30",
          flat: "bg-secondary/10 text-secondary hover:bg-secondary/20 focus:bg-secondary/20",
          faded:
            "bg-secondary/20 text-secondary hover:bg-secondary/30 focus:bg-secondary/30 border border-secondary/20",
          shadow:
            "bg-secondary text-secondary-foreground shadow-lg hover:bg-secondary/90 focus:bg-secondary/80 shadow-secondary/25",
          ghost: "text-secondary hover:bg-secondary/10 focus:bg-secondary/10",
        },
        success: {
          solid: "bg-success text-success-foreground hover:bg-success/90 focus:bg-success/80",
          bordered: "border-2 border-success text-success hover:bg-success/10 focus:bg-success/10",
          light: "bg-success/20 text-success hover:bg-success/30 focus:bg-success/30",
          flat: "bg-success/10 text-success hover:bg-success/20 focus:bg-success/20",
          faded:
            "bg-success/20 text-success hover:bg-success/30 focus:bg-success/30 border border-success/20",
          shadow:
            "bg-success text-success-foreground shadow-lg hover:bg-success/90 focus:bg-success/80 shadow-success/25",
          ghost: "text-success hover:bg-success/10 focus:bg-success/10",
        },
        warning: {
          solid: "bg-warning text-warning-foreground hover:bg-warning/90 focus:bg-warning/80",
          bordered: "border-2 border-warning text-warning hover:bg-warning/10 focus:bg-warning/10",
          light: "bg-warning/20 text-warning hover:bg-warning/30 focus:bg-warning/30",
          flat: "bg-warning/10 text-warning hover:bg-warning/20 focus:bg-warning/20",
          faded:
            "bg-warning/20 text-warning hover:bg-warning/30 focus:bg-warning/30 border border-warning/20",
          shadow:
            "bg-warning text-warning-foreground shadow-lg hover:bg-warning/90 focus:bg-warning/80 shadow-warning/25",
          ghost: "text-warning hover:bg-warning/10 focus:bg-warning/10",
        },
        danger: {
          solid: "bg-danger text-danger-foreground hover:bg-danger/90 focus:bg-danger/80",
          bordered: "border-2 border-danger text-danger hover:bg-danger/10 focus:bg-danger/10",
          light: "bg-danger/20 text-danger hover:bg-danger/30 focus:bg-danger/30",
          flat: "bg-danger/10 text-danger hover:bg-danger/20 focus:bg-danger/20",
          faded:
            "bg-danger/20 text-danger hover:bg-danger/30 focus:bg-danger/30 border border-danger/20",
          shadow:
            "bg-danger text-danger-foreground shadow-lg hover:bg-danger/90 focus:bg-danger/80 shadow-danger/25",
          ghost: "text-danger hover:bg-danger/10 focus:bg-danger/10",
        },
        info: {
          solid: "bg-info text-info-foreground hover:bg-info/90 focus:bg-info/80",
          bordered: "border-2 border-info text-info hover:bg-info/10 focus:bg-info/10",
          light: "bg-info/20 text-info hover:bg-info/30 focus:bg-info/30",
          flat: "bg-info/10 text-info hover:bg-info/20 focus:bg-info/20",
          faded: "bg-info/20 text-info hover:bg-info/30 focus:bg-info/30 border border-info/20",
          shadow:
            "bg-info text-info-foreground shadow-lg hover:bg-info/90 focus:bg-info/80 shadow-info/25",
          ghost: "text-info hover:bg-info/10 focus:bg-info/10",
        },
      };

      return colorClasses[color][variant];
    };

    const getSizeClasses = () => {
      const sizeClasses = {
        sm: isIconOnly ? "h-8 w-8 min-w-8" : "h-8 px-3 text-xs",
        md: isIconOnly ? "h-10 w-10 min-w-10" : "h-10 px-4 text-sm",
        lg: isIconOnly ? "h-12 w-12 min-w-12" : "h-12 px-6 text-base",
      };

      return sizeClasses[size];
    };

    const getRadiusClasses = () => {
      const radiusClasses = {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      };

      return radiusClasses[radius];
    };

    const defaultSpinner = (
      <svg
        className="animate-spin h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    );

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          !disableAnimation && "transition-all duration-200",
          getVariantClasses(),
          getSizeClasses(),
          getRadiusClasses(),
          fullWidth && "w-full",
          (isDisabled || isLoading) && "pointer-events-none opacity-50",
          className
        )}
        onClick={handleClick}
        disabled={isDisabled || isLoading || disabled}
        {...props}
      >
        {isLoading && spinnerPlacement === "start" && (
          <span className={cn("flex items-center", !isIconOnly && "mr-2")}>
            {spinner || defaultSpinner}
          </span>
        )}
        {!isLoading && startContent && (
          <span className={cn("flex items-center", !isIconOnly && "mr-2")}>{startContent}</span>
        )}
        {!isIconOnly && children}
        {!isLoading && endContent && (
          <span className={cn("flex items-center", !isIconOnly && "ml-2")}>{endContent}</span>
        )}
        {isLoading && spinnerPlacement === "end" && (
          <span className={cn("flex items-center", !isIconOnly && "ml-2")}>
            {spinner || defaultSpinner}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
