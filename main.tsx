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

import StakeEN from "@locales/en/stake.json";
import StakeMN from "@locales/mn/stake.json";

import CommonEN from "@locales/en/common.json";
import CommonMN from "@locales/mn/common.json";

import ConnectWalletEN from "@locales/en/connectWallet.json";
import ConnectWalletMN from "@locales/mn/connectWallet.json";

import AlertEN from "@locales/en/alert.json";
import AlertMN from "@locales/mn/alert.json";

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

i18next.addResourceBundle("en", "stake", StakeEN);
i18next.addResourceBundle("mn", "stake", StakeMN);

i18next.addResourceBundle("en", "common", CommonEN);
i18next.addResourceBundle("mn", "common", CommonMN);

i18next.addResourceBundle("en", "connectWalletModal", ConnectWalletEN);
i18next.addResourceBundle("mn", "connectWalletModal", ConnectWalletMN);

i18next.addResourceBundle("en", "alert", AlertEN);
i18next.addResourceBundle("mn", "alert", AlertMN);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
