import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import pilotReducer from "./pilotSlice";
import appConfigReducer from "./appConfigSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    pilot: pilotReducer,
    appConfig: appConfigReducer,
  },
});

export default appStore;
