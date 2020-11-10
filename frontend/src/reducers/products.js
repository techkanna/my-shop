import {
  PRODUCT_TOP_LIST_REQUEST,
  PRODUCT_TOP_LIST_SUCCESS,
  PRODUCT_TOP_LIST_FAIL
} from '../constants/productConstents';
const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_TOP_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_TOP_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_TOP_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export default productsReducer;