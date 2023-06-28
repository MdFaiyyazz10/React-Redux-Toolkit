import {configureStore} from '@reduxjs/toolkit'
import reducer from './reducer';


const store = configureStore({
    reducer:{
        firstReducer: reducer,
    }
})

export default store;