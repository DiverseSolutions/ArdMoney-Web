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

  const [readContract, setReadContract] = useState<Contract | undefined>(undefined);
  const [writeContract, setWriteContract] = useState<Contract | undefined>(
    undefined,
  );

  const [isReadLoading, setIsReadLoading] = useState<boolean>(false);
  const [isWriteLoading, setIsWriteLoading] = useState<boolean>(false);

  const [isReadSuccess, setIsReadSuccess] = useState<boolean>(false);
  const [isWriteSuccess, setIsWriteSuccess] = useState<boolean>(false);

  useEffect(() => {
    refetch();
  }, [...dependencies, address, abi]);


  function refetch() {
    refetchContractRead();
    refetchContractWrite();
  }

  function refetchContractRead() {
    setUpReadContract();
  }

  function refetchContractWrite() {
    setUpWriteContract();
  }

  function setUpReadContract() {
    if (!web3) return;
    if (!address) return;
    if (!web3.provider) return;

    setIsReadLoading(true);
    try {
      let readResult = new Contract(address, abi, web3.provider);

      setReadContract(readResult);
      setIsReadSuccess(true);
    } catch (e) {
      console.log(e);
      setIsReadSuccess(false);
    }
    setIsReadLoading(false);
  }

  async function setUpWriteContract() {
    if (!web3) return;
    if (!address) return;
    if (!web3.signer) return;

    setIsWriteLoading(true);
    try {
      let writeResult = new Contract(address, abi, web3.signer);

      setWriteContract(writeResult);
      setIsWriteSuccess(true);
    } catch (e) {
      console.log(e);
      setIsWriteSuccess(false);
    }
    setIsWriteLoading(false);
  }

  return {
    readContract,
    writeContract,
    isReadLoading,
    isWriteLoading,
    isWriteSuccess,
    isReadSuccess,
    refetch,
    refetchContractRead,
    refetchContractWrite,
  };
}
