import React from 'react'
import OwlCarousel from 'react-owl-carousel2';
import products from '../assets/products';
import cemaraImg from '../assets/canon.jpeg';
import { getRs } from '../helper';

const sliderProducts = products.filter((_, i) => i < 3);

function MainBanner() {
  const options = {
    items: 1,
    nav: true,
    dots: true,
    loop: true,
    navText: ['<', '>']
    // autoplay: true
  };
  return (
    <div className="main-banner">
      <div className="container">
        <OwlCarousel options={options}>
          {sliderProducts.map(product => (
            <CarouselItem key={product._id} name={product.name} img={product.image} price={product.price} />
          ))}
        </OwlCarousel>
      </div>
    </div>
  )
}

function CarouselItem({ name, price, img }) {
  return (
    <div className='slide-item'>
      <h1>{`${name} (${getRs(price)})`}</h1>
      <div className="circle">
        <img src={cemaraImg} alt="cemara" />
      </div>
    </div>
  );
}



export default MainBanner
