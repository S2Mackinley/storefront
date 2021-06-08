import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/index';
import App from './App';
import './index.css';

const Entry = () => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
};

const root = document.getElementById('root');
ReactDOM.render(<Entry />, root);
