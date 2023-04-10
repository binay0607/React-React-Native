import Stack from "../compopnents/Stack"

import { SET_STACK } from "../actions"

function stack(state={}, action){
    switch (action.type){
        case SET_STACK:
            return action.Stack
        default:
            return state
    }
}

export default stack;