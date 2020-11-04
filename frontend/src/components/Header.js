import React from 'react'
import cartSvg from '../assets/cart.svg';
import userSvg from '../assets/user.svg';

function Header() {
  return (
    <header className='main-head'>
      <div className="container">
        <div className="left">
          <button className="logo">MY SHOP</button>
          <form>
            <input type="text" placeholder='Search Products...' />
            <button type="submit">SEARCH</button>
          </form>
        </div>
        <nav className="right">
          <ul>
            <li>
              <button>
                <img src={cartSvg} className='svg-img' alt="cart" />
                <span>CART</span>
              </button>
            </li>
            <li>
              <button>
                <img src={userSvg} className='svg-img' alt="user" />
                <span>SIGN IN</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;
