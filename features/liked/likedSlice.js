import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  idLiked: [],
}
export const likedSlice = createSlice({
  name: 'likedHandler',
  initialState,
  reducers: {
    likedAction: (state, action) => {
        
        let index = state.idLiked.findIndex((el) => el === action.payload)
        if(index != -1)
        {
            state.idLiked.splice(index, 1)
            //console.log("ID : "+action.payload+" IS REMOVED AT INDEX :"+index)
        }  
        else
        {
            state.idLiked.push(action.payload)
            //console.log("ID : "+action.payload+" IS LIKED ? AT INDEX :"+index)
        }
        //console.log("RESULTS : "+state.idLiked)
        return state
    },
  },
})


export const { likedAction } = likedSlice.actions

export default likedSlice.reducer