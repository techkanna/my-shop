import React from 'react'
import { Link } from 'react-router-dom';
// import Loader from '../components/Loader';
// import Message from '../components/Message';

function ProductScreen({match}) {
  const id = match.params.id;

  return (
    <div>
      <Link to='/' className='btn btn-light'>
        Go Back
      </Link>
      <h1>product</h1>
      {id}
    </div>
  )
}

export default ProductScreen
