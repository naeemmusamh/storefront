import products from "./products";
import categories from "./categories";
import card from './card.js';

import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

let reducers = combineReducers({categories, products, card});

const store = () => {
    return createStore(reducers, composeWithDevTools())
}

export default store();