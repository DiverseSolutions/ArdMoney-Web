import MetamaskIcon from "@assets/icons/MetamaskIcon";
import { useDispatch } from "react-redux";
import { setConnectWalletModal } from "@slices/modalSlice";
import { setWeb3Account, setWeb3Connection } from "@slices/web3Slice";

import detectEthereumProvider from "@metamask/detect-provider";
import { alertError,alertSuccess } from '@helpers/alert'
import CloseIcon from "@assets/icons/CloseIcon";

export default function ConnectWalletModal() {
  const dispatch = useDispatch();

  async function handleMetamaskConnection() {
    const provider: any = await detectEthereumProvider();
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
          alertSuccess("Successfully Connected To Metamask")
        } else {
          alertError("No Metamask Accounts Found")
        }
      } catch (e:any) {
        alertError(e.message)
      }
    } else {
        alertError("Install Metamask")
    }
  }

  function handleModalClose() {
    dispatch(setConnectWalletModal(false));
  }

  return (
    <div className="max-w-[423px]">
      <div className="flex justify-between items-center">
        <h5>Connect Wallet</h5>
        <button
          className="btn-animation p-2xs rounded-4xs border border-light-back"
          onClick={handleModalClose}
        >
          <CloseIcon />
        </button>
      </div>

      <div className="flex flex-col gap-3xs">
        <span className="text-light-terteriary">Available Wallet</span>
        <button
          className="btn-outline btn-animation"
          onClick={handleMetamaskConnection}
        >
          <MetamaskIcon style="h-2xl w-auto" />
          <h5>Metamask</h5>
        </button>
        <button className="btn-outline btn-outline-disabled btn-animation">
          <MetamaskIcon style="h-2xl w-auto" />
          <h5>ArdMoney Wallet</h5>
        </button>
      </div>

      <p>
        By connecting a wallet, you agree to ArdMoney Swap’s{" "}
        <a href="#" className="document-link">Terms of Service</a>{" "}
        and consent to its{" "}
        <a className="document-link" href="#">Privacy Policy</a> .
      </p>
    </div>
  );
}
