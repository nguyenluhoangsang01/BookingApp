import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./slices/authSlice";
import counterOptionsSliceReducer from "./slices/counterOptionsSlice";
import hotelsSliceReducer from "./slices/hotelsSlice";
import roomsSliceReducer from "./slices/roomsSlice";

export const store = configureStore({
  reducer: {
    counterOptions: counterOptionsSliceReducer,
    hotels: hotelsSliceReducer,
    auth: authSliceReducer,
    rooms: roomsSliceReducer,
  },
});
