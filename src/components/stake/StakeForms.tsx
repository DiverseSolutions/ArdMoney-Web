import * as Tabs from "@radix-ui/react-tabs";
import { useState, useEffect } from "react";
import Button from "../shared/Button";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

export default function StakingForms() {
  return (
    <div className="flex flex-col p-lg w-full border border-primary rounded-3xs">
      <Tabs.Root className="TabsRoot " defaultValue="stakeTab">
        <Tabs.List className="TabsList">
          <Tabs.Trigger className="TabsTrigger" value={"stakeTab"}>
            Stake
          </Tabs.Trigger>
          <Tabs.Trigger className="TabsTrigger" value={"unstakeTab"}>
            Unstake
          </Tabs.Trigger>
        </Tabs.List>
        <TabContentTemplate tabValue={"stakeTab"} />
        <TabContentTemplate tabValue={"unstakeTab"} />
      </Tabs.Root>
    </div>
  );
}

type TemplateProp = {
  tabValue: string;
  onSubmit?: () => void;
};

function TabContentTemplate({ tabValue, onSubmit }: TemplateProp) {
  const isStake = tabValue === "stakeTab";
  const content = generateContent(isStake);

  return (
    <Tabs.Content className="mt-7 " value={tabValue}>
      <div className="flex justify-between text-light/60 text-sm w-full mb-base">
        <span>Cero {content.titleName}</span>
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
        {/* <div className="flex gap-xs">
          <button className="flex items-center px-[12px] py-xs text-2xs border border-light/10 rounded-3xl">
            1/4
          </button>
          <button className="flex items-center px-[12px] py-xs text-2xs border border-light/10 rounded-3xl">
            1/2
          </button>
          <button className="flex items-center px-[12px] py-xs text-2xs bg-primary text-black rounded-3xl">
            MAX
          </button>
        </div> */}
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
        {content.warnings.map((warning, index) => (
          <div key={index} className="flex gap-base items-center">
            <div className="flex self-start mt-1 w-2 h-2 flex-shrink-0 bg-[#EB8100] rounded-full whitespace-nowrap"></div>
            <span>{warning}</span>
          </div>
        ))}
      </div>
      <Button children={content.button} />
    </Tabs.Content>
  );
}

function generateContent(isStake: boolean) {
  return {
    titleName: isStake ? "Stake" : "Unstake",
    button: isStake ? "Stake" : "Unstake",
    warnings: isStake
      ? [
          "Please verify the token amount you entered!",
          " Please note that this action is executed by a blockchain smart contract and the record is created, so you cannot undo it!",
          " Please note that if staking is released before the specified time, a fee of 0.6% of your supplied tokens + bonus amount will be charged!",
        ]
      : [
          "You can only unstake the same amount of ARDM that you originally staked.",
          "The interest earned from the time of your initial staking will be airdropped to your staking address by 15th February.",
          "There is no penalty of 0.6% for unstaking.",
          "Please verify that the token amount you entered is accurate",
          "Please be aware that this action is executed via a blockchain smart contract and is recorded permanently. Therefore, it cannot be undone",
          "Please be aware that if staking is released before the specified time, a fee of 0.6% of your staked tokens plus any bonus amount will be charged",
        ],
  };
}
