import ModalLayout from "@/components/layouts/ModalLayout";
import CloseIcon from "@assets/icons/CloseIcon";
import Search from "@/components/shared/Search";
import { useState } from "react";

export default function TokenSelectModal({
  tokens,
  isOpen,
  closeHandler,
  setToken,
}: any) {
  const [searchInput, setSearchInput] = useState("");

  function onSearchInputChange(input: string) {
    setSearchInput(input);
  }

  function exit() {
    setSearchInput("");
    closeHandler();
  }

  if (isOpen == false) return <></>;

  return (
    <div className="absolute z-5 w-full h-full">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <ModalLayout handleModalClose={exit}>
        <div className="mt-xl flex justify-between items-center">
          <h5>Select Token</h5>
          <button
            className="btn-animation p-2xs rounded-4xs border border-light-back"
            onClick={exit}
          >
            <CloseIcon />
          </button>
        </div>
        <Search input={searchInput} inputChangeHandler={onSearchInputChange} />
        <div className="h-[1px] bg-gradient rounded-xl"></div>

        <div className="h-[450px] overflow-scroll flex flex-col gap-y-6">
          {tokens.length > 0 &&
            tokens.filter(tokenFilter).map((token: any) => (
              <div
                onClick={() => {
                  setToken(token);
                  exit();
                }}
                key={token.id}
                className="flex gap-base items-center transition-transform hover:text-secondary cursor-pointer"
              >
                <img
                  src={token.icon}
                  className="w-10 h-10 rounded-full"
                  alt="tokenImage"
                />
                <div className="flex flex-col gap-4xs">
                  <span className="text-base">{token.name}</span>
                  <span className="text-xs">{token.symbol}</span>
                </div>
              </div>
            ))}
        </div>
      </ModalLayout>
    </div>
  );

  function tokenFilter(token: any) {
    if (searchInput === "") return true;

    if (token.symbol.toUpperCase() == searchInput.toUpperCase()) return true;

    return false;
  }
}
