import axios from 'axios'
export const getUsers = () => async (dispatch) => {
  try {
    dispatch({ type: 'GETUSERSREQ' })

    const { data } = await axios.get('/products')
    dispatch({ type: 'GETUSERS', payload: data })

  } catch (error) {
    dispatch({
      type: 'ERRGETUSERS',
      payload: error.response && error.response.data[0].messages[0]
        ? error.response.data[0].messages[0].message
        : error.message,
    })
    console.error(error);
  }
}