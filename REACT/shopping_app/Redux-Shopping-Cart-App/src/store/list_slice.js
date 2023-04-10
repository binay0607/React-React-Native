import { createSlice } from "@reduxjs/toolkit";

const listSlice= createSlice({
    name: 'list',
    initialState: {
        listItems: []
    },
    reducers: {
        addToList(state, action){
            
            state.listItems= action.payload
    
        },
        removeItem(state, action){
            const name= action.payload
            state.listItems= state.listItems.filter(item => item.author !==name);
        }
        
        
    }
});


export const listActions= listSlice.actions;
export const listReducers= listSlice.reducer;

































