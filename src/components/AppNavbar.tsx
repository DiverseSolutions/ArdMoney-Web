import { useState } from "react";
import { Link } from "react-router-dom";
import LogoIcon from "@assets/icons/LogoIcon";
import Menu from "@assets/home/menu.png";
import Cancel from "@assets/icons/cancel.svg";
import Copyright from "@assets/home/dark_copyright.svg";
import MobileClouds from "@assets/home/mobile_clouds.svg";

import ConnectWalletButton from "@components/web3/ConnectWalletButton";

import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
import AdditionalDropdownMenu from "@components/nav/Dropdown";
import AccountButton from "@components/nav/AccountButton";
import NetworkButton from "@components/nav/NetworkButton";
import OutlineButton from "./shared/OutlineButton";
import { useTranslation } from "react-i18next";

const DesktopLinks: any[] = [
  { text: "home", link: "/" },
  { text: "swap", link: "/swap" },
  // { text: "Pool", link: "/pool" },
  { text: "staking", link: "/stake" },
  // { text: "Governance", link: "/governance" },
  // { text: "Analytics", link: "/analytics" },
];

const MobileLinks: any[] = [
  { text: "home", link: "/" },
  { text: "swap", link: "/swap" },
  // { text: "Pool", link: "/pool" },
  { text: "staking", link: "/stake" },
  // { text: "Governance", link: "/governance" },
  // { text: "Analytics", link: "/analytics" },
];

export default function AppNavbar() {
  const { isConnected, account } = useSelector(
    (state: RootState) => state.web3
  );
  const [open, setOpen] = useState(false);
  const transitionProperties = open ? "translate-x-0" : "translate-x-full";

  const { i18n, t } = useTranslation();

  let selectedLanguage = i18n.language === "mn" ? "en" : "mn";
  function handleChangeLanguage() {
    i18n.changeLanguage(selectedLanguage);
  }

  const openSidebar = () => {
    setOpen(!open);
  };

  return (
    <div className={`relative flex slide-in`}>
      <div className="flex sticky justify-center bg-black h-[68px] w-full z-40">
        <div className="flex w-full md:px-2xl md:py-2xs">
          <div className="flex justify-between items-center w-full px-3 py-4 md:py-0 sm:px-6  lg:px-0 lg:py-0">
            <div className="flex items-center gap-6">
              <a href="/">
                <LogoIcon />
              </a>
              <div className="hidden md:flex items-center text-white/60 text-base gap-5 cursor-pointer py-sm">
                {DesktopLinks.map((item, index) => (
                  <Link key={index} to={item.link}>
                    <span className="text-md">{t(`navBar:${item.text}`)}</span>
                  </Link>
                ))}

                {/* <AdditionalDropdownMenu /> */}
              </div>
            </div>
            <div className="flex items-center md:space-x-7">
              <button
                className="uppercase text-white hidden md:block"
                onClick={handleChangeLanguage}
              >
                {selectedLanguage}
              </button>
              {isConnected && account !== null && (
                <div className="flex items-center gap-xs h-full">
                  <div className="hidden lg:block w-[12rem]">
                    <NetworkButton />
                  </div>
                  <div className="w-[12rem]">
                    <AccountButton />
                  </div>
                </div>
              )}
              {!isConnected && (
                <div>
                  <ConnectWalletButton style="px-xl" />
                </div>
              )}
            </div>

            <button onClick={() => openSidebar()} className="md:hidden">
              <img
                src={Menu}
                width={"24px"}
                height={"24px"}
                alt="Menu"
                className="cursor-pointer"
              />
            </button>
          </div>
        </div>
      </div>
      {/* {open && ( */}
      <div
        className={`sidebar slide fixed top-0 bottom-0 p-5 w-full bg-primary z-50 h-screen overscroll-none duration-300 ${transitionProperties}`}
      >
        <div className="relative flex flex-col h-full z-10">
          <div className="flex justify-between items-center pl-4">
            <button
              className="uppercase text-white"
              onClick={handleChangeLanguage}
            >
              {selectedLanguage}
            </button>
            <button className="flex justify-end" onClick={() => openSidebar()}>
              <img src={Cancel} alt="" />
            </button>
          </div>
          <div className="flex flex-col gap-base mt-2xl p-base">
            {MobileLinks.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target={"_blank"}
                className="flex flex-col text-xl font-normal"
              >
                <span>{t(`navBar:${item.text}`)}</span>
              </a>
            ))}
          </div>
          <div className="flex sm:justify-start gap-lg p-base ">
            <a
              href="https://medium.com/@ardmoney/monthly-developer-report-3-5c0e4362dae"
              target={"_blank"}
              className="w-6 h-6"
            >
              <div className="i-fa-brands-medium icon-size-6" />
            </a>
            <a
              href="https://www.instagram.com/ard.money/?next=%2F"
              target={"_blank"}
              className="w-6 h-6"
            >
              <div className="i-fa-brands-instagram icon-size-6" />
            </a>
            <a
              href="https://www.facebook.com/search/top?q=ardmoney"
              target={"_blank"}
              className="w-6 h-6"
            >
              <div className="i-fa-brands-facebook icon-size-6" />
            </a>
            <a
              href="https://discord.com/invite/xNWX76eg"
              target={"_blank"}
              className="w-6 h-6"
            >
              <div className="i-fa-brands-discord icon-size-7" />
            </a>
          </div>
          <div className="flex gap-sm p-base w-full">
            <img src={Copyright} className="" alt="image" />
            <span>{t("navBar:rights")}</span>
          </div>
        </div>
        <img
          src={MobileClouds}
          alt=""
          className="absolute w-full left-0 bottom-0 "
        />
      </div>
      {/* )} */}
    </div>
  );
}
