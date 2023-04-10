import { configureStore } from "@reduxjs/toolkit";
import { authsReducer } from "./auth_slice";
import { chatsReducer } from "./chat_slice";



const store = configureStore({
    reducer: {
        auth: authsReducer,
        chat: chatsReducer
    }
})

export default store