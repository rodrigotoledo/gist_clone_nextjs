// components/FlashMessage.js
"use client";

import { useFlashMessage } from "@/contexts/FlashMessageContext";

export default function FlashMessage() {
  const { flashMessage } = useFlashMessage();

  if (!flashMessage) return null;

  return (
    <div className="flash-message">
      {flashMessage}
    </div>
  );
}
