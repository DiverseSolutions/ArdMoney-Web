import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface WhiteListState {
  pools: Array<String>;
}

const whiteListSlice = createSlice({
  name: "whitelist",
  initialState: {
    pools: [
      // MONT/ZESC
      "0x6818d4ae9bcec60cbef6daf26ebfafc12d281aae",
      // MONT/ARDM
      "0xcf013f607e6a5bf0ae7860ffe46a23ce1a262839",
    ],
  } as WhiteListState,
  reducers: {},
});

export const {} = whiteListSlice.actions;

export const whiteListReducer = whiteListSlice.reducer;
