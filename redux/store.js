import { configureStore } from '@reduxjs/toolkit'
import likedReducer from '../features/liked/likedSlice'

export const store = configureStore({
  reducer: {
   likedHandler: likedReducer,
  },
})