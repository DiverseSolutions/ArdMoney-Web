export type Chain = {
  name: Array<string>;
  chainId: number;
  rpc: Array<string>;
  faucets: Array<string>;
  currency: string;
  explorers: Array<string>;
  logos: Array<string>;
  isTestNet: boolean;
};

export const SupportedChainList: Array<Chain> = [
  // BSC
  {
    name: ["BNB Chain", "BSC", "BSC Mainnet"],
    chainId: 56,
    rpc: [
      "https://bsc-dataseed1.ninicoin.io",
    ],
    faucets: [],
    currency: "BNB",
    explorers: ["https://bscscan.com"],
    logos: ["https://cryptologos.cc/logos/bnb-bnb-logo.png?v=022"],
    isTestNet: false,
  },
  {
    name: ["BNB Testnet", "BSC Testnet"],
    chainId: 97,
    rpc: [
      "https://data-seed-prebsc-1-s1.binance.org:8545",
    ],
    faucets: [
      "https://testnet.binance.org/faucet-smart",
    ],
    currency: "BNB",
    explorers: ["https://testnet.bscscan.com"],
    logos: ["https://cryptologos.cc/logos/bnb-bnb-logo.png?v=022"],
    isTestNet: true,
  },

]
