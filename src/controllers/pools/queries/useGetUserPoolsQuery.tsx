import { useQuery } from "@tanstack/react-query";
import { request, ClientError, gql } from "graphql-request";
import getUserPairsQuery from "../graphql/getUserPairsQuery";
import { useSelector } from "react-redux";
import { GlobalAppState } from "@/redux/globalStore";

export default function useGetUserPoolsQuery() {
  const { account } = useSelector((state: GlobalAppState) => state.web3);
  const { chainId } = useSelector((state: GlobalAppState) => state.network);
  const { subgraph } = useSelector((state: GlobalAppState) => state.dex);

  const data = useQuery({
    queryKey: ["allUserPoolsData"],
    queryFn: async () => {
      const baseUrl = subgraph[chainId];
      try {
        if (!account) throw Error;
        const result: any = await request(baseUrl, getUserPairsQuery(account));
        return result.liquidityPositions.map((item: any) => item.pair);
      } catch (e) {
        console.log(e);
      }

      return null;
    },
  });

  return data;
}
