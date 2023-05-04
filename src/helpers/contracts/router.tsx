import RouterABI from "@abis/ArdMoneyRouter.json";
import store, { RootState } from "@/redux/store";
import { Token } from "@constants/TokenList";
import { ProviderContextType } from "@contexts/ProviderContext";
import { getReadContract } from "./contract";
import { parse } from "@helpers/web3";

export async function getTokenRate(
  token: Token,
  path: Array<String>,
  web3: ProviderContextType | undefined,
) {
  if (!web3) return;
  if (!web3.provider) return;

  let { web3: web3Slice, network: networkSlice }: RootState = store.getState();

  try {
    let contract = await getReadContract(
      web3,
      web3Slice.contracts.router[networkSlice.chainId],
      RouterABI,
    );
    let [, fromTokenRateBN] = await contract.getAmountsOut(
      parse(1, token.decimals),
      path,
    );

    return fromTokenRateBN;
  } catch (e) {
    console.log(e);
  }
}
