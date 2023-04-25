import Logo from "@assets/svgs/Logo.svg";
import { DefaultSvgProp } from "types/SvgTypes";

export default function MetamaskIcon({ style="h-3xl w-auto" } : DefaultSvgProp) {
  return (
    <img className={style} src={Logo} alt="ArdMoneyLogo" />
  )
}
