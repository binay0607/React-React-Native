import {createSlice} from '@reduxjs/toolkit';

const chatslice= createSlice({
    name: 'chat',
    initialState: {
        uid: "",
        user: null
    },
    reducers: {
        setchatuser(state, action){
            state.user= action.payload;
        },
        setchatid(state, action){
            state.uid= action.payload
        }
    }
});

 export const chatsActions= chatslice.actions;

 export const chatsReducer= chatslice.reducer;
