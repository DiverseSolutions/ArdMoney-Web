export type TabProp = {
  tabs: Tab[];
  contents: TabContentType[];
};

type Tab = {
  value: string;
  text: string;
};

export type TabContentType = {
  tabValue: string;
  data: any;
};
