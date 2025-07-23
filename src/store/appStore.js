import { configureStore } from "@reduxjs/toolkit";
import userRducer from "./userSlice";
import feedReducer from "./feedSlice";
import connectionReducer from "./connectionSlice";
import requestReducer from "./requestSlice";
const appStore = configureStore({
  reducer: {
    User: userRducer,
    feed: feedReducer,
    Connection: connectionReducer,
    Request: requestReducer,
  },
});

export default appStore;
