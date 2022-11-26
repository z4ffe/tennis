import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './routes/routes';
import {Provider} from "react-redux";
import {store} from "./store/store";
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	  <Provider store={store}>
		 <Routes/>
	  </Provider>
);
