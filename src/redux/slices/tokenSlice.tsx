import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Token } from "@constants/TokenList" 

type Web3State = {
  walletList : Array<Token>,
  dexList : Array<Token>,
};

const tokenSlice = createSlice({
  name: "token",
  initialState: {
    walletList : [],
    dexList : [],
  } as Web3State,
  reducers: {
    setWalletList: (state, action: PayloadAction<Array<Token>>) => {
      state.walletList = action.payload;
    },
    setDexList: (state, action: PayloadAction<Array<Token>>) => {
      state.dexList = action.payload;
    },
  },
});

export const { setWalletList,setDexList } = tokenSlice.actions;

export const tokenReducer = tokenSlice.reducer;
