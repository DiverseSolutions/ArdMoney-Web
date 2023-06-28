import { createApi } from "@reduxjs/toolkit/query/react";
import { request, ClientError } from "graphql-request";
import allTokensQuery from "../queries/dex/allTokensQuery";
import allPairsQuery from "../queries/dex/allPairsQuery";

const graphqlBaseQuery =
  ({}) =>
  async (
    { body, url, onSuccess, onError }: any,
    api: any,
    extraOptions: any
  ) => {
    try {
      let state = api.getState();
      let network = state.network;
      let dex = state.dex;
      const { chainId } = network;

      let baseUrl = dex.subgraph[chainId];

      const result = await request(url == undefined ? baseUrl : url, body);
      onSuccess(api);
      return { data: result };
    } catch (error) {
      onError(api, error);
      if (error instanceof ClientError) {
        return { error: { status: error.response.status, data: error } };
      }
      return { error: { status: 500, data: error } };
    }
  };

export const subgraphSlice = createApi({
  reducerPath: "subgraph",
  baseQuery: graphqlBaseQuery({}),
  endpoints: (builder) => ({
    getAllPairs: builder.query({
      query: () => ({
        body: allPairsQuery,
        onSuccess: ({ signal, dispatch, getState }: any) => {},
        onError: ({ signal, dispatch, getState }: any, error: any) => {},
      }),
      transformResponse: (response: any) => response.pairs,
    }),
    getAllTokens: builder.query({
      query: () => ({
        body: allTokensQuery,
        onSuccess: ({ signal, dispatch, getState }: any) => {},
        onError: ({ signal, dispatch, getState }: any, error: any) => {},
      }),
      transformResponse: (response: any) => response.tokens,
    }),
  }),
});

export const { useGetAllTokensQuery, useGetAllPairsQuery } = subgraphSlice;
