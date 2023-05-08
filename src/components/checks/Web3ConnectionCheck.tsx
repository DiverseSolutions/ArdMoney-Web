import { useSelector,useDispatch } from "react-redux";
import { RootState } from "@redux/store";
import { DefaultCheckProp } from "types/CheckTypes";

import detectEthereumProvider from "@metamask/detect-provider";
import { useEffect } from "react";
import { setWeb3Connection,setWeb3Account,setHasWeb3Wallet, setProviderType } from "@slices/web3Slice" 
import { alert } from '@helpers/alert'

export default function Web3ConnectionCheck({ children }: DefaultCheckProp) {
  const {} = useSelector((state:RootState) => state.web3)
  const { isConfigured,isUnknown } = useSelector((state:RootState) => state.network)
  const dispatch = useDispatch()

  useEffect(() => { checkProvider() },[isConfigured,isUnknown])

  async function checkProvider(){
    if(isUnknown){
      dispatch(setWeb3Connection(true));
      dispatch(setProviderType("default"));
      return
    }

    const provider: any = await detectEthereumProvider({timeout:500});
    if (provider) {
      dispatch(setHasWeb3Wallet(true))

      try {
        let account = provider.selectedAddress;

        if (account != undefined && account != null && account !== "") {
          dispatch(setWeb3Account(account));
          dispatch(setWeb3Connection(true));
          dispatch(setProviderType("metamask"));
        } 
      } catch (e:any) {
        alert("error",e.message)
      }
    }
  }

  return ( <> { children } </>)
}
