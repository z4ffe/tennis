import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllMatches = createAsyncThunk('Results/fetchAllMatches', async () => {
   try {
	  const response = await axios.get('http://localhost:5005/api/match')
	  return response.data
   } catch (error) {
	  throw error
   }
})

export const addMatch = createAsyncThunk('Results/addMatch', async (data) => {
   try {
	  const response = await axios.post('http://localhost:5005/api/match', {
		 data
	  })
	  return response.data
   } catch (error) {
	  throw {msg: 'Adding task failed', err: error}
   }
})
