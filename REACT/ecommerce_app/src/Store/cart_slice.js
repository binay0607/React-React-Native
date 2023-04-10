import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemList: [],
    totalQuan: 0,
    showcart: false,
  },
  reducers: {
    addToCart(state, action) {
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
          price: newItem.price,
          catName: newItem.catName,
          quantity: 1,
          totalPrice: newItem.price,
          img: newItem.img,
        });
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.itemList.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.itemList = state.itemList.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
    emptyCart(state, action) {
      state.itemList = [];
    },
    setShowCart(state) {
      state.showcart = !state.showcart;
    },
  },
});
export const cartActions = cartSlice.actions;
export const cartReducers = cartSlice.reducer;
