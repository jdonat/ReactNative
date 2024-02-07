//unitsSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  unitsSystem: false,
}
export const unitsSlice = createSlice({
  name: 'unitsHandler',
  initialState,
  reducers: {
    unitsAction: (state) => {
        state.unitsSystem = !state.unitsSystem
        return state
    },
  },
})

export const { unitsAction } = unitsSlice.actions;
export default unitsSlice.reducer;