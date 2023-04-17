import { configureStore } from "@reduxjs/toolkit";

import { cartReducers } from "./cart_slice";
import { favoriteReducers } from "./favorite_slice";
import { laterReducers } from "./later_slice";
import { userReducers } from "./user_slice";

const store = configureStore({
  reducer: {
    cart: cartReducers,
    later: laterReducers,
    user: userReducers,
    favorite: favoriteReducers,
  },
});

export default store;
