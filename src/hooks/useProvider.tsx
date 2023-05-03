import { RootState } from "@/redux/store";
import { ProviderContextType } from "@contexts/ProviderContext";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export type DefaultProviderHookProp = {
};

export default function useProvider() {
  const [provider,setProvider] = useState<ProviderContextType | undefined>(undefined)

  const web3Slice = useSelector((state: RootState) => state.web3);

  useEffect(()=>{
    if(web3Slice.isConnected){
      setUpProvider()
    }
  },[web3Slice.isConnected,web3Slice.providerType])

  function setUpProvider(){
    switch(web3Slice.providerType){
      case "metamask":
        setUpMetamaskProvider()
        break;
      case "web":
        setUpWebProvider()
        break;
      default:
        setUpMetamaskProvider()
    }
  }

  async function setUpMetamaskProvider(){
    let metamaskProvider = new ethers.BrowserProvider(window.ethereum)
    let metamaskSigner = await metamaskProvider.getSigner();

    setProvider({
      provider : metamaskProvider,
      signer: metamaskSigner,
    })
  }

  async function setUpWebProvider(){

  }

  return provider
}
