export type Chain = {
  name: Array<string>;
  chainId: number;
  rpc: Array<string>;
  faucets: Array<string>;
  currency: string;
  explorers: Array<string>;
  logos: Array<string>;
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
  },

]


export const ChainList: Array<Chain> = [
  // Ethereum
  {
    name: ["Ethereum", "Ethereum Mainnet"],
    chainId: 1,
    rpc: [
      "https://mainnet.infura.io/v3/",
    ],
    faucets: [],
    currency: "ETH",
    explorers: ["https://etherscan.io"],
    logos: ["https://cryptologos.cc/logos/ethereum-eth-logo.png?v=022"],
  },
  {
    name: ["Goerli", "Goerli Testnet"],
    chainId: 5,
    rpc: [
      "https://goerli.infura.io/v3/",
    ],
    faucets: [
      "https://goerli-faucet.slock.it",
    ],
    currency: "ETH",
    explorers: ["https://goerli.etherscan.io"],
    logos: ["https://cryptologos.cc/logos/ethereum-eth-logo.png?v=022"],
  },

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
  },

  // Polygon
  {
    name: ["Polygon", "Matic Network", "Polygon Mainnet"],
    chainId: 137,
    rpc: [
      "https://polygon-rpc.com",
    ],
    faucets: [],
    currency: "MATIC",
    explorers: ["https://polygonscan.com"],
    logos: ["https://cryptologos.cc/logos/polygon-matic-logo.png?v=022"],
  },
  {
    name: ["Mumbai", "Mumbai Testnet"],
    chainId: 80001,
    rpc: [
      "https://matic-mumbai.chainstacklabs.com",
      "https://rpc-mumbai.maticvigil.com",
    ],
    faucets: [
      "https://faucet.polygon.technology",
    ],
    currency: "MATIC",
    explorers: ["https://mumbai.polygonscan.com"],
    logos: ["https://cryptologos.cc/logos/polygon-matic-logo.png?v=022"],
  },

  // Avalanche
  {
    name: ["Avalanche", "Avalanche Mainnet"],
    chainId: 43114,
    rpc: [
      "https://api.avax.network/ext/bc/C/rpc",
    ],
    faucets: [],
    currency: "AVAX",
    explorers: ["https://snowtrace.io"],
    logos: ["https://cryptologos.cc/logos/avalanche-avax-logo.png?v=022"],
  },
  {
    name: ["Fuji", "Avalanche Testnet", "Fuji Testnet"],
    chainId: 43113,
    rpc: [
      "https://api.avax-test.network/ext/bc/C/rpc",
    ],
    faucets: [
      "https://faucet.avax-test.network",
    ],
    currency: "AVAX",
    explorers: ["https://testnet.snowtrace.io"],
    logos: ["https://cryptologos.cc/logos/avalanche-avax-logo.png?v=022"],
  },

  // Fantom
  {
    name: ["Fantom", "Fantom Opera", "Fantom Mainnet"],
    chainId: 250,
    rpc: [
      "https://rpcapi.fantom.network/",
    ],
    faucets: [],
    currency: "FTM",
    explorers: ["https://ftmscan.com"],
    logos: ["https://cryptologos.cc/logos/fantom-ftm-logo.png?v=022"],
  },
  {
    name: ["Fantom Testnet"],
    chainId: 4002,
    rpc: [
      "https://rpc.testnet.fantom.network",
    ],
    faucets: [
      "https://faucet.fantom.network/",
    ],
    currency: "FTM",
    explorers: ["https://testnet.ftmscan.com"],
    logos: ["https://cryptologos.cc/logos/fantom-ftm-logo.png?v=022"],
  },

  // Corex
  {
    name: ["Corex", "Corex Mainnet"],
    chainId: 1104,
    rpc: [
      "https://node.corexchain.io",
    ],
    faucets: [],
    currency: "CRX",
    explorers: ["https://explorer.corexchain.io"],
    logos: ["https://tokenimg.dsolutions.mn/tokens/crx.png"],
  },
  {
    name: ["Corex Testnet"],
    chainId: 3305,
    rpc: [
      "https://node-testnet.corexchain.io",
    ],
    faucets: [
      "https://faucet.corexchain.io/",
    ],
    currency: "CRX",
    explorers: ["https://explorer-testnet.corexchain.io"],
    logos: ["https://tokenimg.dsolutions.mn/tokens/crx.png"],
  },

];

export const UnknownChain : Chain = {
    name: ["Unknown Chain"],
    chainId: -1,
    rpc: [],
    faucets: [],
    currency: "",
    explorers: [],
    logos: [],
}
