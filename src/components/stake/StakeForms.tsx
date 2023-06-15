import * as Tabs from "@radix-ui/react-tabs";
import { useState } from "react";

type TabState = "unstake" | "stake";

export default function StakingForms({
  children,
  tab,
  setTab,
}: {
  children?: React.ReactNode;
  tab: TabState;
  setTab: (val: TabState) => void;
}) {
  return (
    <div className="flex flex-col p-lg w-full border border-primary rounded-3xs">
      <Tabs.Root
        className="TabsRoot "
        value={tab}
        onValueChange={(val) => {
          if (val === "unstake" || val === "stake") {
            setTab(val);
          }
        }}
      >
        <Tabs.List className="TabsList">
          <Tabs.Trigger className="TabsTrigger" value={"stake"}>
            Stake
          </Tabs.Trigger>
          <Tabs.Trigger className="TabsTrigger" value={"unstake"}>
            Unstake
          </Tabs.Trigger>
        </Tabs.List>

        {children}
      </Tabs.Root>
    </div>
  );
}
