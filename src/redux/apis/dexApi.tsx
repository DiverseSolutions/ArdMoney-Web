import { createApi } from "@reduxjs/toolkit/query/react"
import { dexApiBaseQuery } from './baseQueries'

import { pairsQuery , DexApiPairsResponse } from "@queries/dex/pairsQuery"
import { tokenPairsQuery, DexApiTokenPairsResponse } from "@queries/dex/tokenPairsQuery"

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
      transformResponse: (response: DexApiTokenPairsResponse) => response.tokens,
    }),

  }),
})

export const { 
  useGetPairsQuery,
  useGetTokensPairsQuery,
} = dexApi

