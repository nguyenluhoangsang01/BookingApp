import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "../api/authApi";
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
    registerReducer: (state, { payload }) => {
      if (payload.success) {
        state.loading = false;
        state.error = "";
      } else {
        state.loading = false;
        state.error = payload.message;
      }
    },
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
    logoutReducer: (state) => {
      state.user = null;
      state.loading = false;
      state.error = "";
      localStorage.removeItem(LOCAL_STORAGE_USER);
    },
  },
});

export const registerReducerAsync = (form, navigate) => async (dispatch) => {
  try {
    const { data } = await register(form);
    if (data.success) {
      dispatch(registerReducer(data));
      navigate("/login", { replace: true });
    }
  } catch (error) {
    if (error.response.data) {
      dispatch(registerReducer(error.response.data));
    }
  }
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

export const adminLoginReducerAsync = (form, navigate) => async (dispatch) => {
  try {
    const { data } = await login(form);
    if (data.success && data.user.isAdmin) {
      dispatch(loginReducer(data));
      navigate("/admin", { replace: true });
    } else {
      dispatch(
        loginReducer({ success: false, message: "User does not have access" })
      );
    }
  } catch (error) {
    if (error.response.data) {
      dispatch(loginReducer(error.response.data));
    }
  }
};

export const selectAuth = (state) => state.auth;
export const { registerReducer, loginReducer, logoutReducer } =
  authSlice.actions;
export default authSlice.reducer;
