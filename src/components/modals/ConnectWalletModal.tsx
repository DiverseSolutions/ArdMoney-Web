import MetamaskIcon from "@assets/icons/MetamaskIcon";
import { useDispatch } from "react-redux";
import { toggleConnectWalletModal } from "@slices/modalSlice";
import { setWeb3Account, web3Connected } from "@slices/web3Slice";
import detectEthereumProvider from "@metamask/detect-provider";
import { alertError,alertSuccess } from '@helpers/alert'

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
          dispatch(web3Connected());
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
    dispatch(toggleConnectWalletModal());
  }

  return (
    <>
      <div className="flex justify-between items-center">
        <h5>Connect Wallet</h5>
        <button
          className="btn-animation p-2xs rounded-4xs border border-light-back"
          onClick={handleModalClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m12 13.4l-4.9 4.9q-.275.275-.7.275q-.425 0-.7-.275q-.275-.275-.275-.7q0-.425.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7q0-.425.275-.7q.275-.275.7-.275q.425 0 .7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275q.425 0 .7.275q.275.275.275.7q0 .425-.275.7L13.4 12l4.9 4.9q.275.275.275.7q0 .425-.275.7q-.275.275-.7.275q-.425 0-.7-.275Z"
            >
            </path>
          </svg>
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
    </>
  );
}
