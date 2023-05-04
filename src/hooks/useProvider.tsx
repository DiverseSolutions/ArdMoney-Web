import { RootState } from "@/redux/store";
import { ProviderContextType } from "@contexts/ProviderContext";
import { ethers, Wallet } from "ethers";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export type DefaultProviderHookProp = {
};

export default function useProvider() {
  const [provider,setProvider] = useState<ProviderContextType | undefined>(undefined)

  const web3Slice = useSelector((state: RootState) => state.web3);

  useEffect(()=>{ setUpProvider() },[web3Slice.isConnected,web3Slice.providerType])
  useEffect(()=>{ setUpProvider() },[])

  function setUpProvider(){
    switch(web3Slice.providerType){
      case "metamask":
        setUpMetamaskProvider()
        break;
      case "web":
        setUpWebProvider()
        break;
      case "default":
        setUpDefaultProvider()
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
    const webWalletProvider = new ethers.JsonRpcProvider("https://bsc-dataseed1.ninicoin.io");
    const wallet = new Wallet("",webWalletProvider);

    setProvider({
      provider : webWalletProvider,
      signer: wallet,
    })
  }

  async function setUpDefaultProvider(){
    const webWalletProvider = new ethers.JsonRpcProvider("https://bsc-dataseed1.ninicoin.io");

    setProvider({
      provider : webWalletProvider,
      signer: undefined,
    })
  }


  return provider
}