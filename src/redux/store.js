import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import userReducer from "./userSlice";
import videoReducer from "./videoSlice";
// import { videoApi } from "~/services/videoApi";

export const store = configureStore({
  reducer: {
    user: userReducer,
    video: videoReducer,
    // [videoApi.reducerPath]: videoApi.reducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(videoApi.middleware),
});

// store.subscribe(() => console.log(store.getState()))

setupListeners(store.dispatch);
