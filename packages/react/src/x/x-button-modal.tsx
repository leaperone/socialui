"use client";

import { useRef } from "react";
import { XProfileCard } from "./x-profile-card";
import cn from "../utils/cn";
import { XIcon } from "./logo/x";

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

  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
  };

  const handleClose = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  return (
    <>
      <button
        className={cn("btn", shape === "square" ? "btn-square" : "btn-circle")}
        onClick={() => openXButtonModal(id)}
      >
        <XIcon className="h-4 w-4" />
      </button>
      <dialog id={id} className="modal" ref={dialogRef}>
        <div className={cn("modal-box p-0 ", sizeClasses[size])}>
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
