import { useState } from "react";
import ArdmWhite from "@assets/home/logo_white.png";
import Menu from "@assets/home/menu.png";
import Cancel from "@assets/icons/cancel.svg";
import Copyright from "@assets/home/dark_copyright.svg";
import Discord from "@assets/social/dark_discord.svg";
import Facebook from "@assets/social/dark_facebook.svg";
import Medium from "@assets/social/dark_medium.svg";
import Instagram from "@assets/social/dark_instagram.svg";
import MobileClouds from "@assets/home/mobile_clouds.svg";

import TransactionsIcon from "@assets/icons/TransactionsIcon";
import WalletIcon from "@assets/icons/WalletIcon";
import DropdownIcon from "@assets/icons/DropdownIcon";

import Button from "@components/shared/Button";

const DesktopLinks = [
  { text: "Swap", link: "/swap" },
  { text: "Pool", link: "/pool" },
  { text: "Staking", link: "/staking" },
  { text: "Governance", link: "/governance" },
  { text: "Analytics", link: "/analytics" },
];

const MobileLinks = [
  { text: "Swap", link: "/swap" },
  { text: "Pool", link: "/pool" },
  { text: "Staking", link: "/staking" },
  { text: "Governance", link: "/governance" },
  { text: "Analytics", link: "/analytics" },
];

export default function AppNavbar() {
  const [open, setOpen] = useState(false);
  const transitionProperties = open ? "left-0" : "-left-250";

  const openSidebar = () => {
    setOpen(!open);
  };

  return (
    <div className={`relative flex slide-in`}>
      <div className="flex sticky justify-center bg-black h-[68px] w-full z-40">
        <div className="flex w-full md:px-20">
          <div className="flex items-center justify-between w-full px-3 py-4 sm:px-6 sm:py-[22px] lg:px-0 lg:py-0">
            <div className="flex items-center gap-6">
              <a href="/">
                <img
                  src={ArdmWhite}
                  alt="image"
                  className="h-12 cursor-pointer"
                />
              </a>
              <div className="hidden md:flex items-center text-white/60 text-md gap-5 cursor-pointer pt-1">
                {DesktopLinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target={"_blank"}
                    className="flex items-center"
                  >
                    <span className="text-md">{item.text}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="hidden md:flex justify-around gap-7">
              <Button isIcon>
                <TransactionsIcon style="text-white dark:text-white w-auto h-7 md:h-6" />
              </Button>

              <Button isIcon>
                <WalletIcon style="text-white dark:text-white w-auto h-7 md:h-6" />
              </Button>

              <Button styles="text-sm gap-2 items-center">
                <p>Binance Smart Chain</p>
                <DropdownIcon style="h-7 md:h-6" />
              </Button>
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
              {MobileLinks.map((item) => (
                <a
                  href={item.link}
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
                <img
                  src={Medium}
                  alt="image"
                  className="object-cover"
                />
              </a>
              <a
                href="https://www.instagram.com/ard.money/?next=%2F"
                target={"_blank"}
                className="w-6 h-6"
              >
                <img
                  src={Instagram}
                  className="object-cover"
                  alt="image"
                />
              </a>
              <a
                href="https://www.facebook.com/search/top?q=ardmoney"
                target={"_blank"}
                className="w-6 h-6"
              >
                <img
                  src={Facebook}
                  className="object-cover"
                  alt="image"
                />
              </a>
              <a
                href="https://discord.com/invite/xNWX76eg"
                target={"_blank"}
                className="w-6 h-6"
              >
                <img
                  src={Discord}
                  className="object-cover"
                  alt="image"
                />
              </a>
            </div>
            <div className="flex gap-sm p-base w-full">
              <img
                src={Copyright}
                className=""
                alt="image"
              />
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
