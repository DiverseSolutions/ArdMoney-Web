import { DropdownButtonProp } from "types/ButtonTypes";

import { filterDropdownIconSize } from "@helpers/component/buttonFilters";
import DropdownIcon from "@assets/icons/DropdownIcon";
import Button from "./Button";

const baseStyle = "flex gap-2 items-center rounded-lg cursor-pointer";

export default function DropdownButton(
  {
    padding = "normal",
    size = "normal",
    style = "",
    theme = "primary",
    noAnimation = false,
    clickHandler,
    children,
  }: DropdownButtonProp,
) {
  const dropDownIconSizeStyle = filterDropdownIconSize(size);
  const resultDropdownIconStyle = `${dropDownIconSizeStyle}`;

  return (
    <Button
      base={baseStyle}
      size={size}
      padding={padding}
      theme={theme}
      noAnimation={noAnimation}
      clickHandler={clickHandler}
      style={style}
    >
      {children}
      <DropdownIcon style={resultDropdownIconStyle} />
    </Button>
  );
}
