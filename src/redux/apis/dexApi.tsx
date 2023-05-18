import { createApi } from "@reduxjs/toolkit/query/react";
import { dexApiBaseQuery } from "./baseQueries";

import { DexApiPairsResponse, pairsQuery } from "@queries/dex/pairsQuery";

import {
  DexApiTokenPairsResponse,
  tokenPairsQuery,
} from "@queries/dex/tokenPairsQuery";

import {
  DexApiFindPairParameter,
  DexApiFindPairResponse,
  findPairQuery,
} from "@queries/dex/findPairQuery";

export const dexApi = createApi({
  reducerPath: "dexApi",
  baseQuery: dexApiBaseQuery,
  endpoints: (builder) => ({
    getPairs: builder.query({
      query: () => ({ body: pairsQuery }),
      transformResponse: (response: DexApiPairsResponse) => response.pairs,
    }),

    getTokensPairs: builder.query({
      query: () => ({ body: tokenPairsQuery }),
      transformResponse: (response: DexApiTokenPairsResponse) =>
        response.tokens,
    }),

    findPair: builder.query({
      query: ({ fromTokenSymbol, toTokenSymbol }: DexApiFindPairParameter) => ({
        body: findPairQuery(fromTokenSymbol,toTokenSymbol),
      }),
      transformResponse: (response: DexApiFindPairResponse) =>
        response.pairs[0] ?? undefined,
    }),
  }),
});

export const {
  useGetPairsQuery,
  useGetTokensPairsQuery,
  useFindPairQuery,
} = dexApi;
