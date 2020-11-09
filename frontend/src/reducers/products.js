const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GETUSERSREQ':
      return { loading: true, products: [] };
    case 'GETUSERS':
      return { loading: false, products: action.payload };
    case 'ERRGETUSERS':
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export default productsReducer;