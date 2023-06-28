import { gql } from "graphql-request";

const allTokensQuery = gql`
  query {
    tokens {
      id
      name
      symbol
      totalLiquidity
      totalSupply
      tradeVolume
      txCount
    }
  }
`;

export default allTokensQuery;
