import IconButton from "@components/shared/IconButton";
import { NormalSvgType } from "types/SvgTypes";

export default function DropdownIcon(
  { fill = "none", style, size = "normal", clickHandler }: NormalSvgType,
) {
  return (
    <IconButton
      clickHandler={clickHandler}
      style={style}
      size={size}
      theme="icon"
      padding="none"
      viewBox={"0 0 25 25"}
      fill={fill}
    >
        <path
          fill="currentColor"
          d="M12 15.25a.74.74 0 0 1-.53-.22l-5-5A.75.75 0 0 1 7.53 9L12 13.44L16.47 9a.75.75 0 0 1 1.06 1l-5 5a.74.74 0 0 1-.53.25Z"
        >
        </path>
    </IconButton>
  );
}
