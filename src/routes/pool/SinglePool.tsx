import SinglePoolController from "@controllers/singlePool/SinglePoolController";
import React from "react";
import { useParams } from "react-router-dom";
import { Chain, WagmiConfig, configureChains, createConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { MetaMaskConnector } from "@wagmi/core/connectors/metaMask";
import { bsc } from "wagmi/chains";

// const connector = new MetaMaskConnector({
//   chains: [bsc],
// })
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [bsc],
  [publicProvider()]
);

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
});

export default function SinglePool() {
  return (
    <WagmiConfig config={config}>
      <SinglePoolController />
    </WagmiConfig>
  );
}
