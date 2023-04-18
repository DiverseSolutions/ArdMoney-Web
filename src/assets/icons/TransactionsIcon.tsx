import IconButton from "@components/shared/IconButton" 
import { NormalSvgType } from "types/SvgTypes";

export default function TransactionsIcon({ style,size = "normal",clickHandler }: NormalSvgType) {

  return (
    <IconButton clickHandler={clickHandler} style={style} size={size} theme="icon" padding="none">
        <path
          fill="currentColor"
          d="M19.5 3.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2L7.5 3.5L6 2v14H3v3c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V2l-1.5 1.5zM15 20H6c-.55 0-1-.45-1-1v-1h10v2zm4-1c0 .55-.45 1-1 1s-1-.45-1-1v-3H8V5h11v14z"
        >
        </path>
        <path
          fill="currentColor"
          d="M9 7h6v2H9zm0 3h6v2H9zm7-3h2v2h-2zm0 3h2v2h-2z"
        >
        </path>
    </IconButton>
  );
}
