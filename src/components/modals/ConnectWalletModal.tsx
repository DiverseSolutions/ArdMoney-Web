import MetamaskIcon from "@assets/icons/MetamaskIcon";
import LogoIcon from "@assets/icons/LogoIcon";
import { useDispatch } from "react-redux";
import { setConnectWalletModal } from "@slices/modalSlice";
import { setWeb3Account, setWeb3Connection } from "@slices/web3Slice";

import detectEthereumProvider from "@metamask/detect-provider";
import { alert } from '@helpers/alert'
import CloseIcon from "@assets/icons/CloseIcon";
import OutlineButton from "../shared/OutlineButton";

export default function ConnectWalletModal() {
  const dispatch = useDispatch();

  async function handleMetamaskConnection() {
    const provider: any = await detectEthereumProvider({timeout:500});
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
          alert("success","Successfully Connected To Metamask")
        } else {
         alert("error","No Metamask Accounts Found")
        }
      } catch (e:any) {
        alert("error",e.message)
      }
    } else {
        alert("error","Install Metamask")
    }
  }

  function handleModalClose() {
    dispatch(setConnectWalletModal(false));
  }

  return (
    <div className="max-w-[423px] flex flex-col gap-base">
      <div className="flex justify-between items-center">
        <h5>Connect Wallet</h5>
        <button
          className="btn-animation p-2xs rounded-4xs border border-light-back"
          onClick={handleModalClose}
        >
          <CloseIcon />
        </button>
      </div>

      <span className="text-light-terteriary">Available Wallet</span>
      <OutlineButton clickHandler={handleMetamaskConnection} >
        <MetamaskIcon style="h-2xl w-auto" />
        <h5>Metamask</h5>
      </OutlineButton>
      <OutlineButton disabled>
        <LogoIcon />
        <h5>ArdMoney Wallet</h5>
      </OutlineButton>
      <p>
        By connecting a wallet, you agree to ArdMoney Swap’s{" "}
        <a href="#" className="document-link">Terms of Service</a>{" "}
        and consent to its{" "}
        <a className="document-link" href="#">Privacy Policy</a> .
      </p>
    </div>
  );
}
