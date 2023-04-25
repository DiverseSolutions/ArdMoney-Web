export interface SubgraphDexToken {
  id: string,
  mnt: number,
  name: string,
  symbol: string,
  totalLiquidity: number,
  totalSupply: number,
}

export interface SubgraphDexPair {
  id: string,
  token0: SubgraphDexToken,
  token1: SubgraphDexToken,
  reserve0 : number,
  reserve1 : number,
  token0Price : number,
  token1Price : number,
  volumeToken0 : number,
  volumeToken1 : number
}

export interface SubgraphPairTokens {
  id: string,
  name : string,
  totalSupply : string,
  totalLiquidity : string,
  pairBase : Array<TokenBasePair>,
  pairQuote : Array<TokenQuotePair>,
}

export interface TokenBasePair {
  id: string,
  token1: SubgraphDexToken,
}

export interface TokenQuotePair {
  id: string,
  token0: SubgraphDexToken,
}
