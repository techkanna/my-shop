import axios from 'axios';
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_TOP_LIST_REQUEST,
  PRODUCT_TOP_LIST_SUCCESS,
  PRODUCT_TOP_LIST_FAIL
} from '../constants/productConstents';

export const getTopProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_TOP_LIST_REQUEST })

    const { data } = await axios.get('/products?_limit=3')
    dispatch({ type: PRODUCT_TOP_LIST_SUCCESS, payload: data })

  } catch (error) {
    dispatch({
      type: PRODUCT_TOP_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listProducts = (keyword = '', pageNumber = 1) => async (
  dispatch
) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST })

    const pageRange = {
      start: (pageNumber - 1) * 10,
      end: pageNumber * 10
    }

    const { data } = await axios.get(
      `/products?name_contains=${keyword}&_start=${pageRange.start}&_limit=${pageRange.end}`
    )

    async function getTotalPageCount() {
      const { data } = await axios.get(
        `/products`
      )
      return data.length;
    }

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: {
        products: data,
        pages: Math.ceil(await getTotalPageCount() / 10),
        page: pageNumber
      },
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}