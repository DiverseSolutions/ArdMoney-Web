import Copyright from "@assets/copyright.png";
import Discord from "@assets/social/discord.png";
import Facebook from "@assets/social/facebook.png";
import Medium from "@assets/social/medium.png";
import Instagram from "@assets/social/instagram.png";

export default function Footer() {
  return (
    <div className='flex flex-col sm:flex-row sm:justify-center p-lg sm:h-28 w-full'>
      <div className='flex flex-col sm:max-w-6xl justify-between sm:items-center w-full gap-6 sm:gap-0'>
        <div className='flex flex-col sm:flex-row justify-between w-full gap-6 sm:gap-0'>
          <div className='flex flex-col sm:flex-row gap-4 lg:gap-lg sm:items-center w-full text-white text-sm sm:text-xs lg:text-sm'>
            <span>DEX</span>
            <span>Testnet</span>
            <span>What is ARDM?</span>
            <span>Apply for Listing</span>
            <span>Buy Cero</span>
            <span>Forum</span>
            <span>Snapshot</span>
          </div>
          <div className='flex whitespace-nowrap gap-2 text-white text-sm sm:text-xs lg:text-sm'>
            <span className="text-white/60">For inquiries: </span>
            <span className='underline cursor-pointer'>
              info@cero.exchange
            </span>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row justify-between w-full gap-6'>
          <div className='flex items-center gap-2'>
            <img
              src={Copyright}
              width={"16px"}
              height={"16px"}
              alt='image'
            />
            <span className='text-sm sm:text-xs lg:text-sm text-white/60'>
              2023 Diverse Solution LLC. All rights reserved
            </span>
          </div>
          <div className='flex sm:justify-end gap-lg '>
            <button className="w-6 h-6">
              <img
                src={Medium}
                alt='image'
                className="object-cover"
              />
            </button>
            <button className="w-6 h-6">
              <img
                src={Instagram}
                className="object-cover"
                alt='image'
              />
            </button>
            <button className="w-6 h-6">
              <img
                src={Facebook}
                className="object-cover"
                alt='image'
              />
            </button>
            <button className="w-6 h-6">
              <img
                src={Discord}
                className="object-cover"
                alt='image'
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
