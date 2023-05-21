import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App";

import HomeEN from "@locales/en/home.json";
import HomeMN from "@locales/mn/home.json";

import SwapEN from "@locales/en/swap.json";
import SwapMN from "@locales/mn/swap.json";

i18next.use(initReactI18next).init({
  lng: "mn",
  debug: true,
  resources: {},
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

i18next.addResourceBundle("en", "home", HomeEN);
i18next.addResourceBundle("mn", "home", HomeMN);

i18next.addResourceBundle("en", "swap", SwapEN);
i18next.addResourceBundle("mn", "swap", SwapMN);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
