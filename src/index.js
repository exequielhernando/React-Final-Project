import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from './redux/store/index'
import './index.css';

import getRoutes from './routes/';

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			{getRoutes()}
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);