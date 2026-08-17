"use client";

import { Provider } from "react-redux";
import { store } from "@/store/store";
import { LanguageProvider } from "@/i18n/LanguageContext";

export const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
    <Provider store={store}>
      <LanguageProvider>{children}</LanguageProvider>
    </Provider>
  );
};
