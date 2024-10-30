import { createSlice } from "@reduxjs/toolkit";

const pilotSlice = createSlice({
  name: "pilot",
  initialState: {
    showPilotSearch: false,
  },
  reducers: {
    togglePilotSearchView: (state, action) => {
      state.showPilotSearch = !state.showPilotSearch;
    },
  },
});

export const { togglePilotSearchView } = pilotSlice.actions;
export default pilotSlice.reducer;
