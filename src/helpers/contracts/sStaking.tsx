import StakingABI from "@abis/SARDMStaking.json";
import store, { RootState } from "@/redux/store";
import { ProviderContextType } from "@contexts/ProviderContext";
import { getReadContract, getWriteContract } from "./contract";
import { format18, parse18 } from "@helpers/web3";
import TokenABI from "@abis/ERC20.json";
import { WalletTokenList } from "@constants/TokenList";

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

export async function stakingApproveArdmToken(
  web3: ProviderContextType | undefined,
  amount: number
) {
  let { web3: web3Slice, network: networkSlice }: RootState = store.getState();

  let ardmToken = WalletTokenList[networkSlice.chainId].find(
    (token) => token.symbol === "ARDM"
  );

  if (!web3) return;
  if (!web3.provider) return;
  if (!ardmToken) return;

  let contract = await getWriteContract(web3, ardmToken.address, TokenABI);
  let stakingAddress = web3Slice.contracts.sStaking[networkSlice.chainId];
  let amountBN = parse18(amount);

  let tx = await contract.approve(stakingAddress, amountBN);

  return tx;
}

export async function stakingApprovesArdmToken(
  web3: ProviderContextType | undefined,
  amount: number
) {
  let { web3: web3Slice, network: networkSlice }: RootState = store.getState();

  let sArdmToken = WalletTokenList[networkSlice.chainId].find(
    (token) => token.symbol === "sARDM"
  );

  if (!web3) return;
  if (!web3.provider) return;
  if (!sArdmToken) return;

  let contract = await getWriteContract(web3, sArdmToken.address, TokenABI);
  let stakingAddress = web3Slice.contracts.sStaking[networkSlice.chainId];
  let amountBN = parse18(amount);

  let tx = await contract.approve(stakingAddress, amountBN);

  return tx;
}

export async function stakingStakeToken(
  web3: ProviderContextType | undefined,
  amount: number
) {
  if (!web3) return;
  if (!web3.provider) return;

  let { web3: web3Slice, network: networkSlice }: RootState = store.getState();

  let stakingAddress = web3Slice.contracts.sStaking[networkSlice.chainId];
  let staking = await getWriteContract(web3, stakingAddress, StakingABI);

  let amountBN = parse18(amount);

  const tx = await staking.deposit(amountBN);

  return tx;
}

export async function stakingUnStakeToken(
  web3: ProviderContextType | undefined,
  amount: number
) {
  if (!web3) return;
  if (!web3.provider) return;

  let { web3: web3Slice, network: networkSlice }: RootState = store.getState();

  let stakingAddress = web3Slice.contracts.sStaking[networkSlice.chainId];
  let staking = await getWriteContract(web3, stakingAddress, StakingABI);

  let amountBN = parse18(amount);

  const tx = await staking.withdraw(amountBN);

  return tx;
}
