import TextLoader from "@/components/shared/TextLoader";
import { bsc } from "wagmi/chains";
import { MetaMaskConnector } from "@wagmi/core/connectors/metaMask";
import { useTranslation } from "react-i18next";
import { useAccount, useConnect } from "wagmi";

export default function ConnectWallet({ children }: { children: any }) {
  const { t } = useTranslation("common");
  const {
    isConnected: isWalletConnected,
    isDisconnected: isWalletDisconnected,
  } = useAccount();
  const {
    isSuccess: isWalletConnectSuccess,
    connect: connectWallet,
    isLoading: isWalletConnecting,
  } = useConnect({
    chainId: bsc.id,
    connector: new MetaMaskConnector({ chains: [bsc] }),
  });

  if (isWalletDisconnected || isWalletConnecting) {
    return (
      <div className="flex flex-col justify-end gap-y-2 grow">
        <button
          className={`rounded-3xs justify-center flex w-full py-4 ${
            isWalletConnecting
              ? "bg-primary-disabled text-light-disabled"
              : "bg-primary"
          }`}
          onClick={() => {
            connectWallet();
          }}
          disabled={isWalletConnecting}
        >
          <TextLoader isLoading={isWalletConnecting || isWalletConnectSuccess}>
            {t("connectWallet")}
          </TextLoader>
        </button>
      </div>
    );
  }

  if (isWalletConnected) {
    return children;
  }
  return <>Wallet Problem</>;
}
