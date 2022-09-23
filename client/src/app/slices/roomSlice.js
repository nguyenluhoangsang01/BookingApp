import { createSlice } from "@reduxjs/toolkit";
import { updateRoomAvailability } from "../api/roomApi";

const initialState = {
  success: false,
};

export const roomSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {
    updateRoomReducer: (state, { payload }) => {
      if (payload.success) {
        state.success = true;
      }
    },
  },
});

export const updateRoomReducerAsync = (id, dates) => async (dispatch) => {
  try {
    const { data } = await updateRoomAvailability(id, dates);
    dispatch(updateRoomReducer(data));
  } catch (error) {
    console.log(error);
  }
};

export const selectRooms = (state) => state.rooms;
export const { updateRoomReducer } = roomSlice.actions;
export default roomSlice.reducer;
