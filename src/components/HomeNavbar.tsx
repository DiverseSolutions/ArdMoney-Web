import {useState} from 'react'
import Logo from "@assets/icons/logo.svg";
import Menu from "@assets/home/menu.png";
import Litepaper from '@assets/LitePaper.pdf'
import Cancel from "@assets/icons/cancel.svg";
import Copyright from "@assets/home/dark_copyright.svg";
import Discord from "@assets/social/dark_discord.svg";
import Facebook from "@assets/social/dark_facebook.svg";
import Medium from "@assets/social/dark_medium.svg";
import Instagram from "@assets/social/dark_instagram.svg";
import MobileClouds from "@assets/home/mobile_clouds.svg";

const navigations = [
  { text: "BscScan", link: "https://bscscan.com/token/0xe849188f76c0da93b5ed310a1f72127914b3a7b9" },
  { text: "PolygonScan", link: "https://polygonscan.com/address/0x87ee9B1D25d7fd609CAadBa5f8c14F4e219650bD" },
  { text: "Litepaper", link: Litepaper},
];

const mobileNavigations = [
  { text: "Launch App", link: "https://app.ardmoney.com/" },
  { text: "BscScan", link: "https://bscscan.com/token/0xe849188f76c0da93b5ed310a1f72127914b3a7b9" },
  { text: "PolygonScan", link: "https://polygonscan.com/address/0x87ee9B1D25d7fd609CAadBa5f8c14F4e219650bD" },
  { text: "Litepaper", link: Litepaper},
];

export default function HomeNavBar() {
  const [open, setOpen] = useState(false)
  const transitionProperties = open ? "left-0": "-left-250";

  const openSidebar = () => {
    setOpen(!open)
  }

  return (
    <div className={`relative flex slide-in`}>
      <div className='flex sticky justify-center bg-black h-[68px] w-full z-40'>
        <div className='flex max-w-6xl w-full'>
          <div className='flex items-center justify-between w-full px-3 py-4 sm:px-6 sm:py-[22px] lg:px-0 lg:py-0'>
            <div className='flex items-center gap-6'>
              <a href="/">
                <img
                  src={Logo}
                  alt='image'
                  className='h-12 cursor-pointer'
                />
              </a>
              <div className='hidden md:flex items-center text-white/60 text-md gap-5 cursor-pointer pt-1'>
                {navigations.map((item, index) => (
                  <a key={index} href={item.link} target={"_blank"}  className='flex items-center' >
                    <span className='text-md'>{item.text}</span>
                  </a>
                ))}
              </div>
            </div>
            <a href="https://app.ardmoney.com/" target={"_blank"} className='hidden md:flex bg-[#8362FD] text-white px-4 py-[10px] rounded-lg text-md'>
              Launch App
            </a>
            <button onClick={() => openSidebar()} className="md:hidden">
              <img
                src={Menu}
                width={"24px"}
                height={"24px"}
                alt='Menu'
                className='cursor-pointer'
              />
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div
          className={`sidebar slide fixed top-0 bottom-0 p-5 w-full bg-primary z-50 h-screen overscroll-none duration-500 transition-transform ${transitionProperties}`}
        >
          <div className='relative flex flex-col h-full'>
            <button className='flex w-full justify-end py-sm' onClick={() => openSidebar()}> 
              <img src={Cancel} alt="" />
            </button>
            <div className='flex flex-col gap-base mt-2xl p-base'>
              {mobileNavigations.map((item, index) => (
                <a href={item.link} target={"_blank"} className='flex flex-col text-xl font-normal'>
                  <span>{item.text}</span>
                </a>
              ))}
            </div>
            <div className='flex sm:justify-start gap-lg p-base '>
              <a href="https://medium.com/@ardmoney/monthly-developer-report-3-5c0e4362dae" target={"_blank"} className="w-6 h-6">
                <img
                  src={Medium}
                  alt='image'
                  className="object-cover"
                />
              </a>
              <a href="https://www.instagram.com/ard.money/?next=%2F" target={"_blank"} className="w-6 h-6">
                <img
                  src={Instagram}
                  className="object-cover"
                  alt='image'
                />
              </a>
              <a href="https://www.facebook.com/search/top?q=ardmoney" target={"_blank"} className="w-6 h-6">
                <img
                  src={Facebook}
                  className="object-cover"
                  alt='image'
                />
              </a>
              <a href="https://discord.com/invite/xNWX76eg" target={"_blank"} className="w-6 h-6">
                <img
                  src={Discord}
                  className="object-cover"
                  alt='image'
                />
              </a>
            </div>
            <div className='flex gap-sm p-base w-full'>
              <img
                src={Copyright}
                className=""
                alt='image'
              />
              <span>2023 Diverse Solution LLC. All rights reserved</span>
            </div>
            
          </div>
          <img src={MobileClouds} alt="" className='absolute w-full left-0 bottom-0 z-50' />
        </div>
      )}
      
      </div>
  );
}
