import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@redux/store";
import { DefaultCheckProp } from "types/CheckTypes";
import { SupportedChainList } from "@constants/ChainList";
import { alert } from "@helpers/alert";
import {
  hexToInt,
  setChainListener,
  removeChainListener,
} from "@helpers/network";

import {
  setNetwork,
  setNetworkConfigured,
  setNetworkUnknown,
  Network,
} from "@slices/networkSlice";
import detectEthereumProvider from "@metamask/detect-provider";
import { setProviderType } from "@slices/web3Slice";

export default function NetworkCheck({ children }: DefaultCheckProp) {
  const { isConnected } = useSelector((state: RootState) => state.web3);
  const { isConfigured } = useSelector((state: RootState) => state.network);
  const dispatch = useDispatch();

  useEffect(() => {
    setChainListener(listenerHandler);
    return () => {
      removeChainListener(listenerHandler);
    };
  }, []);

  useEffect(() => {
    configureNetwork();
  }, [isConnected]);

  function listenerHandler() {
    configureNetwork();
  }

  async function configureNetwork() {
    if (!isConnected) return;

    try {
      const provider: any = await detectEthereumProvider({ timeout: 500 });

      let chainHexId = provider.chainId;
      let chainId = hexToInt(chainHexId);
      let chain = SupportedChainList.find((chain) => chain.chainId === chainId);

      if (chain) {
        let c: Network = {
          isConfigured: true,
          isTestNet: chain.isTestNet,
          name: chain.name[0],
          chainId: chain.chainId,
          currency: chain.currency,
          explorer: chain.explorers[0],
          logo: chain.logos[0],
          faucet: chain.faucets[0],
        };
        dispatch(setNetwork(c));
      } else {
        if (isConfigured) {
          dispatch(setNetworkConfigured(false));
        } else {
          dispatch(setNetworkUnknown(true));
          dispatch(setProviderType("default"));
        }
      }
    } catch (e) {
      alert("error", "Failed to configure network");
    }
  }

  return <div>{children}</div>;
}
