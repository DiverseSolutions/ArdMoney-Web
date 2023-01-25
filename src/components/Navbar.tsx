import CeroLogo from "@assets/cero_logo.png";
import Menu from "@assets/menu.png";
import CeroMobileLogo from "@assets/cero_mobile_logo.png";

const navigations = [
  { text: "BscScan" },
  { text: "PolygonScan" },
  { text: "Litepaper" },
];

export default function Navbar() {
  return (
    <div className='flex sticky justify-center bg-black h-[68px] w-full'>
      <div className='flex max-w-6xl w-full'>
        <div className='flex items-center justify-between w-full px-3 py-4 sm:px-6 sm:py-[22px] lg:px-0 lg:py-0'>
          <div className='flex items-center gap-6'>
            <img
              src={CeroLogo}
              width={"91.14px"}
              height={"24px"}
              alt='image'
              className='cursor-pointer'
            />
            <div className='hidden sm:flex items-center text-white/60 text-md gap-5 cursor-pointer'>
              {navigations.map((item, index) => (
                <a key={index} href={"/"}>
                  <span className='text-md'>{item.text}</span>
                </a>
              ))}
            </div>
          </div>
          <button className='hidden sm:flex bg-[#8362FD] text-white px-4 py-[10px] rounded-lg text-md'>
            Launch App
          </button>
          <button className="sm:hidden">
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
  );
}
