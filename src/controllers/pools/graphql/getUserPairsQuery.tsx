import { gql } from "graphql-request";

function getUserPairsQuery(userAddress: string) {
  return gql`
    query {
      liquidityPositions(where: {user: "${userAddress.toLowerCase()}" }) {
        pair {
          id
          token0 {
            id
            name
            symbol
            mnt
            totalSupply
            totalLiquidity
          }
          token1 {
            id
            name
            symbol
            mnt
            totalSupply
            totalLiquidity
          }
          totalSupply
          token0Price
          token1Price
          reserve0
          reserve1
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
    }
  `;
}

export default getUserPairsQuery;
