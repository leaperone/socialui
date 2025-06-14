// packages/ui/src/button.tsx
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const button = cva(
  "inline-flex items-center justify-center rounded-md transition-colors focus-visible:outline-none",
  {
    variants: {
      variant: {
        solid: "bg-primary text-white hover:bg-primary/90",
        outline: "border border-input hover:bg-accent",
        ghost: "hover:bg-accent/50",
      },
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4",
        lg: "h-12 px-6 text-lg",
      },
    },
    defaultVariants: { variant: "solid", size: "md" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button ref={ref} className={button({ variant, size, className })} {...props} />
  ),
);
Button.displayName = "Button";
