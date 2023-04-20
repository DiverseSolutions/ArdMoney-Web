import { useSelector,useDispatch } from "react-redux";
import { RootState } from "@redux/store";
import { DefaultCheckProp } from "types/CheckTypes";

import detectEthereumProvider from "@metamask/detect-provider";
import { useEffect } from "react";
import { setWeb3Connection,setWeb3Account,setHasWeb3Wallet } from "@slices/web3Slice" 
import { alertError } from '@helpers/alert'

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
          dispatch(setWeb3Connection(true));
          dispatch(setHasWeb3Wallet(true))
        } 
      } catch (e:any) {
        alertError(e.message)
      }
    }
  }

  return ( <> { children } </>)
}
