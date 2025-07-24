"use client";

import { useRef, lazy, Suspense } from "react";
import { XProfileCard } from "./x-profile-card";
import cn from "../../utils/cn";

const Icon = lazy(() => import("@iconify/react").then(mod => ({ default: mod.Icon })));

interface XIconProps {
  className?: string;
  size?: number | string;
  color?: string;
}

function XIcon({ className, size = 24, color }: XIconProps) {
  return (
    <Suspense fallback={<div className="h-8 w-8" />}>
      <Icon
        icon="simple-icons:x"
        className={cn("inline-block", className)}
        width={size}
        height={size}
        color={color}
      />
    </Suspense>
  );
}

export interface XButtonModalProps {
  id: string;
  username: string;
  displayName?: string;
  followers?: string;
  following?: string;
  qrCodeContent?: string;
  variant?: "solid" | "flat" | "bordered";
  size?: "sm" | "md" | "lg";
  shape?: "square" | "circle";
}

export function XButtonModal({
  id = "x-modal-default",
  username,
  displayName,
  followers,
  following,
  qrCodeContent,
  variant = "solid",
  size = "md",
  shape = "square",
}: XButtonModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const buttonSizeClasses = {
    sm: "btn-sm",
    md: "btn",
    lg: "btn-lg",
  };

  const variantClasses = {
    solid: "bg-black text-white",
    flat: "btn-ghost text-black",
    bordered: "btn-outline text-black",
  };

  const handleClose = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  return (
    <>
      <button
        className={cn(
          "btn",
          shape === "square" ? "btn-square" : "btn-circle",
          variantClasses[variant],
          buttonSizeClasses[size]
        )}
        onClick={() => openXButtonModal(id)}
      >
        <XIcon className="h-4 w-4" />
      </button>
      <dialog id={id} className="modal" ref={dialogRef}>
        <div className={cn("modal-box p-0")}>
          <XProfileCard
            username={username}
            displayName={displayName || `@${username}`}
            followers={followers}
            following={following}
            qrCodeContent={qrCodeContent || `https://x.com/${username}`}
            profileUrl={`https://x.com/${username}`}
            variant={variant}
            // orientation="vertical"
            shadow="none"
            radius="lg"
            fullWidth={true}
          />

          <div className="modal-action p-4">
            <form method="dialog">
              <button className="btn" onClick={handleClose}>
                Close
              </button>
            </form>
          </div>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button onClick={handleClose}>close</button>
        </form>
      </dialog>
    </>
  );
}

// Helper function to open modal
export function openXButtonModal(id: string) {
  const modal = document.getElementById(id) as HTMLDialogElement;
  if (modal) {
    modal.showModal();
  }
}

// Helper function to close modal
export function closeXButtonModal(id: string) {
  const modal = document.getElementById(id) as HTMLDialogElement;
  if (modal) {
    modal.close();
  }
}
