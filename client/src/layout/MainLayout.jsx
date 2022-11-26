import React from 'react';
import '../assets/styles/index.scss'
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const MainLayout = (props) => {
   return (
	  <div className="container">
		 {props.children}
		 <ToastContainer limit={3}/>
	  </div>
   );
};

export default MainLayout;
