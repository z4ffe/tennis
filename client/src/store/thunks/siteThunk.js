import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk('Site/login', async (data) => {
   try {
	  const response = await axios.post('http://localhost:5005/login', {
			user: "zaffe",
			password: "1337"
		 })
	  document.cookie = `x-access-token=${response.data}`;
	  window.location.href = "/"
	  return response.data
   } catch (error) {
	  throw error
   }
})
