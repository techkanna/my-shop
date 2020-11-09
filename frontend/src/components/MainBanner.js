import React, { useEffect } from 'react'
// import { getRs } from '../helper';
import { useSelector, useDispatch } from 'react-redux'
import { getUsers } from "../actions";


function MainBanner() {
  const dispatch = useDispatch();
  const storedProducts = useSelector(state => state.products)
  const { loading, products, error } = storedProducts;

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  if (loading) return <h1>loading</h1>

  if (error) return <h1>oops! something went wrong. try refreshing...</h1>

  return (
    <div className="main-banner">
      <div className="container">

        <pre>
          {JSON.stringify(products, null, 2)}
        </pre>

      </div>
    </div>
  )
}

// function CarouselItem({ name, price, img }) {
//   return (
//     <div className='slide-item'>
//       <h1>{`${name} (${getRs(price)})`}</h1>
//       <div className="circle">
//         <img src={img} alt="cemara" />
//       </div>
//     </div>
//   );
// }



export default MainBanner
