import { RootState } from "@/redux/store";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { useSelector } from "react-redux";
import Button from "../shared/Button";
import ConnectToSupportedNetworkButton from "../web3/ConnectToSupportedNetworkButton";
import ConnectWalletButton from "../web3/ConnectWalletButton";

export default function UnStakeTab() {
  const web3Slice = useSelector((state: RootState) => state.web3);
  const { isUnknown } = useSelector((state: RootState) => state.network);

  return (
    <div className="mt-7">
      <div className="flex justify-between text-light/60 text-sm w-full mb-base">
        <span>sARDM Unstake</span>
        <div>
          <span>Balance:</span>
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

      <div className="flex justify-between items-center w-full mb-2xl">
        <span className="text-light/60 text-xs sm:text-sm">
          1 xCero = 1.000000 Cero
        </span>
        <ToggleGroup.Root
          className="ToggleGroup"
          type="single"
          aria-label="Text alignment"
          //   onValueChange={(e) => {
          //       console.log(!e)
          //     console.log(parseFloat(e));
          //   }}
        >
          <ToggleGroup.Item
            className="ToggleGroupItem"
            value={"0.25"}
            aria-label="Left aligned"
          >
            1/4
          </ToggleGroup.Item>
          <ToggleGroup.Item
            className="ToggleGroupItem"
            value={"0.5"}
            aria-label="Center aligned"
          >
            1/2
          </ToggleGroup.Item>
          <ToggleGroup.Item
            className="ToggleGroupItem"
            value={"1"}
            aria-label="Right aligned"
          >
            MAX
          </ToggleGroup.Item>
        </ToggleGroup.Root>
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

      <div className="flex flex-col text-[#EB8100] text-sm mb-lg space-y-2">
        <div className="flex gap-base items-center">
          <div className="flex self-start mt-1 w-2 h-2 flex-shrink-0 bg-[#EB8100] rounded-full whitespace-nowrap"></div>
          <span>
            Please be aware that this action is executed via a blockchain smart
            contract and is recorded permanently. Therefore, it cannot be undone
          </span>
        </div>
      </div>
      <div className="h-auto">
        {!web3Slice.isConnected && <ConnectWalletButton style="py-sm" />}
        {web3Slice.isConnected && isUnknown ? (
          <ConnectToSupportedNetworkButton style="w-full py-sm" />
        ) : (
          <Button children={"Unstake"} />
        )}
      </div>
    </div>
  );
}
