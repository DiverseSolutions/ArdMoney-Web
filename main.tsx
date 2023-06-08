import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App";

import NavBarEN from "@locales/en/navBar.json";
import NavBarMN from "@locales/mn/navBar.json";
import FooterEN from "@locales/en/footer.json";
import FooterMN from "@locales/mn/footer.json";
import ModalsEN from "@locales/en/modals.json";
import ModalsMN from "@locales/mn/modals.json";

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
i18next.addResourceBundle("en", "navBar", NavBarEN);
i18next.addResourceBundle("mn", "navBar", NavBarMN);
i18next.addResourceBundle("en", "footer", FooterEN);
i18next.addResourceBundle("mn", "footer", FooterMN);
i18next.addResourceBundle("en", "modals", ModalsEN);
i18next.addResourceBundle("mn", "modals", ModalsMN);

i18next.addResourceBundle("en", "home", HomeEN);
i18next.addResourceBundle("mn", "home", HomeMN);

i18next.addResourceBundle("en", "swap", SwapEN);
i18next.addResourceBundle("mn", "swap", SwapMN);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
