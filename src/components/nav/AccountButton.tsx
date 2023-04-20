import { useSelector } from "react-redux"
import { RootState } from "@redux/store" 

export default function AccountButton() {
  const { account } = useSelector((state:RootState) => state.web3)
  return (
    <button className="btn-outline rounded-full py-3xs px-sm">{accountNameShortener(account)}</button>
  )
}

function accountNameShortener(account: string | null){
  if (account == null) return "";

  return `${account.substring(0,6)}...${account.substring(account.length-5,account.length)}` 
}
