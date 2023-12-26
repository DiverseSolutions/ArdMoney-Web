import store, { GlobalAppState } from "@/redux/store";
import TokenABI from "@abis/ERC20.json";
import { ProviderContextType } from "@contexts/ProviderContext";
import { getWriteContract } from "./contract";

export async function getUserTokenBalance(
  web3: ProviderContextType | undefined,
  address: string
) {
  if (!web3) return;
  if (!web3.provider) return;

  let { web3: web3Slice }: GlobalAppState = store.getState();

  if (web3Slice.providerType == "default") return;
  if (!web3Slice.account) return;

  try {
    let contract = await getWriteContract(web3, address, TokenABI);
    let balanceBN = await contract.balanceOf(web3Slice.account);
    return balanceBN;
  } catch (e) {
    console.log(e);
  }
}

export async function getTokenBalance(
  web3: ProviderContextType | undefined,
  address: string,
  accountAddress: string
) {
  if (!web3) return;
  if (!web3.provider) return;

  try {
    let contract = await getWriteContract(web3, address, TokenABI);
    let balanceBN = await contract.balanceOf(accountAddress);
    return balanceBN;
  } catch (e) {
    console.log(e);
  }
}
