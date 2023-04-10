import {createSlice} from '@reduxjs/toolkit';

const authslice= createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
        user: null
    },
    reducers: {
        login(state){
            state.isLoggedIn=true
        },
        logout(state){
            state.isLoggedIn= false
        }, setuser(state, action){
            state.user= action.payload;
        }
    }
});

 export const authActions= authslice.actions;

 export const authsReducer= authslice.reducer;
