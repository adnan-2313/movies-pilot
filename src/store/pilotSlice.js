import { createSlice } from "@reduxjs/toolkit";

const pilotSlice = createSlice({
  name: "pilot",
  initialState: {
    showPilotSearch: false,
    movieName: [],
    movieResults: null,
  },
  reducers: {
    togglePilotSearchView: (state) => {
      state.showPilotSearch = !state.showPilotSearch;
    },
    addSearchMovies: (state, action) => {
      const { movieName, movieResults } = action.payload;
      state.movieName = movieName;
      state.movieResults = movieResults;
    },
  },
});

export const { togglePilotSearchView, addSearchMovies } = pilotSlice.actions;
export default pilotSlice.reducer;
