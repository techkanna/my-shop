import { createStore, applyMiddleware } from "redux";
import allReducers from "./reducers";
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
}

const middlewares = [thunk]
const store = createStore(
  allReducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
)

export default store;