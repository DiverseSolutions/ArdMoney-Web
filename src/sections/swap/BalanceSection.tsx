import { Token } from "@constants/TokenList"
import { useEffect, useState } from "react";
import { formatAndParse18 } from "@/helpers/web3";
import { formatNumber } from "@/helpers/numbers";
import TextLoader from "@components/shared/TextLoader";
import useTokenContract from "@hooks/contracts/useTokenContract";

type SectionProp = {
  token: Token | undefined
}

export default function BalanceSection({ token }: SectionProp) {
  const { isReadSuccess: isSuccess,getUserTokenBalance } = useTokenContract({ token })

  const [balance,setBalance] = useState(0)
  const [balanceLoading,setBalanceLoading] = useState(false)

  useEffect(()=>{ fetchBalance() },[token,isSuccess])
  useEffect(()=>{ fetchBalance() },[])

  async function fetchBalance(){
    if(!token || !isSuccess){
      setBalance(0)
      return;
    }

    setBalanceLoading(true)
    try {
      let balanceBN = await getUserTokenBalance()
      setBalance(formatAndParse18(balanceBN))
    } catch (e) {
      console.log(e) 
    }
    setBalanceLoading(false)
  }

  return (
    <TextLoader isLoading={balanceLoading}>
      <div className="flex gap-1 text-white items-center">
        <div className="i-ic-outline-account-balance-wallet icon-size-4" />
        <span className="relative top-0.5">{formatNumber(balance)}</span>
      </div>
    </TextLoader>
  )
}
