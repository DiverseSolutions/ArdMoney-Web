import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@redux/store" 
import OutlineButton from "@components/shared/OutlineButton"
import { setWalletModal } from "@slices/modalSlice"

export default function AccountButton() {
  const { account } = useSelector((state:RootState) => state.web3)
  const network = useSelector((state:RootState) => state.network)

  const dispatch = useDispatch()

  return (
    <OutlineButton clickHandler={() => { dispatch(setWalletModal(true)) }}>
      <img src={network.logo} className="w-lg h-auto lg:hidden" alt="network_logo" />
      {accountNameShortener(account)}
    </OutlineButton>
  )
}

function accountNameShortener(account: string | undefined){
  if (!account) return "";

  return `${account.substring(0,6)}...${account.substring(account.length-5,account.length)}` 
}
