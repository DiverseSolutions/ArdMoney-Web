import MetamaskIcon from "@assets/icons/MetamaskIcon";
import LogoIcon from "@assets/icons/LogoIcon";
import { useDispatch } from "react-redux";
import { setConnectWalletModal } from "@slices/modalSlice";
import {
  setProviderType,
  setWeb3Account,
  setWeb3Connection,
} from "@slices/web3Slice";

import detectEthereumProvider from "@metamask/detect-provider";
import { alert } from "@helpers/alert";
import CloseIcon from "@assets/icons/CloseIcon";
import OutlineButton from "../shared/OutlineButton";
import { Wallet } from "ethers";
import ModalLayout from "../layouts/ModalLayout";
import { useTranslation } from "react-i18next";

export default function ConnectWalletModal() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  async function handleMetamaskConnection() {
    const provider: any = await detectEthereumProvider({ timeout: 500 });
    if (provider) {
      try {
        const accounts = await provider.request({
          method: "eth_requestAccounts",
          params: [],
        });
        if (accounts.length != 0) {
          handleModalClose();
          dispatch(setWeb3Account(accounts[0]));
          dispatch(setWeb3Connection(true));
          dispatch(setProviderType("metamask"));
          alert("success", t("alert:connectWalletSuccess"));
        } else {
          alert("error", t("alert:noAccountFoundError"));
        }
      } catch (e: any) {
        alert("error", e.message);
      }
    } else {
      alert("error", "Install Metamask");
    }
  }

  async function handleWebWalletConnection() {
    try {
      handleModalClose();

      const wallet = new Wallet("");
      dispatch(setWeb3Account(wallet.address));
      dispatch(setWeb3Connection(true));
      dispatch(setProviderType("web"));
      alert("success", t("alert:connectWalletSuccess"));
    } catch (e: any) {
      alert("error", e.message);
    }
  }

  function handleModalClose() {
    dispatch(setConnectWalletModal(false));
  }

  return (
    <ModalLayout handleModalClose={handleModalClose}>
      <div className="min-w-[200px] max-w-[423px] flex flex-col gap-base">
        <div className="flex justify-between items-center">
          <h5>{t("common:connectWallet")}</h5>
          <button
            className="btn-animation p-2xs rounded-4xs border border-light-back"
            onClick={handleModalClose}
          >
            <CloseIcon />
          </button>
        </div>

        <span className="text-light-terteriary">
          {t("connectWalletModal:walletAvailablity")}
        </span>
        <OutlineButton clickHandler={handleMetamaskConnection}>
          <MetamaskIcon style="h-2xl w-auto" />
          <h5>Metamask</h5>
        </OutlineButton>
        <OutlineButton disabled clickHandler={handleWebWalletConnection}>
          <LogoIcon />
          <h5>ArdMoney Wallet</h5>
        </OutlineButton>
        <p className="text-sm text-center">
          {t("connectWalletModal:termsAndPrivacy")}
        </p>
      </div>
    </ModalLayout>
  );
}
