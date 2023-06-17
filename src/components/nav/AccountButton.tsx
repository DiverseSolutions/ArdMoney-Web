import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@redux/store";
import OutlineButton from "@components/shared/OutlineButton";
import { setWalletModal } from "@slices/modalSlice";

export default function AccountButton() {
  const { account } = useSelector((state: RootState) => state.web3);
  const dispatch = useDispatch();

  return (
    <OutlineButton
      style={"gap-2"}
      clickHandler={() => {
        dispatch(setWalletModal(true));
      }}
    >
      <div className="i-ic-outline-account-balance-wallet icon-size-5" />
      {accountNameShortener(account)}
    </OutlineButton>
  );
}

function accountNameShortener(account: string | undefined) {
  if (!account) return "";

  return `${account.substring(0, 6)}...${account.substring(
    account.length - 5,
    account.length
  )}`;
}
