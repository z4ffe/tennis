import React from 'react';
import {useDispatch} from "react-redux";
import {login} from "../../store/thunks/siteThunk";

const Dashboard = () => {
   const dispatch = useDispatch()

   return (
	  <div>
		 <button onClick={() => dispatch(login())}>asdsad</button>
	  </div>
   );
};

export default Dashboard;
