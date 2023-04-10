import {createSlice} from '@reduxjs/toolkit';
import storeData from '../data/storeData';
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userInfo: null,
    isLoggedIn: false,
  },
  reducers: {
    loginUser(state, action) {
      state.userInfo = action.payload;
      state.isLoggedIn = true;
      return state;
    },
  },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
