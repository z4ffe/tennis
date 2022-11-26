import {configureStore} from "@reduxjs/toolkit";
import resultsSlice from "./reducers/results";
import siteReducer from "./reducers/site"

export const store = configureStore({
   reducer: {
	  results: resultsSlice,
	  site: siteReducer
   }
})
