import { createStore, applyMiddleware } from "redux";
import allReducers from "./reducers";
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";


const middlewares = [thunk]
const store = createStore(allReducers, composeWithDevTools(applyMiddleware(...middlewares)))

export default store;