import { useTranslation } from "react-i18next";

export default function PoolTabs({
  tabState,
  setTabState,
}: {
  tabState: any;
  setTabState: any;
}) {
  const { t } = useTranslation("singlePool");
  const tabBaseStyle =
    "flex justify-center items-center bg-primary-back h-[55px] rounded-t-3xs cursor-pointer";

  return (
    <div className="grid grid-cols-2 gap-x-4">
      <div
        className={`${tabBaseStyle} ${
          tabState == "add" && "border-b-3 border-primary"
        }`}
        onClick={() => {
          setTabState("add");
        }}
      >
        {t("add")}
      </div>
      <div
        className={`${tabBaseStyle} ${
          tabState == "remove" && "border-b-3 border-primary"
        }`}
        onClick={() => {
          setTabState("remove");
        }}
      >
        {t("remove")}
      </div>
    </div>
  );
}
