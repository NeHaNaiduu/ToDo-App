import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todoSlice'

// Configure Redux store with todoReducer
const store=configureStore({
    reducer :todoReducer
})
export default store
