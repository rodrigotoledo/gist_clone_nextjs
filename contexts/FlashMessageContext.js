"use client";
import { createContext, useContext, useState } from 'react';

const FlashMessageContext = createContext();

export function FlashMessageProvider({ children }) {
  const [flashMessage, setFlashMessage] = useState(null);

  const showFlashMessage = (message) => {
    setFlashMessage(message);
    setTimeout(() => setFlashMessage(null), 3000);
  };

  return (
    <FlashMessageContext.Provider value={{ flashMessage, showFlashMessage }}>
      {children}
    </FlashMessageContext.Provider>
  );
}

export const useFlashMessage = () => useContext(FlashMessageContext);