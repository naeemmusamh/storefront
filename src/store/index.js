import products from "./products";
import categories from "./categories";

import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

let reducers = combineReducers({categories, products});

const store = () => {
    return createStore(reducers, composeWithDevTools())
}

export default store();