import CeroLogo from "@assets/cero_logo.png";

const navigations = [
  { text: "BscScan" },
  { text: "PolygonScan" },
  { text: "Litepaper" },
];

export default function Navbar() {
  return (
    <div className='flex justify-center bg-black h-[68px] w-full'>
      <div className='flex max-w-6xl w-full'>
        <div className='flex items-center justify-between w-full'>
          <div className='flex items-center gap-6'>
            <img
              src={CeroLogo}
              width={"91.14px"}
              height={"24px"}
              alt='image'
              className='cursor-pointer'
            />
            <div className='hidden md:flex items-center text-white/60 text-md gap-5 cursor-pointer'>
              {navigations.map((item) => (
                <a href={"/"}>
                  <span className=''>{item.text}</span>
                </a>
              ))}
            </div>
          </div>
          <button className='bg-[#8362FD] text-white px-4 py-[10px] rounded-lg text-md'>
            Launch App
          </button>
        </div>
      </div>
    </div>
  );
}
