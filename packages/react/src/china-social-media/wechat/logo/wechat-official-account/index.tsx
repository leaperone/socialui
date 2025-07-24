import cn from "../../../../utils/cn";

// Import logo images for different languages
import fullColorLogoEn from "./en/全彩标志.png";
import whiteLogoEn from "./en/白色标志.png";
import invertedLogoEn from "./en/全彩反白标志.png";

import fullColorLogoZh from "./zh/全彩标志.png";
import whiteLogoZh from "./zh/白色标志.png";
import invertedLogoZh from "./zh/全彩反白标志.png";

export type WeChatLogoVariant = "full-color" | "white" | "inverted";
export type WeChatLogoLanguage = "en" | "zh";

export interface WeChatLogoProps {
  variant?: WeChatLogoVariant;
  language?: WeChatLogoLanguage;
  size?: number | string;
  className?: string;
  alt?: string;
}

export function WeChatLogo({
  variant = "full-color",
  language = "zh",
  size = 120,
  className,
  alt = "WeChat Official Account Logo",
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
      // zh (default)
      switch (variant) {
        case "white":
          return whiteLogoZh;
        case "inverted":
          return invertedLogoZh;
        case "full-color":
        default:
          return fullColorLogoZh;
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
