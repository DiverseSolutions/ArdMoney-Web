import { gql } from "graphql-request";

const allPairsQuery = gql`
  query {
    pairs {
      id
      totalSupply
      volumeToken0
      volumeToken1
      txCount
      liquidityProviderCount
      token0 {
        id
        name
        mnt
        totalSupply
        totalLiquidity
        symbol
      }
      token1 {
        id
        name
        mnt
        totalSupply
        totalLiquidity
        symbol
      }
    }
  }
`;

export default allPairsQuery;
