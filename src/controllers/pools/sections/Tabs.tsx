import React from "react";
import { useTranslation } from "react-i18next";

const tabs = [
  { text: "tabAll", id: "allpool" },
  { text: "tabUser", id: "mypool" },
];

export default function Tabs({
  clickHandler,
  tabState,
}: {
  clickHandler: (id: string) => any;
  tabState: string;
}) {
  const { t } = useTranslation("pools");

  return (
    <div className="flex gap-sm text-white w-full lg:w-1/3">
      {tabs.map((item, index) => (
        <button
          onClick={() => clickHandler(item.id)}
          key={index}
          className={`${
            item.id === tabState ? "bg-primary" : "bg-primary/10"
          }  py-sm w-1/2 text-center rounded-md`}
        >
          <span>{t(item.text)}</span>
        </button>
      ))}
    </div>
  );
}
