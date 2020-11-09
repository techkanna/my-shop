const productsReducer = (state = false, action) => {
  switch (action.type) {
    case 'SIGNIN':
      return !this.state;

    default:
      return state;
  }
}

export default productsReducer;

