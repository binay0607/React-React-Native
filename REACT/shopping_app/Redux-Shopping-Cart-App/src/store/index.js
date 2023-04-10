import { configureStore } from "@reduxjs/toolkit";
import { authsReducer } from "./auth_slice";
import { cartReducers } from "./cart_slice";
import { listReducers } from "./list_slice";


const store = configureStore({
    reducer: {
        auth: authsReducer,  //basically the first one is just the name, use store.auth to access
        cart: cartReducers, // here just directly fetched the cartslice
        list: listReducers

    }
})

export default store