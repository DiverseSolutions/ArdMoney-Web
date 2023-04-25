import { configureStore } from "@reduxjs/toolkit"
import { web3Reducer } from "@redux/slices/web3Slice"
import { modalReducer } from "@redux/slices/modalSlice"
import { networkReducer } from "@redux/slices/networkSlice"
import { dexReducer } from "@redux/slices/dexSlice"

import { dexApi } from '@redux/apis/dexApi'
import { setupListeners } from "@reduxjs/toolkit/dist/query"

const store = configureStore({
  reducer: {
    web3: web3Reducer,
    modal: modalReducer,
    network: networkReducer,
    dex: dexReducer,

    [dexApi.reducerPath]: dexApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dexApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export default store;
