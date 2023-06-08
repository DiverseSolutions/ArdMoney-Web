import StakingABI from "@abis/XARDMStaking.json";
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
      web3Slice.contracts.staking[networkSlice.chainId],
      StakingABI
    );
    const totalLocked = await contract.getTotalLockedARDM();
    return format18(totalLocked);
  } catch (e) {
    console.log(e);
  }
}

export async function getStakedBalance(web3: ProviderContextType | undefined) {
  if (!web3) return;
  if (!web3.provider) return;

  let { web3: web3Slice, network: networkSlice }: RootState = store.getState();
  if (!web3Slice.account) return;

  try {
    let contract = await getReadContract(
      web3,
      web3Slice.contracts.staking[networkSlice.chainId],
      StakingABI
    );
    const stakedBalance = await contract.ardmBalanceOf(web3Slice.account);
    return stakedBalance;
  } catch (e) {
    console.log(e);
  }
}
