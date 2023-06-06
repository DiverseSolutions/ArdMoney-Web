import Background1 from "@assets/images/swap/background1.svg";
import Background2 from "@assets/images/swap/background2.svg";
import * as Tabs from "@radix-ui/react-tabs";

import PageContainer from "@/components/layouts/PageContainer";
import Info from "../../components/stake/Info";

export default function Stake() {
  return (
    <>
      <PageContainer>
        <span className="text-2xl lg:text-4xl text-light font-extrabold lg:mt-xl mb-sm lg:mb-lg">
          Staking
        </span>
        <Info />

        <TabsDemo />
      </PageContainer>
      <img src={Background1} alt="" className="absolute left-0 top-1/2" />
      <img src={Background2} alt="" className="absolute right-0 top-1/2" />
    </>
  );
}

const TabsDemo = () => (
  <Tabs.Root className="TabsRoot" defaultValue="tab1">
    <Tabs.List className="TabsList" aria-label="Manage your account">
      <Tabs.Trigger className="TabsTrigger" value="tab1">
        Active
      </Tabs.Trigger>
      <Tabs.Trigger className="TabsTrigger" value="tab2">
        Closed
      </Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content className="TabsContentmt mt-10" value="tab1">
      <div>tab1</div>
    </Tabs.Content>
    <Tabs.Content className="TabsContentmt mt-10" value="tab2">
      <div>tab2</div>
    </Tabs.Content>
  </Tabs.Root>
);
