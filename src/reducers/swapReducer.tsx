import { Token } from "@constants/TokenList";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SwapPageState = {
  fromToken: Token | undefined;
  toToken: Token | undefined;

  fromModal: boolean;
  toModal: boolean;

  fromInput: number | string;

  rate: number;
};

const swapPageSlice = createSlice({
  name: "SwapPage",
  initialState: {
    fromToken: undefined,
    toToken: undefined,
    fromModal: false,
    toModal: false,
    fromInput: "",
    rate: 0,
  } as SwapPageState,
  reducers: {
    setFromToken: (state, action: PayloadAction<Token | undefined>) => {
      state.fromToken = action.payload
    },
    setToToken: (state, action: PayloadAction<Token | undefined>) => {
      state.toToken = action.payload
    },
    setFromModal: (state, action: PayloadAction<boolean>) => {
      state.fromModal = action.payload
    },
    setToModal: (state, action: PayloadAction<boolean>) => {
      state.toModal = action.payload
    },
    setFromInput: (state, action: PayloadAction<string | number>) => {
      state.fromInput = action.payload
    },
    setRate: (state, action: PayloadAction<number>) => {
      state.rate = action.payload
    },
  },
})

export const reducer = swapPageSlice.reducer
export const SwapPageActions = { ...swapPageSlice.actions }
