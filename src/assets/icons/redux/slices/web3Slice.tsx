import { createSlice } from "@reduxjs/toolkit"

export interface Web3State {
  hasConnection: boolean,
  isConnected: boolean,
  checkedConnection: boolean,
  currentAccount: string,
  accounts: Array<string>,
}

const web3Slice = createSlice({
  name: "web3Slice",
  initialState: {
    hasConnection: false,
    isConnected: false,
    checkedConnection: false,
    currentAccount: "",
    accounts: [],
  },
  reducers: {
  },
})

export const {  } = web3Slice.actions

export const web3Reducer = web3Slice.reducer
