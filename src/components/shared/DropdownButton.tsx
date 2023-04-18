import { DropdownButtonProp } from "types/ButtonTypes";

import { filterDropdownIconSize } from "@helpers/component/buttonFilters";
import DropdownIcon from "@assets/icons/DropdownIcon";
import Button from "./Button";

const baseStyle = "flex gap-2 items-center rounded-lg cursor-pointer";

export default function DropdownButton(
  {
    text = "",
    padding = "normal",
    size = "normal",
    style = "",
    theme = "primary",
    noAnimation = false,
    clickHandler,
  }: DropdownButtonProp,
) {
  const dropDownIconSizeStyle = filterDropdownIconSize(size);
  const resultDropdownIconStyle = `${dropDownIconSizeStyle}`;

  return (
    <Button
      base={baseStyle}
      weight={"bold"}
      size={size}
      padding={padding}
      theme={theme}
      noAnimation={noAnimation}
      clickHandler={clickHandler}
      style={style}
    >
      {text}
      <DropdownIcon size="small" style={resultDropdownIconStyle} />
    </Button>
  );
}
