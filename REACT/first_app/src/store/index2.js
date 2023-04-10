import {createStore} from 'redux';
import { configureStore } from '@reduxjs/toolkit';

const reducerFn = (state={counter: 0}, action)=>{
    switch (action.type){
        case 'inc_counter':
            return {counter: state.counter+1};
        case 'dec_counter':
            return {counter: state.counter-1};
        default:
            return state;
    }
}
//  const store= configureStore({reducerFn});

 export default configureStore({
    reducer: reducerFn
  })