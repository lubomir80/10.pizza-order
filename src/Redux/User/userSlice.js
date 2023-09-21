import { createSlice } from '@reduxjs/toolkit'


const initialState = {
   username: ""
}

const userSlice = createSlice({
   name: "user",
   initialState,
   reducers: {
      updateName(state, { payload }) {
         state.username = payload
      }
   },
})


export const { updateName } = userSlice.actions
export default userSlice.reducer