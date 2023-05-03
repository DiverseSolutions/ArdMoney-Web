import { ProviderContext } from "@contexts/ProviderContext";
import { Contract } from "ethers";
import { useContext, useEffect, useState } from "react";

type ContractDefaultHookType = {
  address: string | undefined;
  abi: string[];
  dependencies?: Array<any>;
};

export default function useContract(
  { address, dependencies = [], abi }: ContractDefaultHookType,
) {
  const web3 = useContext(ProviderContext);

  const [contract, setContract] = useState<Contract | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  useEffect(() => {
    setUpContract();
  }, [...dependencies, address, abi]);

  function setUpContract() {
    if (!web3) return;
    if (!address) return;
    if (!web3.provider) return;

    setIsLoading(true);
    try {
      let result = new Contract(address, abi, web3.provider);
      setContract(result);
      setIsSuccess(true);
    } catch (e) {
      console.log(e);
      setIsSuccess(false);
    }
    setIsLoading(false);
  }

  function refetch() {
    setUpContract();
  }

  return { contract, isLoading, isSuccess, refetch };
}
