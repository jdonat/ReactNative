//store.js
import { configureStore } from '@reduxjs/toolkit'
//import { combineReducers } from 'redux'
import likedReducer from '../features/liked/likedSlice'
import unitsReducer from '../features/units/unitsSlice'

export const store = configureStore({
   reducer: {
   likedHandler: likedReducer,
   unitsHandler: unitsReducer,
   }
})