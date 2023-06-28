import {createReducer} from '@reduxjs/toolkit'

const reducer = createReducer({c:0},{
    increment: (state,action)=>{
        state.c += 1; 
    },

    incrementByUser: (state,action)=>{
        state.c = state.c + action.payload; 
    },

    decrement: (state,action)=>{
        state.c -= 1; 
    },

    decrementByUser: (state,action)=>{
        state.c -= action.payload; 
    },
    
})



export default reducer