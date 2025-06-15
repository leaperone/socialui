import { forwardRef, HTMLAttributes, ReactNode } from "react";
import cn from "../../utils/cn";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  shadow?: "none" | "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg";
  fullWidth?: boolean;
  isPressable?: boolean;
  variant?: "solid" | "flat" | "faded" | "bordered" | "light";
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ 
    children, 
    className, 
    shadow = "none", 
    radius = "md", 
    fullWidth = false, 
    isPressable = false,
    variant = "solid",
    ...props 
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "border border-border bg-card text-card-foreground",
          {
            "shadow-none": shadow === "none",
            "shadow-sm": shadow === "sm",
            "shadow-md": shadow === "md",
            "shadow-lg": shadow === "lg",
            "rounded-none": radius === "none",
            "rounded-sm": radius === "sm",
            "rounded-md": radius === "md",
            "rounded-lg": radius === "lg",
            "w-full": fullWidth,
            "cursor-pointer hover:shadow-lg transition-shadow": isPressable,
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("p-6", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardBody.displayName = "CardBody"; 