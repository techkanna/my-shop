import axios from 'axios';
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_TOP_LIST_REQUEST,
  PRODUCT_TOP_LIST_SUCCESS,
  PRODUCT_TOP_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL
} from '../constants/productConstents';

export const getTopProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_TOP_LIST_REQUEST })

    const { data } = await axios.get('/products?_sort=rating:desc&_limit=3');

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

    let totalPagesToShow;


    const { data } = await axios.get(
      `/products?name_contains=${keyword}&_start=${pageRange.start}&_limit=${pageRange.end}`
    )


    // finding total page count for pagination
    if (keyword) {
      let { data } = await axios.get(
        `/products?name_contains=${keyword}`
      )
      totalPagesToShow = Math.ceil(data.length / 10)
    } else {
      const { data } = await axios.get(
        `/products`
      )
      totalPagesToShow = Math.ceil(data.length / 10)
    }


    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: {
        products: data,
        pages: totalPagesToShow,
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

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST })

    const { data } = await axios.get(`/products/${id}`)

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
