import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rooms: [],
};

export const roomsSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {
    getRoomsReducer: (state, { payload }) => {},
    getRoomReducer: (state, { payload }) => {},
  },
});

export const selectRooms = (state) => state.rooms;
export const { getRoomsReducer, getRoomReducer } = roomsSlice.actions;
export default roomsSlice.reducer;
