import { configureStore } from "@reduxjs/toolkit";
import { web3Reducer } from "@redux/slices/web3Slice";
import { modalReducer } from "@redux/slices/modalSlice";
import { networkReducer } from "@redux/slices/networkSlice";
import { dexReducer } from "@redux/slices/dexSlice";
import { tokenReducer } from "@redux/slices/tokenSlice";
import { subgraphSlice } from "./slices/subgraphSlice";

import { dexApi } from "@redux/apis/dexApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { maintenanceReducer } from "@slices/maintenanceSlice";
import { whiteListReducer } from "@slices/whiteListSlice";

const globalStore = configureStore({
  reducer: {
    web3: web3Reducer,
    modal: modalReducer,
    network: networkReducer,
    dex: dexReducer,
    token: tokenReducer,
    maintenace: maintenanceReducer,
    whitelist: whiteListReducer,

    [dexApi.reducerPath]: dexApi.reducer,
    [subgraphSlice.reducerPath]: subgraphSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
      .concat(dexApi.middleware)
      .concat(subgraphSlice.middleware),
});

setupListeners(globalStore.dispatch);

export type GlobalAppState = ReturnType<typeof globalStore.getState>;
export default globalStore;
