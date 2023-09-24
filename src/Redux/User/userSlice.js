import { createSlice } from '@reduxjs/toolkit'
import { fetchAddress } from './thunks'


const initialState = {
   username: "",
   status: 'idle',
   position: {},
   address: '',
   error: '',
}

const userSlice = createSlice({
   name: "user",
   initialState,
   reducers: {
      updateName(state, { payload }) {
         state.username = payload
      }
   },
   extraReducers: builder => {
      builder
         .addCase(fetchAddress.pending, (state) => {
            state.status = "loading"
         })
         .addCase(fetchAddress.fulfilled, (state, { payload }) => {
            state.position = payload.position
            state.address = payload.address
            state.status = "idle"
         })
         .addCase(fetchAddress.rejected, (state) => {
            state.status = "error"
            state.error = "There was a problem getting your address. Please make sure to fill this field!"
         })
   }
})


export const { updateName } = userSlice.actions
export default userSlice.reducer