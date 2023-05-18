import { Token } from "@constants/TokenList";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SubgraphDexPair } from "types/QueryTypes";

export type SwapPageState = {
  fromToken: Token | undefined;
  toToken: Token | undefined;

  fromModal: boolean;
  toModal: boolean;

  fromInput: number | string;

  rate: number;
  pair: SubgraphDexPair | undefined,

  isMoreInfoOpen: boolean;
};

const swapPageSlice = createSlice({
  name: "SwapPage",
  initialState: {
    fromToken: undefined,
    toToken: undefined,
    fromModal: false,
    toModal: false,
    isMoreInfoOpen: true,
    fromInput: "",
    rate: 0,
    pair: undefined,
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
    setSwapMoreInfoCollapsible: (state, action: PayloadAction<boolean>) => {
      state.isMoreInfoOpen = action.payload
    },
    setPair: (state, action: PayloadAction<SubgraphDexPair | undefined>) => {
      state.pair = action.payload
    },
  },
})

export const swapReducer = swapPageSlice.reducer
export const swapInitialState = swapPageSlice.getInitialState()
export const SwapPageActions = { ...swapPageSlice.actions }
