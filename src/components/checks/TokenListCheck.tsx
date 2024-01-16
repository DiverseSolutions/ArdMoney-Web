import { GlobalAppState } from "@/redux/globalStore";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DefaultCheckProp } from "types/CheckTypes";
import { DexTokenList, WalletTokenList } from "@constants/TokenList";
import { setDexList, setWalletList } from "@slices/tokenSlice";

export default function TokenListCheck({ children }: DefaultCheckProp) {
  const { isConfigured, chainId } = useSelector(
    (state: GlobalAppState) => state.network
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (isConfigured) {
      dispatch(setWalletList(WalletTokenList[chainId]));
      dispatch(setDexList(DexTokenList[chainId]));
    }
  }, [isConfigured]);

  return <>{children}</>;
}
