import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MaintenanceState {
  swap: boolean;
  staking: boolean;
  pools: boolean;
}

const maintenanceSlice = createSlice({
  name: "maintenance",
  initialState: {
    swap: false,
    staking: false,
    pools: false,
  } as MaintenanceState,
  reducers: {},
});

export const {} = maintenanceSlice.actions;

export const maintenanceReducer = maintenanceSlice.reducer;
