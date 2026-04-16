"use client";

import { createContext, useContext } from "react";

const CallbackModalContext = createContext(null);

export function CallbackModalProvider({ children, value }) {
  return (
    <CallbackModalContext.Provider value={value}>
      {children}
    </CallbackModalContext.Provider>
  );
}

export function useCallbackModal() {
  return useContext(CallbackModalContext);
}
