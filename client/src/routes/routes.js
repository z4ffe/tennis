import React, {useEffect} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import NewMatch from "../components/NewMatch/NewMatch";
import MainLayout from "../layout/MainLayout";
import Dashboard from "../components/Dashboard/Dashboard";

const routes = () => {
   return (
	  <BrowserRouter>
		 <Header/>
		 <MainLayout>
			<Routes>
			   <Route path="/" element={<Home/>}/>
			   <Route path="new" element={<NewMatch/>}/>
			   <Route path="admin" element={<Dashboard/>}/>
			</Routes>
		 </MainLayout>
		 <Footer/>
	  </BrowserRouter>
   );
};

export default routes;
