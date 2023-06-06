import Cloud1 from "@assets/images/staking/Cloud1.svg";
import Cloud2 from "@assets/images/staking/Cloud2.svg";
import Cloud3 from "@assets/images/staking/Cloud3.svg";
import Cloud4 from "@assets/images/staking/Cloud4.svg";
import Staking_head1 from "@assets/images/staking/Staking_head1.svg";
import Staking_head2 from "@assets/images/staking/Staking_head2.svg";
import Staking_head3 from "@assets/images/staking/Staking_head3.svg";

export default function Info() {
  return (
    <div className="relative flex flex-col staking-header-gradient p-lg w-full border border-primary rounded-lg mb-2xl">
      <div className="flex flex-col w-full z-10 lg:w-5/12 text-light/60 text-sm gap-lg">
        <div className="flex gap-base">
          <div className="i-ic-round-warning-amber icon-size-5 flex-shrink-0" />
          <span>
            By staking CERO tokens, they will be converted into an equal amount
            of xCERO tokens and placed in your wallet.
          </span>
        </div>
        <div className="flex gap-base">
          <div className="i-ic-round-warning-amber icon-size-5 flex-shrink-0" />
          <span>
            Each CERO tokens are added to the staking pool, the value of xARDM
            will increase.
          </span>
        </div>
        <div className="flex gap-base">
          <div className="i-ic-round-warning-amber icon-size-5 flex-shrink-0" />
          <span>
            When you unstake xCERO tokens from staking, you will be awarded CERO
            + (interest return) previously supplied.
          </span>
        </div>
        <div className="flex gap-base">
          <div className="i-ic-round-warning-amber icon-size-5 flex-shrink-0" />
          <span>
            Your interest rate depends on the duration of your staking.
          </span>
        </div>
        <div className="flex gap-base">
          <div className="i-ic-round-warning-amber icon-size-5 flex-shrink-0" />
          <span>
            A certain percentage of the CERO DeFi project's reward resources and
            transaction fees on the DEX will be invested in the Cero staking
            smart contract.
          </span>
        </div>
      </div>
      <div className="hidden lg:flex">
        <img
          src={Staking_head1}
          alt=""
          className="absolute right-1/4 bottom-0"
        />
        <img src={Staking_head2} alt="" className="absolute right-0 top-0 " />
        <img
          src={Staking_head3}
          alt=""
          className="absolute right-0 bottom-0 z-20"
        />
        <img src={Cloud1} alt="" className="absolute right-0 bottom-0" />
        <img src={Cloud2} alt="" className="absolute right-0 bottom-0" />
        <img src={Cloud3} alt="" className="absolute right-0 bottom-0" />
        <img src={Cloud4} alt="" className="absolute right-0 bottom-0" />
      </div>
    </div>
  );
}
