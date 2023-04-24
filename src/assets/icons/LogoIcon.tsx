import Logo from "@assets/icons/logo.svg";
import { NormalSvgType } from "types/SvgTypes";

export default function MetamaskIcon({ style="h-3xl w-auto" } : NormalSvgType) {
  return (
    <img className={style} src={Logo} alt="ArdMoneyLogo" />
  )
}
