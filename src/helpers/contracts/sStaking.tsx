import StakingABI from "@abis/SARDMStaking.json";
import store, { RootState } from "@/redux/store";
import { ProviderContextType } from "@contexts/ProviderContext";
import { getReadContract } from "./contract";
import { format18 } from "@helpers/web3";

export async function getTotalLockedARDM(
  web3: ProviderContextType | undefined
) {
  if (!web3) return;
  if (!web3.provider) return;

  let { web3: web3Slice, network: networkSlice }: RootState = store.getState();

  try {
    let contract = await getReadContract(
      web3,
      web3Slice.contracts.sStaking[networkSlice.chainId],
      StakingABI
    );
    const totalLocked = await contract.getTotalLockedARDM();
    return format18(totalLocked);
  } catch (e) {
    console.log(e);
  }
}

export async function getSARDMRate(web3: ProviderContextType | undefined) {
  if (!web3) return;
  if (!web3.provider) return;

  let { web3: web3Slice, network: networkSlice }: RootState = store.getState();

  try {
    let contract = await getReadContract(
      web3,
      web3Slice.contracts.sStaking[networkSlice.chainId],
      StakingABI
    );
    const rate = await contract.getSARDMRate();
    return format18(rate);
  } catch (e) {
    console.log(e);
  }
}
