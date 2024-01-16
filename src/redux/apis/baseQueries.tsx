import { request, ClientError } from "graphql-request";
// import { RootState } from "@redux/store"
import { BaseQueryFn } from "@reduxjs/toolkit/dist/query";
import { GlobalAppState } from "@/redux/globalStore";

export const dexApiBaseQuery: BaseQueryFn<any, unknown, unknown> = async (
  args,
  api,
  _extraOptions
) => {
  try {
    let state = api.getState();
    let network = (state as GlobalAppState).network;
    let dex = (state as GlobalAppState).dex;
    const { chainId } = network;

    let baseUrl = chainId == -1 ? dex.subgraph[97] : dex.subgraph[chainId];

    const result = await request(baseUrl, args.body);
    // args.onSuccess(api)
    return { data: result };
  } catch (error) {
    // args.onError(api, error)
    if (error instanceof ClientError) {
      return { error: { status: (error as any).response.status, data: error } };
    }
    return { error: { status: 500, data: error } };
  }
};
