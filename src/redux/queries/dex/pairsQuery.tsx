import { gql } from "graphql-request"

export interface DexApiPairsResponse {
  pairs: Array<SubgraphDexPair>
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

export interface SubgraphDexToken {
  id: string,
  mnt: number,
  name: string,
  symbol: string,
  totalLiquidity: number,
  totalSupply: number,
}

export const pairsQuery = gql`
  query {
    pairs {
      id
      token0 {
        id
        mnt
        name
        symbol
        totalLiquidity
        totalSupply
      }
      token1 {
        id
        mnt
        name
        symbol
        totalLiquidity
        totalSupply
      }
      reserve0
      reserve1
      token0Price
      token1Price
      volumeToken0
      volumeToken1
    }
  }
`
