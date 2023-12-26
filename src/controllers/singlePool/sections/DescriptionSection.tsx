import { Icon } from "@iconify/react";
import { useContext } from "react";
import TokensContext from "../context/TokensContext";
import { useTranslation } from "react-i18next";

export default function DescriptionSection() {
  const { t } = useTranslation("singlePool");
  const { baseToken, quoteToken } = useContext(TokensContext);
  const infoList = [t("summary1"), t("summary2"), t("summary3")];

  return (
    <div className="p-6 bg-primary-back border border-primary rounded-3xs grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-x-6">
      <div>
        <p className="subtext text-center w-12/12 lg:text-left lg:w-10/12">
          {t("about")}
        </p>
      </div>
      <div>
        <ul className="flex flex-col gap-y-6">
          {infoList.map((list, index) => (
            <li
              key={index}
              className="flex flex-col lg:flex-row items-center gap-y-4 gap-x-4 lg:items-start subtext"
            >
              <Icon
                icon="mdi:information-outline"
                className="w-4 h-4 relative top-1"
              />
              <p className="w-10/12 text-center lg:text-left">{list}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
