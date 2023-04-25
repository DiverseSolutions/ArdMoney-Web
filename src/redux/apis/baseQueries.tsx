import { request, ClientError } from "graphql-request"
// import { RootState } from "@redux/store"
import { BaseQueryFn } from "@reduxjs/toolkit/dist/query"
import { RootState } from "@redux/store"

export const dexApiBaseQuery: BaseQueryFn<any,unknown,unknown> = async (args, api, _extraOptions) => {
  try {
    let state = api.getState()
    let network = (state as RootState).network
    let dex = (state as RootState).dex
    const { chainId } = network

    let baseUrl = chainId == -1 ? dex.subgraph[97] : dex.subgraph[chainId]

    const result = await request(baseUrl, args.body)
    // args.onSuccess(api)
    return { data: result }
  } catch (error) {
    // args.onError(api, error)
    if (error instanceof ClientError) {
      return { error: { status: (error as any).response.status, data: error } }
    }
    return { error: { status: 500, data: error } }
  }
}
