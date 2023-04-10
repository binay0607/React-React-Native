import { createSlice } from "@reduxjs/toolkit";

const laterSlice = createSlice({
  name: "later",
  initialState: {
    itemList: [],
    totalQuan: 0,
  },
  reducers: {
    addToLater(state, action) {
      const newItem = action.payload;
      const existingItem = state.itemList.find(
        (item) => item.id === newItem.id
      );
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.itemList.push({
          id: newItem.id,
          name: newItem.name,
          catName: newItem.catName,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          img: newItem.img,
          delivery: newItem.delivery,
        });
      }
    },
    removeFromLater(state, action) {
      const id = action.payload;
      const existingItem = state.itemList.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.itemList = state.itemList.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
    emptyLater(state, action) {
      state.itemList = [];
    },
  },
});
export const laterActions = laterSlice.actions;
export const laterReducers = laterSlice.reducer;
