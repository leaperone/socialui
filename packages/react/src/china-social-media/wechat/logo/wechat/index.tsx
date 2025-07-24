import cn from "../../../../utils/cn";

// Import logo images for different languages
import fullColorLogoEn from "./en/全彩标志.png";
import whiteLogoEn from "./en/白色标志.png";
import invertedLogoEn from "./en/全彩反白标志.png";

import fullColorLogoCn from "./cn/全彩标志.png";
import whiteLogoCn from "./cn/白色标志.png";
import invertedLogoCn from "./cn/全彩反白标志.png";

export type WeChatLogoVariant = "full-color" | "white" | "inverted";
export type WeChatLogoLanguage = "en" | "cn";

export interface WeChatLogoProps {
  variant?: WeChatLogoVariant;
  language?: WeChatLogoLanguage;
  size?: number | string;
  className?: string;
  alt?: string;
}

export function WeChatLogo({
  variant = "full-color",
  language = "cn",
  size = 120,
  className,
  alt = "WeChat Logo",
}: WeChatLogoProps) {
  const getLogoSource = () => {
    if (language === "en") {
      switch (variant) {
        case "white":
          return whiteLogoEn;
        case "inverted":
          return invertedLogoEn;
        case "full-color":
        default:
          return fullColorLogoEn;
      }
    } else {
      // cn (default)
      switch (variant) {
        case "white":
          return whiteLogoCn;
        case "inverted":
          return invertedLogoCn;
        case "full-color":
        default:
          return fullColorLogoCn;
      }
    }
  };

  return (
    <img
      src={getLogoSource()}
      alt={alt}
      className={cn("inline-block", className)}
      style={{
        width: typeof size === "number" ? `${size}px` : size,
        height: "auto",
      }}
    />
  );
}
