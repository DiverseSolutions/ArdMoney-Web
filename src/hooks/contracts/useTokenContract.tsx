import { RootState } from "@/redux/store";
import TokenABI from "@abis/ERC20.json";
import { Token } from "@constants/TokenList";
import { useSelector } from "react-redux";
import useContract from "./useContract";

type ContractHookType = {
  token?: Token | undefined;
  dependencies?: Array<any>;
};

export default function useTokenContract(
  { dependencies = [], token = undefined }: ContractHookType,
) {
  let contractResult = useContract({
    address: token?.address,
    abi: TokenABI,
    dependencies,
  });
  const web3Slice = useSelector((state: RootState) => state.web3);

  async function getUserTokenBalance() {
    if (!contractResult.readContract) return;

    try {
      let { readContract: contract } = contractResult
      let balanceBN = await contract.balanceOf(web3Slice.account);
      return balanceBN;
    } catch (e) {
      console.log(e);
    }
  }

  async function getTokenBalance(accountAddress: string) {
    if (!contractResult.readContract) return;

    try {
      let { readContract: contract } = contractResult
      let balanceBN = await contract.balanceOf(accountAddress);
      return balanceBN;
    } catch (e) {
      console.log(e);
    }
  }

  return {
    ...contractResult,
    getUserTokenBalance,
    getTokenBalance,
  };
}
