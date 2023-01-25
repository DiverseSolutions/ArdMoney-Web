import Copyright from "@assets/copyright.png";
import Discord from "@assets/social/discord.png";
import Facebook from "@assets/social/facebook.png";
import Medium from "@assets/social/medium.png";
import Instagram from "@assets/social/instagram.png";

export default function Footer() {
  return (
    <div className='flex justify-center p-12 h-40 w-full'>
      <div className='flex max-w-6xl justify-between items-center w-full'>
        <div className='flex flex-col gap-6 w-full'>
          <div className='flex gap-6 items-center w-full text-white'>
            <span>DEX</span>
            <span>Testnet</span>
            <span>What is ARDM?</span>
            <span>Apply for Listing</span>
            <span>Buy Cero</span>
            <span>Forum</span>
            <span>Snapshot</span>
          </div>
          <div className='flex items-center gap-2'>
            <img
              src={Copyright}
              width={"16px"}
              height={"16px"}
              alt='image'
            />
            <span className='text-sm text-white/60'>
              2023 Diverse Solution LLC. All rights reserved
            </span>
          </div>
        </div>
        <div className='flex flex-col gap-6'>
          <div className='flex whitespace-nowrap gap-2 text-white'>
            <span className="text-white/60">For inquiries: </span>
            <span className='underline cursor-pointer'>
              info@cero.exchange
            </span>{" "}
          </div>
          <div className='flex justify-end gap-4 '>
            <button>
              <img
                src={Medium}
                width={"24px"}
                height={"24px"}
                alt='image'
              />
            </button>
            <button>
              <img
                src={Instagram}
                width={"24px"}
                height={"24px"}
                alt='image'
              />
            </button>
            <button>
              <img
                src={Facebook}
                width={"24px"}
                height={"24px"}
                alt='image'
              />
            </button>
            <button>
              <img
                src={Discord}
                width={"24px"}
                height={"24px"}
                alt='image'
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
