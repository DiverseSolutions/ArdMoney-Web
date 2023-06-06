import Cero_staking1 from "@assets/images/staking/Cero_staking1.svg";
import Cero_staking2 from "@assets/images/staking/Cero_staking2.svg";
import Cero_staking3 from "@assets/images/staking/Cero_staking3.svg";
import Background1 from "@assets/images/swap/background1.svg";
import Background2 from "@assets/images/swap/background2.svg";

import PageContainer from "@/components/layouts/PageContainer";
import Info from "@components/stake/Info";
import { useParams } from "react-router-dom";

export default function SingleStake() {
  return (
    <>
      <PageContainer>
        <span className="text-2xl lg:text-4xl text-light font-extrabold lg:mt-xl mb-sm lg:mb-lg">
          singleStake
        </span>
        <Info />

        <div className="flex flex-col lg:flex-row gap-lg text-light w-full h-full">
          <div className="relative flex flex-col p-lg w-full lg:w-1/2 rounded-lg border border-[#ABFC86] h-full">
            <span className="text-xl mb-lg font-extrabold">MY ASSETS</span>
            <span className="text-base mb-2xl">Balance</span>
            <div className="flex items-center gap-xs mb-sm p-sm border border-primary/10 rounded-lg">
              <span>100,000 </span>
              <span className="flex items-end text-xs text-light/60">CERO</span>
            </div>
            <div className="flex items-center gap-xs mb-2xl p-sm border border-primary/10 rounded-lg">
              <span>0 </span>
              <span className="flex items-end text-xs text-light/60">
                xCERO
              </span>
            </div>
            <span className="text-base mb-2xl">Amount of Stake</span>
            <div className="flex items-center gap-xs mb-lg p-sm border border-primary/10 rounded-lg">
              <span>0 </span>
              <span className="flex items-end text-xs text-light/60">
                xCERO
              </span>
            </div>
            <span className="mb-lg text-base">Penalty for early release</span>
            <div className="flex flex-col text-sm text-light/60 border border-primary/10 rounded-lg sm:px-3 py-2 gap-xs">
              <div className="flex justify-between w-full border-b border-primary/10 p-1">
                <span>Penalty rate:</span>
                <div className="flex items-center gap-sm text-light">
                  <span>5.0%</span>
                  <div className="i-ic-round-warning-amber icon-size-5" />
                </div>
              </div>
              <div className="flex justify-between w-full border-b border-primary/10 p-1">
                <span>Penalty period:</span>
                <div className="flex items-center gap-sm text-light">
                  <span>within 1hrs</span>
                  <div className="i-ic-round-warning-amber icon-size-5" />
                </div>
              </div>
              <div className="flex justify-between w-full border-b border-primary/10 p-1">
                <span>Date of staking:</span>
                <div className="flex items-center gap-sm text-light">
                  <span>2023.01.25</span>
                  <div className="i-ic-round-warning-amber icon-size-5" />
                </div>
              </div>
              <div className="flex justify-between w-full p-1">
                <span>Penalty expiry date:</span>
                <div className="flex items-center gap-sm text-light">
                  <span>2023.01.26</span>
                  <div className="i-ic-round-warning-amber icon-size-5" />
                </div>
              </div>
            </div>
            <div className="hidden lg:flex">
              <img
                src={Cero_staking1}
                alt="Cero_staking1"
                className="absolute left-0 bottom-0"
              />
              <img
                src={Cero_staking2}
                alt="Cero_staking2"
                className="absolute right-0 bottom-0"
              />
              <img
                src={Cero_staking3}
                alt="Cero_staking3"
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/5"
              />
            </div>
          </div>

          <div className="flex flex-col gap-lg w-full lg:w-1/2">
            <div className="flex flex-col border border-primary rounded-lg p-lg gap-lg">
              <div className="flex w-full justify-between text-xl">
                <span className="font-extrabold">Total CERO</span>
                <span>22,311</span>
              </div>
              <div className="flex w-full justify-between text-xl">
                <span className="font-extrabold">Staking fee</span>
                <div className="flex items-center gap-xs">
                  <span>7,9%</span>
                  <span className="flex items-end text-xs text-light/60">
                    1 year APY
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col p-lg w-full border border-primary rounded-lg">
              <div className="flex w-full gap-sm mb-sm sm:mb-lg text-sm sm:text-md">
                <button className="flex py-[14px] px-[16px] w-1/2 bg-primary/10 justify-center border-b-4 border-primary rounded-tl-lg rounded-tr-lg">
                  <span>Stake</span>
                </button>
                <button className="flex py-[14px] px-[16px] w-1/2 bg-primary/10 justify-center rounded-tl-lg rounded-tr-lg">
                  <span>Unstake</span>
                </button>
              </div>

              <div className="flex justify-between text-light/60 text-sm w-full mb-base">
                <span>Cero Stake</span>
                <div>
                  <span>Balance: </span>
                  <span className="text-light">0.000</span>
                </div>
              </div>

              <div className="flex px-base py-sm border border-primary/10 rounded-lg mb-sm">
                <input
                  type="tel"
                  placeholder="0.000 CERO"
                  name=""
                  id=""
                  className="flex w-full bg-transparent outline-none md:text-xl appearance-none"
                />
              </div>

              <div className="flex justify-between w-full mb-2xl">
                <span className="text-light/60 text-xs sm:text-sm">
                  1 xCero = 1.000000 Cero
                </span>
                <div className="flex gap-xs">
                  <button className="flex items-center px-[12px] py-xs text-2xs border border-light/10 rounded-3xl">
                    1/4
                  </button>
                  <button className="flex items-center px-[12px] py-xs text-2xs border border-light/10 rounded-3xl">
                    1/2
                  </button>
                  <button className="flex items-center px-[12px] py-xs text-2xs bg-primary text-black rounded-3xl">
                    MAX
                  </button>
                </div>
              </div>

              <div className="flex px-base py-sm border border-primary/10 rounded-lg mb-sm">
                <input
                  type="tel"
                  placeholder="0.000 CERO"
                  name=""
                  id=""
                  className="flex w-full bg-transparent outline-none md:text-xl appearance-none"
                />
              </div>
              <span className="text-light/60 text-sm mb-lg">0.00</span>

              <div className="flex items-center justify-between w-full mb-xl gap-1">
                <div className="flex items-center text-sm gap-xs">
                  <div className="p-2 border border-primary/10 rounded-md cursor-pointer">
                    <div className="i-ic-round-warning-amber icon-size-5" />
                  </div>
                  <span className="text-xs sm:text-sm text-white">
                    1 USDT = 3,407.00 MONT
                  </span>
                  <span className="text-white/60">(₮1.00)</span>
                </div>
                <div className="p-2 border border-primary/10 rounded-md cursor-pointer">
                  <div className="i-ic-round-keyboard-arrow-down icon-size-5" />
                </div>
              </div>

              <div className="flex flex-col text-[#EB8100] text-sm mb-lg">
                <div className="flex gap-base items-center">
                  <div className="flex self-start mt-1 w-2 h-2 bg-[#EB8100] rounded-full whitespace-nowrap"></div>
                  <span>Please verify the token amount you entered!</span>
                </div>
                <div className="flex gap-base items-center">
                  <div className="flex self-start mt-1 p-1 w-2 h-2 bg-[#EB8100] rounded-full whitespace-nowrap"></div>
                  <span>
                    Please note that this action is executed by a blockchain
                    smart contract and the record is created, so you cannot undo
                    it!
                  </span>
                </div>
                <div className="flex gap-base items-center w-full">
                  <div className="flex self-start items-start mt-1 p-1 w-2 h-2 bg-[#EB8100] rounded-full whitespace-nowrap"></div>
                  <span>
                    Please note that if staking is released before the specified
                    time, a fee of 0.6% of your supplied tokens + bonus amount
                    will be charged!
                  </span>
                </div>
              </div>
              <button className="bg-primary py-[14px] px-base rounded-lg">
                <span className="text-white text-base">Stake</span>
              </button>
            </div>
          </div>
        </div>
      </PageContainer>
      <img src={Background1} alt="" className="absolute left-0 top-1/2" />
      <img src={Background2} alt="" className="absolute right-0 top-1/2" />
    </>
  );
}
