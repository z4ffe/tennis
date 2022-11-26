import {createSlice} from "@reduxjs/toolkit";
import {login} from "../thunks/siteThunk";

export const siteSlice = createSlice({
   name: "site",
   initialState: {
	  token: '',
	  auth: false
   },
   reducers: {},
   extraReducers: builder => {
	  builder.addCase(login.fulfilled, (state, action) => {
		 state.token = action.payload
		 state.auth = true
	  })
	  builder.addCase(login.rejected, (state, action) => {
		 state.auth = true
	  })
   }
})

export default siteSlice.reducer
