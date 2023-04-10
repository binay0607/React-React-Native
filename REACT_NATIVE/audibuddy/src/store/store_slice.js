import {createSlice} from '@reduxjs/toolkit';
import storeData from '../data/storeData';
const storeSlice = createSlice({
  name: 'stores',
  initialState: {
    storesInfo: storeData,
  },
  reducers: {
    updateStoreInfo(state, action) {
      const storeId = action.payload;
      //   const store = state.storesInfo.find(item => item.id === storeId);
      //   console.log('got from id', store);
      //   store.isPending = false;
      //   console.log(state.storesInfo);
      state.storesInfo = state.storesInfo.map((item, index) => {
        if (item.id === storeId) {
          item.isPending = false;
        }
        return item;
      });
    },
  },
});

export const storesActions = storeSlice.actions;
export const storesReducer = storeSlice.reducer;
