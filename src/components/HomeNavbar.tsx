import { useState } from "react";
import Menu from "@assets/home/menu.png";
import Litepaper from "@assets/LitePaper.pdf";
import Cancel from "@assets/icons/cancel.svg";
import Copyright from "@assets/home/dark_copyright.svg";
import MobileClouds from "@assets/home/mobile_clouds.svg";
import OutlineButton from "@components/shared/OutlineButton";
import LogoIcon from "@assets/icons/LogoIcon";

const navigations = [
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
  { text: "Launch App", link: "https://app.ardmoney.com/" },
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
  const transitionProperties = open ? "left-0" : "-left-250";

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
                {navigations.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target={"_blank"}
                    className="flex items-center"
                  >
                    <span className="text-md">{item.text}</span>
                  </a>
                ))}
                <AdditionalDropdownMenu />
              </div>
            </div>
            <a
              href="https://app.ardmoney.com/"
              target={"_blank"}
              className="hidden md:block"
            >
              <OutlineButton style="px-xl">Launch App</OutlineButton>
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
      {open && (
        <div
          className={`sidebar slide fixed top-0 bottom-0 p-5 w-full bg-primary z-50 h-screen overscroll-none duration-500 transition-transform ${transitionProperties}`}
        >
          <div className="relative flex flex-col h-full">
            <button
              className="flex w-full justify-end py-sm"
              onClick={() => openSidebar()}
            >
              <img src={Cancel} alt="" />
            </button>
            <div className="flex flex-col gap-base mt-2xl p-base">
              {mobileNavigations.map((item, index) => (
                <a
                  href={item.link}
                  key={index}
                  target={"_blank"}
                  className="flex flex-col text-xl font-normal"
                >
                  <span>{item.text}</span>
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
              <span>2023 Diverse Solution LLC. All rights reserved</span>
            </div>
          </div>
          <img
            src={MobileClouds}
            alt=""
            className="absolute w-full left-0 bottom-0 z-50"
          />
        </div>
      )}
    </div>
  );
}

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useTranslation } from "react-i18next";

const AdditionalDropdownMenu = () => {
  const { i18n } = useTranslation();

  console.log(i18n);

  function handleChangeLanguage(lan: string) {
    i18n.changeLanguage(lan);
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="w-8 h-8 rounded-full">
          <div className="flex justify-center items-center space-x-0.5  h-full">
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
          </div>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="DropdownMenuContent z-50"
          sideOffset={5}
        >
          <DropdownMenu.Item className="DropdownMenuItem hover:bg-red-100">
            <div className="flex justify-center w-full space-x-1">
              <div
                onClick={() => handleChangeLanguage("mn")}
                className={`${
                  i18n.language === "mn" && "underline"
                } hover:underline cursor-pointer`}
              >
                mn
              </div>
              <div>/</div>
              <div
                onClick={() => handleChangeLanguage("en")}
                className={`${
                  i18n.language === "en" && "underline"
                } hover:underline cursor-pointer`}
              >
                en
              </div>
            </div>
          </DropdownMenu.Item>
          <DropdownMenu.Arrow className="fill-white" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
