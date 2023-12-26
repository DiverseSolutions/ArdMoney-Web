import { useQuery } from "@tanstack/react-query";
import { request, ClientError, gql } from "graphql-request";
import { useSelector } from "react-redux";
import { GlobalAppState } from "@/redux/store";
import pairsQuery from "../graphql/pairQuery";
import { ZeroAddress } from "ethers";

export default function useGetPairQuery(poolAddress: string) {
  const address = poolAddress ?? ZeroAddress;

  const { chainId } = useSelector((state: GlobalAppState) => state.network);
  const { subgraph } = useSelector((state: GlobalAppState) => state.dex);

  const data = useQuery({
    queryKey: [`pool${address}Data`],
    queryFn: async () => {
      const baseUrl = subgraph[chainId];
      try {
        const result: any = await request(baseUrl, pairsQuery(address));
        return result.pairs[0];
      } catch (e) {
        console.log(e);
      }

      return null;
    },
  });

  return data;
}
