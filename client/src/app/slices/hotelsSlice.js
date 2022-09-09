import { createSlice } from "@reduxjs/toolkit";
import {
  countHotelByType,
  countHotelsByCity,
  getHotel,
  getHotels,
  getHotelsByCity,
  getHotelsWithFilterTrue,
} from "../api/hotelsApi";

const initialState = {
  data: {
    hotel: {},
    hotels: [],
    hotelTypes: [],
    hotelsByCity: [],
    hotelsWithFilterTrue: [],
  },
  loading: true,
  error: false,
};

export const hotelsSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {
    countHotelsByCityReducer: (state, { payload }) => {
      if (payload.success) {
        // state.data.hotelsByCity = payload.list;
        state.loading = false;
      }
    },
    countHotelByTypeReducer: (state, { payload }) => {
      if (payload.success) {
        state.data.hotelTypes = payload.list;
        state.loading = false;
      }
    },
    getHotelsWithFilterTrueReducer: (state, { payload }) => {
      if (payload.success) {
        state.data.hotelsWithFilterTrue = payload.hotels;
        state.loading = false;
      }
    },
    getHotelsByCityReducer: (state, { payload }) => {
      if (payload.success) {
        state.data.hotelsByCity = payload.hotels;
        state.loading = false;
      }
    },
    getHotelReducer: (state, { payload }) => {
      if (payload.success) {
        state.data.hotel = payload.hotel;
        state.loading = false;
      }
    },
    getHotelRoomReducer: (state, { payload }) => {},
    getHotelsReducer: (state, { payload }) => {
      if (payload.success) {
        state.data.hotels = payload.hotels;
        state.loading = false;
      }
    },
  },
});

export const countHotelsByCityReducerAsync = (query) => async (dispatch) => {
  try {
    const { data } = await countHotelsByCity(query);
    if (data.success) {
      dispatch(countHotelsByCityReducer(data));
    }
  } catch (error) {
    console.log(error);
  }
};

export const countHotelByTypeReducerAsync = () => async (dispatch) => {
  try {
    const { data } = await countHotelByType();
    if (data.success) {
      dispatch(countHotelByTypeReducer(data));
    }
  } catch (error) {
    console.log(error);
  }
};

export const getHotelsWithFilterTrueReducerAsync =
  (query) => async (dispatch) => {
    try {
      const { data } = await getHotelsWithFilterTrue(query);
      if (data.success) {
        dispatch(getHotelsWithFilterTrueReducer(data));
      }
    } catch (error) {
      console.log(error);
    }
  };

export const getHotelsByCityReducerAsync =
  (destination, minPrice, maxPrice) => async (dispatch) => {
    try {
      const { data } = await getHotelsByCity(destination, minPrice, maxPrice);
      dispatch(getHotelsByCityReducer(data));
    } catch (error) {
      console.log(error);
    }
  };

export const getHotelReducerAsync = (id) => async (dispatch) => {
  try {
    const { data } = await getHotel(id);
    dispatch(getHotelReducer(data));
  } catch (error) {
    console.log(error);
  }
};

export const getHotelRoomReducerAsync = (id) => async (dispatch) => {
  console.log(id);
};

export const getHotelsReducerAsync = () => async (dispatch) => {
  try {
    const { data } = await getHotels();
    dispatch(getHotelsReducer(data));
  } catch (error) {
    console.log(error);
  }
};

export const selectHotels = (state) => state.hotels;
export const {
  countHotelsByCityReducer,
  countHotelByTypeReducer,
  getHotelsWithFilterTrueReducer,
  getHotelsByCityReducer,
  getHotelReducer,
  getHotelRoomReducer,
  getHotelsReducer,
} = hotelsSlice.actions;
export default hotelsSlice.reducer;
