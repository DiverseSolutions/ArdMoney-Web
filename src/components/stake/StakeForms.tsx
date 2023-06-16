import * as Tabs from "@radix-ui/react-tabs";
import { useState } from "react";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  return (
    <div className="flex flex-col p-lg h-full w-full border border-primary rounded-3xs">
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
            {t("stake:stake")}
          </Tabs.Trigger>
          <Tabs.Trigger className="TabsTrigger" value={"unstake"}>
            {t("stake:unstake")}
          </Tabs.Trigger>
        </Tabs.List>

        {children}
      </Tabs.Root>
    </div>
  );
}
