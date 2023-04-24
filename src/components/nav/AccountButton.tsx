import { useSelector } from "react-redux"
import { RootState } from "@redux/store" 
import OutlineButton from "@components/shared/OutlineButton"

export default function AccountButton() {
  const { account } = useSelector((state:RootState) => state.web3)
  return (
    <OutlineButton>
      {accountNameShortener(account)}
    </OutlineButton>
  )
}

function accountNameShortener(account: string | null){
  if (account == null) return "";

  return `${account.substring(0,6)}...${account.substring(account.length-5,account.length)}` 
}
