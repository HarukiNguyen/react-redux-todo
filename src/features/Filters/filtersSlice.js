import { createSlice } from "@reduxjs/toolkit";

export const status = {
  All: "all",
  Active: "active",
  Completed: "completed",
};

const initialState = "all";

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilterStatus(state, action) {
      return action.payload;
    },
  },
});

export const selectFilterStatus = (state) => state.filters;

export const { changeFilterStatus } = filtersSlice.actions;

export default filtersSlice.reducer;
