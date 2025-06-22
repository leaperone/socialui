"use client";

import cn from "../utils/cn";
import { XIcon } from "./logo/x";

export interface XButtonProps {
  username: string;
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "flat" | "bordered";
}

export function XButton({ username, size = "sm", variant = "solid" }: XButtonProps) {
  const sizeClasses = {
    sm: "btn-sm",
    md: "btn",
    lg: "btn-lg",
  };

  const variantClasses = {
    solid: "bg-black text-white",
    flat: "btn-ghost text-black",
    bordered: "btn-outline text-black",
  };

  const iconSizeClasses = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  };

  return (
    <button
      className={cn("btn btn-square", sizeClasses[size], variantClasses[variant])}
      onClick={() => window.open(`https://x.com/${username}`, "_blank")}
    >
      <XIcon className={cn(iconSizeClasses[size])} />
    </button>
  );
}
