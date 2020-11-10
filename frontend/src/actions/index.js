import axios from 'axios';
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_TOP_LIST_REQUEST,
  PRODUCT_TOP_LIST_SUCCESS,
  PRODUCT_TOP_LIST_FAIL
} from '../constants/productConstents';
export const getUsers = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_TOP_LIST_REQUEST })

    const { data } = await axios.get('/products')
    dispatch({ type: PRODUCT_TOP_LIST_SUCCESS, payload: data })

  } catch (error) {
    dispatch({
      type: PRODUCT_TOP_LIST_FAIL,
      payload: error.response && error.response.data[0].messages[0]
        ? error.response.data[0].messages[0].message
        : error.message,
    })
    console.error(error);
  }
}

export const listProducts = (keyword = '', pageNumber = '') => async (
  dispatch
) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST })

    const { data } = await axios.get(
      `/products`
    )

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data[0].messages[0]
          ? error.response.data[0].messages[0].message
          : error.message,
    })
    console.error(error);
  }
}
