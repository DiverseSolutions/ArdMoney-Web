export type Token = {
  address: string;
  name: string;
  symbol: string;
  decimals: number;
  isDex: boolean;
  isWallet: boolean;
  logo: string;
};

interface ITokenList<TValue> {
    [id: string]: TValue;
}

const bscTestNetTokenList: Array<Token> = [
    {
      "address": "0x42E66bA8D80B098F75554b061288a41d083C6348",
      "name": "BinanceUSD",
      "symbol": "BUSD",
      "isDex": true,
      "isWallet": true,
      "decimals": 18,
      "logo": "https://cryptologos.cc/logos/binance-usd-busd-logo.png?v=022",
    },
    {
      "address": "0xc50c6773761090742bb321112A38dEe684e41118",
      "name": "TerraUSD",
      "symbol": "USDT",
      "isDex": true,
      "isWallet": true,
      "decimals": 18,
      "logo": "https://cryptologos.cc/logos/tether-usdt-logo.png?v=022",
    },

    {
      "address": "0x51934B73D93A2C611b6F080674a15308d9E1dB7D",
      "name": "Ard Coin",
      "symbol": "ARDX",
      "isDex": true,
      "isWallet": false,
      "decimals": 2,
      "logo": "https://tokenimg.dsolutions.mn/tokens/ardx.png",
    },

    {
      "address": "0x9087f345F063b88a78b80D90Eeb1DA35288D183A",
      "name": "Mongol Tether",
      "symbol": "MONT",
      "isDex": true,
      "isWallet": true,
      "decimals": 18,
      "logo": "https://tokenimg.dsolutions.mn/tokens/mont.png",
    },
    {
      "address": "0x2D9ee688D46FD1D39Eb3507BB58dCE3A3cab64D0",
      "name": "ArdMoney",
      "symbol": "ARDM",
      "isDex": true,
      "isWallet": true,
      "decimals": 18,
      "logo": "https://tokenimg.dsolutions.mn/tokens/ardm.png",
    },
    {
      "address": "0x2D9ee688D46FD1D39Eb3507BB58dCE3A3cab64D0",
      "name": "xArdMoney",
      "symbol": "xARDM",
      "isDex": false,
      "isWallet": true,
      "decimals": 18,
      "logo": "https://tokenimg.dsolutions.mn/tokens/xardm.png",
    },
    {
      "address": "0x25A5C86b6CB03D2e5413810Ba5b62cC86473bE70",
      "name": "Inflation Hedging Coin",
      "symbol": "IHC",
      "isDex": true,
      "isWallet": true,
      "decimals": 18,
      "logo": "https://tokenimg.dsolutions.mn/tokens/ihc.png",
    },

]

const bscMainNetTokenList: Array<Token> = [
    {
      "address": "0x2D279FDECdf7f5705F5ff0bD80F8D9a305Ea87F4",
      "name": "Mongol Tether",
      "symbol": "MONT",
      "isDex": true,
      "isWallet": true,
      "decimals": 18,
      "logo": "https://tokenimg.dsolutions.mn/tokens/mont.png",
    },
    {
      "address": "0x55d398326f99059fF775485246999027B3197955",
      "name": "Tether(USD)",
      "symbol": "USDT",
      "isDex": true,
      "isWallet": true,
      "decimals": 18,
      "logo": "https://cryptologos.cc/logos/tether-usdt-logo.png?v=022",
    },
    {
      "address": "0xE849188F76c0dA93b5eD310a1F72127914b3A7b9",
      "name": "ArdMoney",
      "symbol": "ARDM",
      "isDex": true,
      "isWallet": true,
      "decimals": 18,
      "logo": "https://tokenimg.dsolutions.mn/tokens/ardm.png",
    },
    {
      "address": "0x1b911938C3aD76De1DFaACcF508f9018b93FfB93",
      "name": "xArdMoney",
      "symbol": "xARDM",
      "isDex": false,
      "isWallet": true,
      "decimals": 18,
      "logo": "https://tokenimg.dsolutions.mn/tokens/xardm.png",
    },
    {
      "address": "0x86a53fcd199212FEa44FA7e16EB1f28812be911D",
      "name": "Inflation Hedging Coin",
      "symbol": "IHC",
      "decimals": 18,
      "isDex": true,
      "isWallet": true,
      "logo": "https://tokenimg.dsolutions.mn/tokens/ihc.png",
    },
]

const DexTokenList : ITokenList<Array<Token>> = {
  97 : bscTestNetTokenList.filter((token) => token.isDex),
  56 : bscMainNetTokenList.filter((token) => token.isDex),
}

const WalletTokenList : ITokenList<Array<Token>> = {
  97 : bscTestNetTokenList.filter((token) => token.isWallet),
  56 : bscMainNetTokenList.filter((token) => token.isWallet),
}

export {
  DexTokenList,
  WalletTokenList
};
