import { GlobalAppState } from "@/redux/globalStore";
import { ProviderContextType } from "@contexts/ProviderContext";
import { ethers, Wallet } from "ethers";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export type DefaultProviderHookProp = {};

export default function useProvider() {
  const [provider, setProvider] = useState<ProviderContextType | undefined>(
    undefined
  );

  const { isConnected, providerType, defaultRpc } = useSelector(
    (state: GlobalAppState) => state.web3
  );
  const { isConfigured, isUnknown } = useSelector(
    (state: GlobalAppState) => state.network
  );

  useEffect(() => {
    setUpProvider();
  }, [isConnected, providerType, isConfigured, isUnknown]);

  function setUpProvider() {
    if (!isConfigured || isUnknown) {
      setUpDefaultProvider();
      return;
    }

    switch (providerType) {
      case "metamask":
        setUpMetamaskProvider();
        break;
      case "web":
        setUpWebProvider();
        break;
      case "default":
        setUpDefaultProvider();
        break;
      default:
        setUpMetamaskProvider();
    }
  }

  async function setUpMetamaskProvider() {
    let metamaskProvider = new ethers.BrowserProvider(window.ethereum);
    let metamaskSigner = await metamaskProvider.getSigner();

    setProvider({
      provider: metamaskProvider,
      signer: metamaskSigner,
    });
  }

  async function setUpWebProvider() {
    const webWalletProvider = new ethers.JsonRpcProvider(defaultRpc);
    const wallet = new Wallet("", webWalletProvider);

    setProvider({
      provider: webWalletProvider,
      signer: wallet,
    });
  }

  async function setUpDefaultProvider() {
    const webWalletProvider = new ethers.JsonRpcProvider(defaultRpc);

    setProvider({
      provider: webWalletProvider,
      signer: undefined,
    });
  }

  return provider;
}
