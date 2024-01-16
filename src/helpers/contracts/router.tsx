import RouterABI from "@abis/ArdMoneyRouter.json";
import store, { GlobalAppState } from "@/redux/globalStore";
import { Token } from "@constants/TokenList";
import TokenABI from "@abis/ERC20.json";
import { ProviderContextType } from "@contexts/ProviderContext";
import { getReadContract, getWriteContract } from "./contract";
import { parse, parse18 } from "@helpers/web3";
import moment from "moment";

export async function getTokenRate(
  token: Token,
  path: Array<String>,
  web3: ProviderContextType | undefined
) {
  if (!web3) return;
  if (!web3.provider) return;

  let { web3: web3Slice, network: networkSlice }: GlobalAppState =
    store.getState();

  try {
    let contract = await getReadContract(
      web3,
      web3Slice.contracts.router[networkSlice.chainId],
      RouterABI
    );
    let [, fromTokenRateBN] = await contract.getAmountsOut(
      parse(1, token.decimals),
      path
    );

    return fromTokenRateBN;
  } catch (e) {
    console.log(e);
  }
}

export async function approveSwapToken(
  web3: ProviderContextType | undefined,
  tokenAddress: string,
  amount: number
) {
  if (!web3) return;
  if (!web3.provider) return;

  let { web3: web3Slice, network: networkSlice }: GlobalAppState =
    store.getState();

  let contract = await getWriteContract(web3, tokenAddress, TokenABI);
  let routerAddress = web3Slice.contracts.router[networkSlice.chainId];
  let amountBN = parse18(amount);

  let tx = await contract.approve(routerAddress, amountBN);

  return tx;
}

export async function swapTokens(
  web3: ProviderContextType | undefined,
  fromAmount: number,
  minAmount: number,
  path: Array<string>
) {
  if (!web3) return;
  if (!web3.provider) return;

  let {
    web3: web3Slice,
    network: networkSlice,
    dex: dexSlice,
  }: GlobalAppState = store.getState();

  let routerAddress = web3Slice.contracts.router[networkSlice.chainId];
  let router = await getWriteContract(web3, routerAddress, RouterABI);

  let currentBlock = await web3.provider.getBlockNumber();
  let providerTx = await web3.provider.getBlock(currentBlock);

  let currentBlockTimeStamp = providerTx?.timestamp ?? 0;
  let deadlineBlockTime = moment
    .unix(currentBlockTimeStamp)
    .add(dexSlice.deadline.toString(), "m");
  let deadline = deadlineBlockTime.unix();

  let minAmountWei = parse18(minAmount);
  let fromAmountWei = parse18(fromAmount);
  let account = web3Slice.account;

  const tx = await router.swapExactTokensForTokens(
    fromAmountWei,
    minAmountWei,
    path,
    account,
    deadline
  );

  return tx;
}
