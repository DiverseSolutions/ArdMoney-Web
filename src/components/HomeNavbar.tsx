import { useState } from "react";
import Menu from "@assets/home/menu.png";
import Litepaper from "@assets/LitePaper.pdf";
import Cancel from "@assets/icons/cancel.svg";
import Copyright from "@assets/home/dark_copyright.svg";
import MobileClouds from "@assets/home/mobile_clouds.svg";
import OutlineButton from "@components/shared/OutlineButton";
import LogoIcon from "@assets/icons/LogoIcon";
import AdditionalDropdownMenu from "@components/nav/Dropdown";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const navigations = [
  { text: "swap", link: "/swap", isSpa: true },
  { text: "staking", link: "/stake", isSpa: true },
  { text: "pools", link: "/pools", isSpa: true },
  {
    text: "BscScan",
    link: "https://bscscan.com/token/0xe849188f76c0da93b5ed310a1f72127914b3a7b9",
  },
  {
    text: "PolygonScan",
    link: "https://polygonscan.com/address/0x87ee9B1D25d7fd609CAadBa5f8c14F4e219650bD",
  },
  { text: "Litepaper", link: Litepaper },
];

const mobileNavigations = [
  { text: "swap", link: "/swap", isSpa: true },
  { text: "staking", link: "/stake", isSpa: true },
  { text: "pools", link: "/pools", isSpa: true },
  // { text: "launchApp", link: "https://app.ardmoney.com/" },
  {
    text: "BscScan",
    link: "https://bscscan.com/token/0xe849188f76c0da93b5ed310a1f72127914b3a7b9",
  },
  {
    text: "PolygonScan",
    link: "https://polygonscan.com/address/0x87ee9B1D25d7fd609CAadBa5f8c14F4e219650bD",
  },
  { text: "Litepaper", link: Litepaper },
];

export default function HomeNavBar() {
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
        <div className="flex max-w-6xl w-full">
          <div className="flex items-center justify-between w-full px-3 py-4 sm:px-6 sm:py-[22px] lg:px-0 lg:py-0">
            <div className="flex items-center gap-6">
              <a href="/">
                <LogoIcon />
              </a>
              <div className="hidden md:flex items-center text-white/60 text-md gap-5 cursor-pointer pt-1">
                {navigations.map((item, index) =>
                  item.isSpa ? (
                    <Link
                      key={index}
                      to={item.link}
                      className="flex items-center"
                    >
                      <span className="text-md">
                        {t(`navBar:${item.text}`)}
                      </span>
                    </Link>
                  ) : (
                    <a
                      key={index}
                      href={item.link}
                      target={"_blank"}
                      className="flex items-center"
                    >
                      <span className="text-md">
                        {t(`navBar:${item.text}`)}
                      </span>
                    </a>
                  )
                )}
                {/* <AdditionalDropdownMenu /> */}
              </div>
            </div>
            <div className="flex items-center space-x-7">
              <button
                className="uppercase hidden md:block text-white"
                onClick={handleChangeLanguage}
              >
                {selectedLanguage}
              </button>
              <a
                href="https://app.ardmoney.com/"
                target={"_blank"}
                className=""
              >
                <OutlineButton style="px-xl py-2 md:py-3">
                  {t("navBar:launchApp")}
                </OutlineButton>
              </a>

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
      </div>
      <div
        className={`sidebar slide fixed top-0 bottom-0 p-5 w-full bg-primary z-50 h-screen overscroll-none duration-300 ${transitionProperties}`}
      >
        <div className="relative flex flex-col h-full">
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
            {mobileNavigations.map((item, index) => (
              <a
                href={item.link}
                key={index}
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
          className="absolute w-full left-0 bottom-0 z-50"
        />
      </div>
    </div>
  );
}
