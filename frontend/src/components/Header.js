import React from 'react'
import cartSvg from '../assets/cart.svg';
import userSvg from '../assets/user.svg';
import { Route } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import SearchBox from "./SearchBox";

function Header() {
  const userInfo = { name: 'techkanna' };
  const logoutHandler = () => {
    // dispatch(logout())
    console.log('hi');
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand>My shop</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Route render={({ history }) => <SearchBox history={history} />} />
          <Nav className='ml-auto'>
            <LinkContainer to='/cart'>
              <Nav.Link>
                <img src={cartSvg} style={{ width: '0.85rem', verticalAlign: 'text-top' }} alt="cart" /> Cart
                </Nav.Link>
            </LinkContainer>
            {userInfo ? (
              <NavDropdown title={userInfo.name} id='username'>
                <LinkContainer to='/profile'>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                  </NavDropdown.Item>
              </NavDropdown>
            ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <img src={userSvg} style={{ width: '0.85rem', verticalAlign: 'text-top' }} alt="user" /> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
            {userInfo && userInfo.isAdmin && (
              <NavDropdown title='Admin' id='adminmenu'>
                <LinkContainer to='/admin/userlist'>
                  <NavDropdown.Item>Users</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/admin/productlist'>
                  <NavDropdown.Item>Products</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/admin/orderlist'>
                  <NavDropdown.Item>Orders</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
