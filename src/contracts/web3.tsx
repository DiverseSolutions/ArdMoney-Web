import { parse18 } from "@/helpers/web3";
import { Web3State } from "@slices/web3Slice";
import { ethers } from "ethers";

export interface ProviderState {
  provider: ethers.BrowserProvider | ethers.AbstractProvider,
  signer: ethers.JsonRpcSigner | null,
}

export async function getContractEssentials(web3Slice : Web3State) : Promise<ProviderState> {
  let provider = null;
  let signer = null;

  if(web3Slice.hasWallet){
    if(web3Slice.isConnected){
      provider = new ethers.BrowserProvider(window.ethereum)
      signer = await provider.getSigner()
    }else{
      provider = ethers.getDefaultProvider(web3Slice.defaultRpc)
    }
  }else{
    provider = ethers.getDefaultProvider(web3Slice.defaultRpc)
  }

  return { provider, signer }
}

export async function getBlockNumber(web3Slice : Web3State){
  let web3 : ProviderState = await getContractEssentials(web3Slice)
  return await web3.provider.getBlockNumber()
}

export async function getUserBalance(web3Slice : Web3State){
  if(!web3Slice.isConnected || web3Slice.account == null) return

  let web3 : ProviderState = await getContractEssentials(web3Slice)
  let address = ethers.getAddress(web3Slice.account)
  let balanceBN = await web3.provider.getBalance(address)

  return parse18(balanceBN) 
}
