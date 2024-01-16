import React from "react";

export default function TokenSelectButton({
  logo,
  symbol,
  clickHandler,
}: {
  logo?: string | null;
  symbol?: string | null;
  clickHandler?: () => void;
}) {
  return (
    <button
      className="btn justify-around items-center gap-sm px-4xs py-2xs bg-primary-back min-w-[140px]"
      onClick={clickHandler}
    >
      <div className="flex items-center gap-3xs">
        {logo != null && (
          <img src={logo} className="w-6 h-6 rounded-full" alt="tokenLogo" />
        )}
        <span className="text-base pt-[2px]">
          {symbol ? symbol : "Select Token"}
        </span>
      </div>
      <div className="i-ic-round-chevron-right icon-size-5" />
    </button>
  );
}
