import axios from 'axios'
import {
  // USER_DETAILS_FAIL,
  // USER_DETAILS_REQUEST,
  // USER_DETAILS_SUCCESS,
  USER_DETAILS_RESET,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS
} from '../constants/userConstants'


export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      '/auth/local/register',
      { username: name, email, password },
      config
    )


    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: { ...data.user, token: data.jwt },
    })

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: { ...data.user, token: data.jwt },
    })

    localStorage.setItem('userInfo', JSON.stringify({ ...data.user, token: data.jwt }))
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message[0].messages[0].message
          : error.message,
    })
  }
}

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      '/auth/local',
      { identifier: email, password },
      config
    )

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: { ...data.user, token: data.jwt },
    })

    localStorage.setItem('userInfo', JSON.stringify({ ...data.user, token: data.jwt }))
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message[0].messages[0].message
          : error.message,
    })
  }
}

export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo')
  localStorage.removeItem('cartItems')
  localStorage.removeItem('shippingAddress')
  localStorage.removeItem('paymentMethod')
  dispatch({ type: USER_LOGOUT })
  dispatch({ type: USER_DETAILS_RESET })
  // dispatch({ type: ORDER_LIST_MY_RESET })
  // dispatch({ type: USER_LIST_RESET })
  document.location.href = '/login'
}