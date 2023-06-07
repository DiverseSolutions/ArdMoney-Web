import * as Tabs from "@radix-ui/react-tabs";
import Table from "@/components/Table";
import { useState, useEffect } from "react";
import { TabContentType } from "types/TabTypes";

export default function StakingTabs() {
  const [contents, setContents] = useState<TabContentType[]>([]);
  useEffect(() => {
    setContents(dummyTabsContents);
  }, []);

  return (
    <Tabs.Root className="TabsRoot " defaultValue="tab1">
      <Tabs.List className="TabsList">
        {tabs.map((tab) => (
          <Tabs.Trigger
            key={tab.value}
            className="TabsTrigger"
            value={tab.value}
          >
            {tab.text}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {contents.map((content) => (
        <Tabs.Content
          key={content.tabValue}
          className="mt-7 "
          value={content.tabValue}
        >
          <Table header={content.data.header} rows={content.data.rows} />
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
}

const tabs = [
  {
    value: "tab1",
    text: "Active",
  },
  {
    value: "tab2",
    text: "Closed",
  },
];

const dummyTabsContents = [
  {
    tabValue: "tab1",
    data: {
      header: ["Name", "TVL", "ARP", "State"],
      rows: [
        {
          texts: ["xARDM", "101,204,195", "7.9%", "Active"],
          link: "/stake/xARDM",
        },
        {
          texts: ["xARDM", "101,204,195", "7.9%", "Active"],
          link: "/stake/xARDM",
        },
        {
          texts: ["xARDM", "101,204,195", "7.9%", "Active"],
          link: "/stake/xARDM",
        },
      ],
    },
  },
  {
    tabValue: "tab2",
    data: {
      header: ["Name", "TVL", "ARP", "State"],
      rows: [
        {
          texts: ["xARDM", "101,204,195", "7.9%", "Closed"],
          link: "/stake/xARDM",
        },
      ],
    },
  },
];
