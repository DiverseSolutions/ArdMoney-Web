import Logo from "@assets/icons/logo.svg";
import { DefaultSvgProp } from "types/SvgTypes";

export default function MetamaskIcon({ style="h-3xl w-auto" } : DefaultSvgProp) {
  return (
    <img className={style} src={Logo} alt="ArdMoneyLogo" />
  )
}
