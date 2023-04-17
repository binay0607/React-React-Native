import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    itemList: [],
  },
  reducers: {
    addToFavorite(state, action) {
      console.log(action.payload);
      state.itemList.push(action.payload);
    },
    removeFromFavorite(state, action) {
      state.itemList = state.itemList.filter(
        (item) => item.id !== action.payload
      );
    },
    cleanFavorite(state, action) {
      state.itemList = [];
    },
  },
});

export const favoriteActions = favoriteSlice.actions;
export const favoriteReducers = favoriteSlice.reducer;
