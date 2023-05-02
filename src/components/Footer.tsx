const footers = [
  { text: "DEX", link: "https://app.ardmoney.com/" },
  { text: "Testnet", link: "https://faucet.dsolutions.mn/" },
  { text: "What is ARDM?", link: "https://www.youtube.com/watch?v=Wfc6AJVA8O4"},
  { text: "Apply for Listing", link: "mailto:info@ardmoney.com"},
  { text: "Buy ARDM", link: "https://www.idax.exchange/mn_MN/newTrade/ARDM_MONT"},
  { text: "Forum", link: "https://t.me/ArdMoney"},
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
            <span className="text-light-secondary">For inquiries: </span>
            <a href="mailto:info@ardmoney.com" className='underline cursor-pointer'>
            info@ardmoney.com
            </a>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row justify-between w-full gap-6'>
          <div className='flex items-center gap-2 text-light-secondary'>
            <div className="i-ic-round-copyright icon-size-4 relative bottom-0.5" />
            <span className='sm:text-xs lg:text-sm'>
              2023 Diverse Solution LLC. All rights reserved
            </span>
          </div>
          <div className='flex sm:justify-end items-center gap-lg text-white'>
            <a href="https://medium.com/@ardmoney/monthly-developer-report-3-5c0e4362dae" target={"_blank"}>
              <div className="i-fa-brands-medium icon-size-6" />
            </a>
            <a href="https://www.instagram.com/ard.money/?next=%2F" target={"_blank"}>
              <div className="i-fa-brands-instagram icon-size-6" />
            </a>
            <a href="https://www.facebook.com/search/top?q=ardmoney" target={"_blank"}>
              <div className="i-fa-brands-facebook icon-size-6" />
            </a>
            <a href="https://discord.com/invite/xNWX76eg" target={"_blank"}>
              <div className="i-fa-brands-discord icon-size-7" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
