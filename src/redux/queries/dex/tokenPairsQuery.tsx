import { gql } from "graphql-request";
import { SubgraphPairTokens } from "types/QueryTypes";

export interface DexApiTokenPairsResponse {
  tokens: Array<SubgraphPairTokens>;
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
          mnt
          name
          symbol
          totalLiquidity
          totalSupply
        }
      }
      pairQuote {
        id
        token0 {
          id
          mnt
          name
          symbol
          totalLiquidity
          totalSupply
        }
      }
    }
  }
`;
