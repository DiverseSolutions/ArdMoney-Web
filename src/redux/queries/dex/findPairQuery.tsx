import { gql } from "graphql-request";
import { SubgraphDexPair } from "types/QueryTypes";

export interface DexApiFindPairResponse {
  pairs: Array<SubgraphDexPair>;
}

export type DexApiFindPairParameter = {
  fromTokenSymbol: string;
  toTokenSymbol: string;
};

export function findPairQuery(fromTokenSymbol: string, toTokenSymbol: string) {
  return gql`
    query {
        pairs(
          where: 
            {or: [
              {token0_: {symbol: "${fromTokenSymbol}"},token1_: {symbol: "${toTokenSymbol}"}},
              {token0_: {symbol: "${toTokenSymbol}"},token1_: {symbol: "${fromTokenSymbol}"}},
            ]}
        ){
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
}
