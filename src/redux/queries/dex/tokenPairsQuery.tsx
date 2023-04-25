import { gql } from "graphql-request"

export interface DexApiTokenPairsResponse {
  tokens: Array<Tokens>
}

interface Tokens {
  id: string,
  name : string,
  totalSupply : string,
  totalLiquidity : string,
  pairBase : TokenBasePair,
  pairQuote : TokenQuotePair,
}

interface TokenBasePair {
  id: string,
  token1: Token,
}

interface TokenQuotePair {
  id: string,
  token0: Token,
}

interface Token {
  id: string,
  name : string,
  totalSupply : string,
  totalLiquidity : string,
}

export const tokenPairsQuery = gql`
  query {
    tokens {
      id
      name
      totalSupply
      totalLiquidity
      pairBase {
        id
        token1 {
          id
          name
          totalSupply
          totalLiquidity
        }
      }
      pairQuote {
        id
        token0 {
          id
          name
          totalSupply
          totalLiquidity
        }
      }
    }
  }
`
