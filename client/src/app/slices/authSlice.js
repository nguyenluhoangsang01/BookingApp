import { createSlice } from "@reduxjs/toolkit";
import { login } from "../api/authApi";
import { LOCAL_STORAGE_USER } from "../api/constants";

const initialState = {
  user: JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER)) || null,
  loading: false,
  error: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerReducer: (state, { payload }) => {},
    loginReducer: (state, { payload }) => {
      if (payload.success) {
        state.user = payload.user;
        state.loading = false;
        state.error = "";
        localStorage.setItem(LOCAL_STORAGE_USER, JSON.stringify(payload.user));
      } else {
        state.user = null;
        state.loading = false;
        state.error = payload.message;
      }
    },
    logoutReducer: (state, { payload }) => {},
  },
});

export const registerReducerAsync = (form) => async (dispatch) => {
  console.log(form);
};

export const loginReducerAsync = (form, navigate) => async (dispatch) => {
  try {
    const { data } = await login(form);
    if (data.success) {
      dispatch(loginReducer(data));
      navigate("/", { replace: true });
    }
  } catch (error) {
    if (error.response.data) {
      dispatch(loginReducer(error.response.data));
    }
  }
};

export const selectAuth = (state) => state.auth;
export const { registerReducer, loginReducer } = authSlice.actions;
export default authSlice.reducer;
