import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  adult: 2,
  children: 0,
  room: 1,
  days: 1,
  dates: [
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ],
};

export const counterOptionsSlice = createSlice({
  name: "counterOptions",
  initialState,
  reducers: {
    incrementAdult: (state, { payload }) => {
      state.adult += 1;
      if (payload + 1 > 0) state.room = 1;
    },
    decrementAdult: (state, { payload }) => {
      if (state.adult > 0) state.adult -= 1;
      if (payload - 1 === 0) {
        state.children = 0;
        state.room = 0;
      }
    },

    incrementChildren: (state, { payload }) => {
      if (payload > 0) state.children += 1;
    },
    decrementChildren: (state) => {
      if (state.children > 0) state.children -= 1;
    },

    incrementRoom: (state, { payload }) => {
      if (payload > 0) state.room += 1;
    },
    decrementRoom: (state) => {
      if (state.room > 0) state.room -= 1;
    },

    countDays: (state, { payload }) => {
      state.days = payload + 1;
    },
    getDates: (state, { payload }) => {
      state.dates = payload;
    },
  },
});

export const selectCounterOptions = (state) => state.counterOptions;
export const {
  incrementAdult,
  decrementAdult,
  incrementChildren,
  decrementChildren,
  incrementRoom,
  decrementRoom,
  countDays,
  getDates,
} = counterOptionsSlice.actions;
export default counterOptionsSlice.reducer;
