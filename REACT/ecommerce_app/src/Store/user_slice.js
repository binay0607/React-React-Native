import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    userName: "Login",
    userUrl: "",
  },
  reducers: {
    setuser(state, action) {
      state.isLoggedIn = true;
      state.userName = action.payload;
    },
    setUrl(state, action) {
      state.userUrl = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
export const userReducers = userSlice.reducer;
