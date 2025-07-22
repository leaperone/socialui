import { forwardRef, useEffect, useState } from "react";
import QRCode from "qrcode";

export interface SocialProfileCardPlainProps {
  // 数据属性 - 通用字段
  qrCodeContent?: string;
  displayName?: string;
  username?: React.ReactNode;
  uid?: string;

  // 统计数据 - 灵活字段
  stats?: Array<{
    label: string;
    value: string;
  }>;

  // 描述文本
  description?: string;

  // 交互属性
  profileUrl?: string;
  onQrClick?: () => void;
  onProfileClick?: () => void;

  // 平台图标
  platformIcon?: React.ReactNode;

  // 样式属性 - 所有样式通过 className 传递
  className?: string;
  containerClassName?: string;
  qrContainerClassName?: string;
  qrImageClassName?: string;
  contentClassName?: string;
  userInfoClassName?: string;
  displayNameClassName?: string;
  usernameClassName?: string;
  uidClassName?: string;
  statsClassName?: string;
  statItemClassName?: string;
  descriptionClassName?: string;
  actionButtonClassName?: string;

  // QR 码配置
  qrCodeOptions?: {
    width?: number;
    margin?: number;
    color?: {
      dark?: string;
      light?: string;
    };
  };
}

export const SocialProfileCardPlain = forwardRef<HTMLDivElement, SocialProfileCardPlainProps>(
  (props, ref) => {
    const {
      qrCodeContent = "https://example.com",
      displayName = "Display Name",
      username,
      uid,
      stats = [],
      description,
      profileUrl,
      onQrClick,
      onProfileClick,
      platformIcon,
      className,
      containerClassName,
      qrContainerClassName,
      qrImageClassName,
      contentClassName,
      userInfoClassName,
      displayNameClassName,
      usernameClassName,
      uidClassName,
      statsClassName,
      statItemClassName,
      descriptionClassName,
      actionButtonClassName,
      qrCodeOptions = {},
    } = props;

    const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>("");

    useEffect(() => {
      const defaultOptions = {
        width: 120,
        margin: 1,
        color: {
          dark: "#000000",
          light: "#FFFFFF",
        },
      };

      QRCode.toDataURL(qrCodeContent, { ...defaultOptions, ...qrCodeOptions })
        .then(setQrCodeDataUrl)
        .catch(console.error);
    }, [qrCodeContent, qrCodeOptions]);

    const handleQrClick = () => {
      if (onQrClick) {
        onQrClick();
      } else if (profileUrl) {
        window.open(profileUrl, "_blank", "noopener,noreferrer");
      }
    };

    const handleProfileClick = () => {
      if (onProfileClick) {
        onProfileClick();
      } else if (profileUrl) {
        window.open(profileUrl, "_blank", "noopener,noreferrer");
      }
    };

    return (
      <div ref={ref} className={className}>
        <div className={containerClassName}>
          {/* QR Code Section */}
          <div className={qrContainerClassName}>
            {qrCodeDataUrl ? (
              <button
                onClick={handleQrClick}
                className={qrImageClassName}
                title="Click to visit profile"
                type="button"
              >
                <img
                  src={qrCodeDataUrl}
                  alt="Profile QR Code"
                  className="h-full w-full object-contain"
                />
              </button>
            ) : (
              <div className="flex items-center justify-center h-full w-full">
                <div className="text-xs text-gray-500">Loading...</div>
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className={contentClassName}>
            {/* User Info Section */}
            <div className={userInfoClassName}>
              <div className={displayNameClassName}>{displayName}</div>
              {username && (
                <div className={usernameClassName}>
                  {typeof username === "string" ? `@${username}` : username}
                </div>
              )}
              {uid && <div className={uidClassName}>UID: {uid}</div>}
            </div>

            {/* Stats Section */}
            {stats.length > 0 && (
              <div className={statsClassName}>
                {stats.map((stat, index) => (
                  <div key={index} className={statItemClassName}>
                    <span className="font-medium">{stat.value}</span>
                    <span className="opacity-70 ml-1">{stat.label}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Description Section */}
            {description && <div className={descriptionClassName}>{description}</div>}

            {/* Action Button Section */}
            {profileUrl && (
              <button onClick={handleProfileClick} className={actionButtonClassName} type="button">
                View Profile
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
);

SocialProfileCardPlain.displayName = "SocialProfileCardPlain";
