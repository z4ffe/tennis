import {createSlice} from "@reduxjs/toolkit";
import {fetchAllMatches, addMatch} from "../thunks/resultsThunk";

export const resultsSlice = createSlice({
	  name: 'results',
	  initialState: {
		 matches: [],
		 loading: false,
	  },
	  reducers: {},
	  extraReducers: builder => {
		 builder.addCase(fetchAllMatches.pending, (state, action) => {
			state.loading = true
		 })
		 builder.addCase(fetchAllMatches.fulfilled, (state, action) => {
			state.loading = false
			state.matches = action.payload
		 })
		 builder.addCase(fetchAllMatches.rejected, (state, action) => {
			state.loading = false
		 })
	  }
   }
)

export default resultsSlice.reducer
