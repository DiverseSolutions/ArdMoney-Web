import { Contract } from "ethers";
import { ProviderContextType } from "@contexts/ProviderContext";

export async function getReadContract(
  web3: ProviderContextType,
  address: string,
  abi: Array<string>
) {
  let readContract = new Contract(address, abi, web3.provider);

  return readContract;
}

export async function getWriteContract(
  web3: ProviderContextType,
  address: string,
  abi: Array<string>
) {
  let readContract = new Contract(address, abi, web3.signer);

  return readContract;
}
