import { gql } from "graphql-request";

function pairsQuery(address: string) {
  return gql`
    query {
      pairs(where: {id: "${address.toLowerCase()}" }) {
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
        totalSupply
      }
    }
  `;
}

export default pairsQuery;
