import { forwardRef, useEffect, useState } from "react";
import QRCode from "qrcode";
import { PhoneIcon, MailIcon, GlobeIcon, MapPinIcon } from "lucide-react";

export interface VCardContactCardPlainProps {
  fullName?: string;
  organization?: string;
  title?: string;
  phone?: string;
  email?: string;
  website?: string;
  address?: string;

  // Style props - all styles passed via className
  className?: string;
  containerClassName?: string;
  qrContainerClassName?: string;
  qrImageClassName?: string;
  contentClassName?: string;
  nameClassName?: string;
  titleClassName?: string;
  organizationClassName?: string;
  contactInfoClassName?: string;
  phoneClassName?: string;
  emailClassName?: string;
  websiteClassName?: string;
  addressClassName?: string;

  // QR Code customization
  qrCodeOptions?: {
    width?: number;
    margin?: number;
    color?: {
      dark?: string;
      light?: string;
    };
  };
}

const generateVCardString = (props: VCardContactCardPlainProps) => {
  const { fullName, organization, title, phone, email, website, address } = props;
  let vCard = "BEGIN:VCARD\n";
  vCard += "VERSION:3.0\n";
  if (fullName) vCard += `FN:${fullName}\n`;
  if (organization) vCard += `ORG:${organization}\n`;
  if (title) vCard += `TITLE:${title}\n`;
  if (phone) vCard += `TEL;TYPE=WORK,VOICE:${phone}\n`;
  if (email) vCard += `EMAIL:${email}\n`;
  if (website) vCard += `URL:${website}\n`;
  if (address) vCard += `ADR;TYPE=WORK:;;${address.replace(/,/g, ";")}\n`;
  vCard += "END:VCARD";
  return vCard;
};

export const VCardContactCardPlain = forwardRef<HTMLDivElement, VCardContactCardPlainProps>(
  (props, ref) => {
    const {
      fullName = "Full Name",
      organization,
      title,
      phone,
      email,
      website,
      address,
      className,
      containerClassName,
      qrContainerClassName,
      qrImageClassName,
      contentClassName,
      nameClassName,
      titleClassName,
      organizationClassName,
      contactInfoClassName,
      phoneClassName,
      emailClassName,
      websiteClassName,
      addressClassName,
      qrCodeOptions = {},
    } = props;

    const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>("");

    useEffect(() => {
      const vCardString = generateVCardString(props);
      const defaultOptions = {
        width: 120,
        margin: 1,
        color: {
          dark: "#000000",
          light: "#FFFFFF",
        },
      };

      QRCode.toDataURL(vCardString, { ...defaultOptions, ...qrCodeOptions })
        .then(setQrCodeDataUrl)
        .catch(console.error);
    }, [props, qrCodeOptions]);

    return (
      <div ref={ref} className={className}>
        <div className={containerClassName}>
          {/* QR Code Section */}
          <div className={qrContainerClassName}>
            {qrCodeDataUrl ? (
              <img src={qrCodeDataUrl} alt="vCard QR Code" className={qrImageClassName} />
            ) : (
              <div className="flex items-center justify-center">
                <div>Loading...</div>
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className={contentClassName}>
            {/* Name and Title Section */}
            <div>
              <div className={nameClassName}>{fullName}</div>
              {title && <div className={titleClassName}>{title}</div>}
              {organization && <div className={organizationClassName}>{organization}</div>}
            </div>

            {/* Contact Information */}
            <div className={contactInfoClassName}>
              {phone && (
                <div className={phoneClassName}>
                  <PhoneIcon className="w-4 h-4 flex-shrink-0" />
                  <span>{phone}</span>
                </div>
              )}
              {email && (
                <div className={emailClassName}>
                  <MailIcon className="w-4 h-4 flex-shrink-0" />
                  <a href={`mailto:${email}`}>{email}</a>
                </div>
              )}
              {website && (
                <div className={websiteClassName}>
                  <GlobeIcon className="w-4 h-4 flex-shrink-0" />
                  <a href={website} target="_blank" rel="noopener noreferrer">
                    {website}
                  </a>
                </div>
              )}
              {address && (
                <div className={addressClassName}>
                  <MapPinIcon className="w-4 h-4 flex-shrink-0" />
                  <span>{address}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

VCardContactCardPlain.displayName = "VCardContactCardPlain";
