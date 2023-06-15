import Cloud1 from "@assets/images/staking/Cloud1.svg";
import Cloud2 from "@assets/images/staking/Cloud2.svg";
import Cloud3 from "@assets/images/staking/Cloud3.svg";
import Cloud4 from "@assets/images/staking/Cloud4.svg";

export default function Info() {
  return (
    <div className="relative flex flex-col staking-header-gradient p-lg w-full border border-primary rounded-3xs">
      <div className="flex flex-col w-full z-10 lg:w-7/12 text-light/60 text-sm gap-lg">
        <div className="flex gap-base">
          <div className="i-ic-round-warning-amber icon-size-5 flex-shrink-0" />
          <span>
            By staking ARDM tokens, they will be converted into an equal amount
            of sARDM tokens and placed in your wallet.
          </span>
        </div>
        <div className="flex gap-base">
          <div className="i-ic-round-warning-amber icon-size-5 flex-shrink-0" />
          <span>
            Each ARDM tokens are added to the staking pool, the value of sARDM
            will increase.
          </span>
        </div>
        <div className="flex gap-base">
          <div className="i-ic-round-warning-amber icon-size-5 flex-shrink-0" />
          <span>
            When you unstake sARDM tokens from staking, you will be awarded ARDM
            + (interest return) previously supplied.
          </span>
        </div>
        <div className="flex gap-base">
          <div className="i-ic-round-warning-amber icon-size-5 flex-shrink-0" />
          <span>
            Your interest rate depends on the duration of your staking.
          </span>
        </div>
      </div>
      <div className="hidden lg:flex ">
        <img
          src={Cloud1}
          alt=""
          className="absolute rounded-br-3xs right-0 bottom-0"
        />
        <img
          src={Cloud2}
          alt=""
          className="absolute rounded-br-3xs right-0 bottom-0"
        />
        <img
          src={Cloud3}
          alt=""
          className="absolute rounded-br-3xs right-0 bottom-0"
        />
        <img
          src={Cloud4}
          alt=""
          className="absolute rounded-br-3xs right-0 bottom-0"
        />
      </div>
    </div>
  );
}
