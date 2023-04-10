import {configureStore} from '@reduxjs/toolkit';

import {cartReducers} from './cart_slice';

const store = configureStore({
  reducer: {
    cart: cartReducers,
  },
});

export default store;
