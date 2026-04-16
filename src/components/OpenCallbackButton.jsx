"use client";

import { useCallbackModal } from "./CallbackModalContext";

export default function OpenCallbackButton({
  children,
  className = "",
  type = "button",
}) {
  const callbackModal = useCallbackModal();

  const handleClick = () => {
    if (callbackModal?.open) {
      callbackModal.open();
      return;
    }

    window.location.href = "/contact/";
  };

  return (
    <button className={className} onClick={handleClick} type={type}>
      {children}
    </button>
  );
}
