import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@redux/store";
import OutlineButton from "@components/shared/OutlineButton";
import { setWalletModal } from "@slices/modalSlice";
import { useTranslation } from "react-i18next";

export default function AccountButton() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <OutlineButton
      style={"gap-2"}
      clickHandler={() => {
        dispatch(setWalletModal(true));
      }}
    >
      <div className="i-ic-outline-account-balance-wallet icon-size-5" />
      {t("navBar:wallet")}
    </OutlineButton>
  );
}
