import products from './products';
import categories from './categories';
import cart from './cart';

import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

let reducers = combineReducers({ categories, products, cart });

const store = () => {
	return createStore(reducers, composeWithDevTools());
};

export default store();
