import { useQuery } from "@tanstack/react-query";
import { request, ClientError, gql } from "graphql-request";
import pairsQuery from "../graphql/allPairsQuery";
import { useSelector } from "react-redux";
import { GlobalAppState } from "@/redux/globalStore";

export default function useAllPoolsQuery() {
  const { chainId } = useSelector((state: GlobalAppState) => state.network);
  const { subgraph } = useSelector((state: GlobalAppState) => state.dex);

  const data = useQuery({
    queryKey: ["allPoolsData"],
    queryFn: async () => {
      const baseUrl = subgraph[chainId];
      try {
        const result: any = await request(baseUrl, pairsQuery);
        return result.pairs;
      } catch (e) {
        console.log(e);
      }

      return null;
    },
  });

  return data;
}
