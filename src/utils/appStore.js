import { configureStore } from "@reduxjs/toolkit";
import userRducer from "./userSlice";
const appStore = configureStore({
  reducer: {
    User: userRducer,
  },
});

export default appStore;
