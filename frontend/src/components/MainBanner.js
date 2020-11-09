import React, { useEffect } from 'react'
import OwlCarousel from 'react-owl-carousel2';
import { getRs } from '../helper';
import { useSelector, useDispatch } from 'react-redux'
import { getUsers } from "../actions";

const options = {
  items: 1,
  nav: true,
  dots: true,
  loop: true,
  navText: ['<', '>']
  // autoplay: true
};

function MainBanner() {
  const dispatch = useDispatch();
  const storedProducts = useSelector(state => state.products)
  const { loading, products, error } = storedProducts;

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  if(loading) return <h1>loading</h1>

  if(error) return <h1>oops! something went wrong. try refreshing...</h1>

  return (
    <div className="main-banner">
      <div className="container">

        {/* <pre>
        {JSON.stringify(products, null, 2)}
        </pre> */}
        {/* <OwlCarousel options={options}>
          {products.map(product => (
            <CarouselItem key={product._id} name={product.name} img={product.image} price={product.price} />
          ))}
        </OwlCarousel> */}
      </div>
    </div>
  )
}

function CarouselItem({ name, price, img }) {
  return (
    <div className='slide-item'>
      <h1>{`${name} (${getRs(price)})`}</h1>
      <div className="circle">
        <img src={img} alt="cemara" />
      </div>
    </div>
  );
}



export default MainBanner
