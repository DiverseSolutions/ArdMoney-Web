import Cloud1 from "@assets/images/staking/Cloud1.svg";
import Cloud2 from "@assets/images/staking/Cloud2.svg";
import Cloud3 from "@assets/images/staking/Cloud3.svg";
import Cloud4 from "@assets/images/staking/Cloud4.svg";
import { useTranslation } from "react-i18next";

export default function Info() {
  const { t } = useTranslation();
  return (
    <div className="relative overflow-hidden flex flex-col staking-header-gradient p-lg w-full border border-primary rounded-3xs">
      <div className="flex flex-col w-full z-10 lg:w-7/12 text-light/60 text-sm gap-lg">
        <div className="flex gap-base">
          <div className="i-ic-round-warning-amber icon-size-5 flex-shrink-0" />
          <span>{t("stake:infoWarning1")}</span>
        </div>
        <div className="flex gap-base">
          <div className="i-ic-round-warning-amber icon-size-5 flex-shrink-0" />
          <span>{t("stake:infoWarning2")}</span>
        </div>
        <div className="flex gap-base">
          <div className="i-ic-round-warning-amber icon-size-5 flex-shrink-0" />
          <span>{t("stake:infoWarning3")}</span>
        </div>
        <div className="flex gap-base">
          <div className="i-ic-round-warning-amber icon-size-5 flex-shrink-0" />
          <span>{t("stake:infoWarning4")}</span>
        </div>
      </div>
      <div className="hidden lg:flex ">
        <img
          src={Cloud1}
          alt=""
          className="absolute rounded-br-3xs right-0 bottom-0"
        />
        <img
          src={Cloud2}
          alt=""
          className="absolute rounded-br-3xs right-0 bottom-0"
        />
        <img
          src={Cloud3}
          alt=""
          className="absolute rounded-br-3xs right-0 bottom-0"
        />
        <img
          src={Cloud4}
          alt=""
          className="absolute rounded-br-3xs right-0 bottom-0"
        />
      </div>
    </div>
  );
}
