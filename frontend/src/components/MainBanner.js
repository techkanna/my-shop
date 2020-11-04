import React from 'react'
import OwlCarousel from 'react-owl-carousel2';
import products from '../assets/products';

const sliderProducts = products.filter((_, i)=> i< 3);

function CarouselItem() {
  return (
    <div><h1>hallo</h1></div>
  );
}

function MainBanner() {
  const options = {
    items: 1,
    nav: true,
    loop: true,
    // autoplay: true
  };
  return (
    <div className="main-banner">
      <div className="contianer">
        <OwlCarousel options={options}>
          {sliderProducts.map(product => (
            <CarouselItem key={product._id} />
          ))}
        </OwlCarousel>
      </div>
    </div>
  )
}

export default MainBanner
