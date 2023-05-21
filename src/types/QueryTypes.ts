export interface SubgraphDexToken {
  id: string;
  mnt: number;
  name: string;
  symbol: string;
  totalLiquidity: number;
  totalSupply: number;
}

export interface SubgraphDexPair {
  id: string;
  token0: SubgraphDexToken;
  token1: SubgraphDexToken;
  reserve0: string;
  reserve1: string;
  token0Price: string;
  token1Price: string;
  volumeToken0: string;
  volumeToken1: string;
}

export interface SubgraphPairTokens {
  id: string;
  name: string;
  totalSupply: string;
  totalLiquidity: string;
  pairBase: Array<TokenBasePair>;
  pairQuote: Array<TokenQuotePair>;
}

export interface TokenBasePair {
  id: string;
  token1: SubgraphDexToken;
}

export interface TokenQuotePair {
  id: string;
  token0: SubgraphDexToken;
}
