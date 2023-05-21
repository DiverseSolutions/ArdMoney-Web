import { gql } from "graphql-request";
import { SubgraphDexPair } from "types/QueryTypes";

export interface DexApiPairsResponse {
  pairs: Array<SubgraphDexPair>;
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
`;
