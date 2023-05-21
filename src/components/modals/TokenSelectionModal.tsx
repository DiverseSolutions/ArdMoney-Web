import CloseIcon from "@assets/icons/CloseIcon";
import ModalLayout from "@components/layouts/ModalLayout";
import { useState } from "react";
import Search from "../shared/Search";
import { Token } from "@constants/TokenList";
import { TokenSelectModalProp } from "types/ModalTypes";

export default function TokenSelectionModal({
  tokenList,
  isOpen,
  setToken,
  handleClose,
}: TokenSelectModalProp) {
  const [searchInput, setSearchInput] = useState("");

  if (!isOpen) return <></>;

  function onSearchInputChange(input: string) {
    setSearchInput(input);
  }

  function onModalClose() {
    setSearchInput("");
    handleClose();
  }

  function onTokenChoice(token: Token) {
    setToken(token);
    setSearchInput("");
    handleClose();
  }

  return (
    <div className="absolute z-5 w-full h-full">
      <div className="absolute top-0 w-full h-full bg-black opacity-50"></div>
      <ModalLayout handleModalClose={onModalClose}>
        <div className="mt-xl flex justify-between items-center">
          <h5>Select Token</h5>
          <button
            className="btn-animation p-2xs rounded-4xs border border-light-back"
            onClick={handleClose}
          >
            <CloseIcon />
          </button>
        </div>
        <Search input={searchInput} inputChangeHandler={onSearchInputChange} />
        <div className="h-1 bg-gradient rounded-xl"></div>

        {searchInput.length != 0 &&
          tokenList.filter(tokenFilter).map((token: Token) => (
            <TokenRow
              token={token}
              clickHandler={() => {
                onTokenChoice(token);
              }}
            />
          ))}

        {searchInput.length == 0 &&
          tokenList.map((token: Token, index) => (
            <TokenRow
              key={index}
              token={token}
              clickHandler={() => {
                onTokenChoice(token);
              }}
            />
          ))}
      </ModalLayout>
    </div>
  );

  function tokenFilter(token: Token) {
    if (
      token.name.includes(searchInput) ||
      token.symbol.includes(searchInput) ||
      token.address.includes(searchInput)
    )
      return true;

    return false;
  }
}

function TokenRow({
  token,
  clickHandler,
}: {
  token: Token;
  clickHandler: () => void;
}) {
  return (
    <div
      onClick={clickHandler}
      className="flex gap-base items-center transition-transform hover:text-secondary cursor-pointer"
    >
      <img src={token.logo} className="w-10 h-10" alt="tokenImage" />
      <div className="flex flex-col gap-4xs">
        <span className="text-base">{token.name}</span>
        <span className="text-xs">{token.symbol}</span>
      </div>
    </div>
  );
}
