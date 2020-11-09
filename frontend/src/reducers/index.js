import isLogged from "./isLogged";
import products from "./products";
import { combineReducers } from 'redux'

const allReducers = combineReducers({
  isLogged,
  products
})

export default allReducers;