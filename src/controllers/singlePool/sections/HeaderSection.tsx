import { Icon } from "@iconify/react";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import TokensContext from "../context/TokensContext";

export default function HeaderSection() {
  const { baseToken, quoteToken } = useContext(TokensContext);
  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-x-3 lg:gap-x-8">
      <div
        className="p-2 cursor-pointer"
        onClick={() => {
          navigate(-1);
        }}
      >
        <Icon icon="mdi:chevron-left" className="w-[32px] h-[32px]" />
      </div>
      <div className="text-lg lg:text-4xl font-bold flex gap-x-3">
        <span>{baseToken.symbol}</span>
        <span>/</span>
        <span>{quoteToken.symbol}</span>
      </div>
      <div className="flex gap-x-3 items-center">
        <img
          src={baseToken.logo}
          alt="baseTokenLogo"
          className="w-[30px] h-[30px] lg:w-[48px] lg:h-[48px]"
        />
        <img
          src={quoteToken.logo}
          alt="quoteTokenLogo"
          className="w-[30px] h-[30px] lg:w-[48px] lg:h-[48px]"
        />
      </div>
    </div>
  );
}
