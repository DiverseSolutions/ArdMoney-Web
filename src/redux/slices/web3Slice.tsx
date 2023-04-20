import { createSlice } from "@reduxjs/toolkit"

const web3Slice = createSlice({
  name: "web3Slice",
  initialState: {
    hasConnection: false,
    isConnected: false,
    checkedConnection: false,
    currentAccount: undefined,
    accounts: [],
  },
  reducers: {
  },
})

export const {  } = web3Slice.actions

export const web3Reducer = web3Slice.reducer
