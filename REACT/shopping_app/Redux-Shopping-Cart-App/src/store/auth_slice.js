import {createSlice} from '@reduxjs/toolkit';

const authslice= createSlice({
    name: 'auth',
    initialState: {isLoggedIn: false},
    reducers: {
        login(state){
            state.isLoggedIn=true
        },
        logout(state){
            state.isLoggedIn= false
        }
    }
});

 export const authActions= authslice.actions;

 export const authsReducer= authslice.reducer;
