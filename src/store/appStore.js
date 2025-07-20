import { configureStore } from "@reduxjs/toolkit";
import userRducer from "./userSlice";
import feedReducer from "./feedSlice";
import connectionReducer from "./connectionSlice";
const appStore = configureStore({
  reducer: {
    User: userRducer,
    feed: feedReducer,
    Connection: connectionReducer,
  },
});

export default appStore;
