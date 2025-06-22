import { lazy } from "react";
import cn from "../../utils/cn";
// import { Icon } from "@iconify/react";

const Icon = lazy(() => import("@iconify/react").then(mod => ({ default: mod.Icon })));

export interface XIconProps {
  className?: string;
  size?: number | string;
  color?: string;
}

export function XIcon({ className, size = 24, color }: XIconProps) {
  // Dynamic import to avoid module resolution issues
  // const Icon = require("@iconify/react").Icon;

  return (
    <Icon
      icon="simple-icons:x"
      className={cn("inline-block", className)}
      width={size}
      height={size}
      color={color}
    />
  );
}
