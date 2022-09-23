import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./slices/authSlice";
import counterOptionsSliceReducer from "./slices/counterOptionsSlice";
import hotelsSliceReducer from "./slices/hotelsSlice";
import roomSliceReducer from "./slices/roomSlice";

export const store = configureStore({
  reducer: {
    counterOptions: counterOptionsSliceReducer,
    hotels: hotelsSliceReducer,
    auth: authSliceReducer,
    rooms: roomSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
