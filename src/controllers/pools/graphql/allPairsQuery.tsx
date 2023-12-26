import { gql } from "graphql-request";

const pairsQuery = gql`
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
      swaps(first: 1000) {
        id
      }
      mints(first: 1000) {
        id
      }
      burns(first: 1000) {
        id
      }
    }
  }
`;
export default pairsQuery;
