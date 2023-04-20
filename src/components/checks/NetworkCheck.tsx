import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { RootState } from "@redux/store";
import { DefaultCheckProp } from "types/CheckTypes";
import { ChainList } from '@constants/ChainList'
import { alertError } from "@helpers/alert" 
import { hexToInt } from "@helpers/network" 

import { setNetwork,Network } from '@slices/networkSlice'
import detectEthereumProvider from "@metamask/detect-provider";

export default function NetworkCheck({ children } : DefaultCheckProp) {
  const { isConnected } = useSelector((state:RootState) => state.web3)
  const network = useSelector((state:RootState) => state.network)
  const dispatch = useDispatch()

  useEffect(() => { configureNetwork() },[isConnected])

  async function configureNetwork(){
    if(!isConnected) return;

    try {
      const provider: any = await detectEthereumProvider({timeout:500});

      let chainHexId = provider.chainId;
      let chainId = hexToInt(chainHexId)
      let chain = ChainList.find((chain) => chain.chainId === chainId)
      if(chain){
        let supported = network.supportedChains.find((supportedChainId) => supportedChainId == chain?.chainId)
        if(supported){
          let c : Network = {
            isConfigured: true,
            name: chain.name[0],
            chainId: chain.chainId,
            currency: chain.currency,
            explorer: chain.explorers[0],
            rpc: chain.rpc[0],
            logo: chain.logos[0],
            faucet: chain.faucets[0],
          }
          dispatch(setNetwork(c))
        }
      }
    } catch (e) {
      alertError("Failed to configure network")
    }

  }

  return (
    <div>{ children }</div>
  )
}
