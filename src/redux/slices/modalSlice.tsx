import { createSlice } from "@reduxjs/toolkit"

export interface modalState {
  networkModalState: boolean
}

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    networkModalState: false,
  },
  reducers: {
    toggleNetworkModal: (state) => {
      state.networkModalState = !state.networkModalState
    }
  },
})


export const {
  toggleNetworkModal,
} = modalSlice.actions

export const modalReducer = modalSlice.reducer
