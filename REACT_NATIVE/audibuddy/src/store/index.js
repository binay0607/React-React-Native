import {configureStore} from '@reduxjs/toolkit';
import {authReducer} from './auth_slice';
import {storesReducer} from './store_slice';
import {getDefaultMiddleware} from '@reduxjs/toolkit';
const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});
const store = configureStore({
  reducer: {
    stores: storesReducer,
    auth: authReducer,
  },
  middleware: customizedMiddleware,
});

export default store;
