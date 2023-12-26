import { useState } from "react";
import Search from "@assets/pools/search.svg";
import AllPoolsTab from "./tabs/AllPoolsTab";
import MyPoolsTab from "./tabs/MyPoolsTab";
import Tabs from "./sections/Tabs";
import { useTranslation } from "react-i18next";

export default function PoolsController() {
  const { t } = useTranslation("pools");
  const [tabStateIndex, setTabStateIndex] = useState("allpool");
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="flex min-h-screen w-full ">
      <div className="flex w-full flex-col mb-xl z-10">
        <span className="text-2xl lg:text-4xl text-light font-extrabold lg:mt-xl mb-sm lg:mb-lg">
          {t("pageTitle")}
        </span>

        <Tabs
          clickHandler={(id: string) => {
            setTabStateIndex(id);
          }}
          tabState={tabStateIndex}
        />

        <div className="flex w-full md:w-1/3 px-base py-sm border-2 border-primary/60 rounded-lg mt-lg gap-2 text-white">
          <img src={Search} alt="SearchIcon" />
          <input
            type="tel"
            placeholder={t("searchInput") ?? ""}
            value={searchInput}
            onChange={(element) => {
              setSearchInput(element.target.value);
            }}
            className="flex w-full bg-transparent outline-none text-base appearance-none placeholder:text-gray-500"
          />
        </div>

        {tabStateIndex == "allpool" && <AllPoolsTab search={searchInput} />}
        {tabStateIndex == "mypool" && <MyPoolsTab search={searchInput} />}
      </div>
    </div>
  );
}
