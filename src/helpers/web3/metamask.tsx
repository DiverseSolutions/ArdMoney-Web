import { Chain } from "@constants/ChainList"
import detectEthereumProvider from "@metamask/detect-provider";
import { intToHex } from "@helpers/network"
import { alert } from "@helpers/alert"

export async function addingChain(chain: Chain){
    const provider: any = await detectEthereumProvider({timeout:500});
    if (provider) {
      await provider.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainName: chain.name[0],
            chainId: intToHex(chain.chainId),
            nativeCurrency: {
              name: chain.name[0],
              symbol : chain.currency,
              decimals: 18,
            },
            rpcUrls: chain.rpc,
            blockExplorerUrls: chain.explorers,
            iconUrls: chain.logos,
          },
        ],
      });
    }else{
      alert("error","No Metamask Detected")
    }
}

export async function switchToChain(chain: Chain){
    const provider: any = await detectEthereumProvider({timeout:500});
    if (provider) {
      await provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: intToHex(chain.chainId) }],
      });
    }else{
      alert("error","No Metamask Detected")
    }
}
