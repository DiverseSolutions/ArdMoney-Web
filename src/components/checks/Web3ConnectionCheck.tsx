import { useSelector,useDispatch } from "react-redux";
import { RootState } from "@redux/store";
import { DefaultCheckProp } from "types/CheckTypes";

import detectEthereumProvider from "@metamask/detect-provider";
import { useEffect } from "react";
import { web3Connected,setWeb3Account } from "@slices/web3Slice" 

export default function Web3ConnectionCheck({ children }: DefaultCheckProp) {
  const {} = useSelector((state:RootState) => state.web3)
  const dispatch = useDispatch()

  useEffect(() => { checkProvider() },[])

  async function checkProvider(){
    const provider: any = await detectEthereumProvider();
    if (provider) {
      try {
        let account = provider.selectedAddress;

        if (account != undefined && account != null && account !== "") {
          dispatch(setWeb3Account(account));
          dispatch(web3Connected());
        } else {
          // Handle No Accounts Problem
        }
      } catch (e) {
        // Handle No Metamask Extension
      }
    } else {
      console.log("Please install MetaMask!");
    }
  }

  return ( <> { children } </>)
}
