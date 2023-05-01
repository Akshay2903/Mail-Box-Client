import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isLogin: false,
  idToken: localStorage.getItem("idToken"),
};

const authSlice = createSlice({
  name: "authenticationSlice",

  initialState: initialAuthState,

  reducers: {
    login(state, action) {
      localStorage.setItem("idToken", action.payload);

      state.isLogin = true;

      state.idToken = action.payload;
    },

    logout(state) {
      localStorage.removeItem("idToken");
      localStorage.removeItem("userEmail");
      localStorage.removeItem("email");

      state.isLogin = false;

      state.idToken = null;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
