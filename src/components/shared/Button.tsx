import { NormalButtonProp } from "types/ButtonTypes";

import {
  filterAnimationStyle,
  filterColorStyle,
  filterPaddingStyle,
  filterTextSize,
} from "@helpers/component/buttonFilters";

const baseStyle = "flex items-center rounded-lg cursor-pointer";

export default function Button(
  {
    base = baseStyle,
    padding = "normal",
    size = "normal",
    style = "",
    theme = "primary",
    noAnimation = false,
    clickHandler,
    children,
  }: NormalButtonProp,
) {

  const colorStyle = filterColorStyle(theme);
  const paddingStyle = filterPaddingStyle(padding);
  const textSizeStyle = filterTextSize(size);
  const animationStyle = filterAnimationStyle(noAnimation);

  const resultStyle =
    `${base} ${colorStyle} ${paddingStyle} ${textSizeStyle} ${animationStyle} ${style}`;

  return (
    <button onClick={clickHandler} className={resultStyle}>
      {children}
    </button>
  );
}
