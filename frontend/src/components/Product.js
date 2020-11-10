import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { getRs, sortText } from '../helper';

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`} style={{ textAlign: 'center', height: '10rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Card.Img src={product.image} style={{ maxWidth: '10rem', maxHeight: '10rem' }} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{sortText(product.name, 30)}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h3'>{getRs(product.price)}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
