import React, {} from "react";
import { NormalButtonProp } from "types/ButtonTypes";

export default function Button(
  { styles = "", isIcon = false, clickHandler, children }: NormalButtonProp,
) {
  const baseStyle =
    "flex bg-[#8362FD] text-white px-4 py-[10px] rounded-lg text-md cursor-pointer hover:scale-75 transition-all";
  const resultStyle = filterStyle() + " " + styles;

  return (
    <button onClick={clickHandler} className={resultStyle}>
      {children}
    </button>
  );

  function filterStyle() {
    if (isIcon) {
      return `hover:scale-75 transition-all bg-transparent`;
    }

    return baseStyle;
  }
}
