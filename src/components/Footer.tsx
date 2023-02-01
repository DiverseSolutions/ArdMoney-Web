import Copyright from "@assets/copyright.png";
import Discord from "@assets/social/discord.png";
import Facebook from "@assets/social/facebook.png";
import Medium from "@assets/social/medium.png";
import Instagram from "@assets/social/instagram.png";

const footers = [
  { text: "DEX", link: "https://app.ardmoney.com/" },
  { text: "Testnet", link: "https://faucet.dsolutions.mn/" },
  { text: "What is ARDM?", link: "https://www.youtube.com/watch?v=Wfc6AJVA8O4"},
  { text: "Apply for Listing", link: "https://www.youtube.com/watch?v=Wfc6AJVA8O4"},
  { text: "Buy Cero", link: "https://www.idax.exchange/mn_MN/newTrade/ARDM_MONT"},
  { text: "Forum", link: "https://forum.ardmoney.com/"},
  { text: "Snapshot", link: "https://snapshot.org/#/ardmoneydao.eth"}
];

export default function Footer() {
  return (
    <div className='flex flex-col sm:flex-row sm:justify-center p-lg lg:h-28 w-full'>
      <div className='flex flex-col sm:max-w-6xl justify-between sm:items-center w-full gap-6 lg:gap-0'>
        <div className='flex flex-col lg:flex-row justify-between w-full gap-6 lg:gap-0'>
          <div className='flex flex-col lg:flex-row gap-4 lg:gap-lg lg:items-center w-full text-white text-sm sm:text-xs lg:text-sm'>
            {
              footers.map((item, index) => (
                <a key={index} href={item.link} target={"_blank"} >
                  <span className='text-md'>{item.text}</span>
                </a>
              ))
            }

          </div>
          <div className='flex whitespace-nowrap gap-2 text-white text-sm sm:text-xs lg:text-sm'>
            <span className="text-white/60">For inquiries: </span>
            <a href="mailto:abc@example.com" className='underline cursor-pointer'>
              info@cero.exchange
            </a>
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
        </div>
      </div>
    </div>
  );
}
