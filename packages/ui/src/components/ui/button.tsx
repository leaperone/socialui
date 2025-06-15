import { forwardRef, ButtonHTMLAttributes, ReactNode } from "react";
import cn from "../../utils/cn";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  radius?: "none" | "sm" | "md" | "lg";
  startContent?: ReactNode;
  onPress?: () => void;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    children, 
    className, 
    radius = "md", 
    startContent,
    onPress,
    onClick,
    ...props 
  }, ref) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (onPress) {
        onPress();
      }
      if (onClick) {
        onClick(e);
      }
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          "bg-primary text-primary-foreground hover:bg-primary/90",
          "h-10 px-4 py-2",
          {
            "rounded-none": radius === "none",
            "rounded-sm": radius === "sm",
            "rounded-md": radius === "md",
            "rounded-lg": radius === "lg",
          },
          className
        )}
        onClick={handleClick}
        {...props}
      >
        {startContent && <span className="mr-2">{startContent}</span>}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button"; 