import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';
import { FaSearch, FaUser, FaShoppingCart, FaBox } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import "./NavBar.css";
import bagIcon from "../assets/cart_icon.png";
import { setCartCount } from '../redux/cartCountSlice';
import { useCartQuery } from '../redux/apiSlice';
import { useEffect } from 'react';
import { useLogoutMutation } from '../redux/apiSlice';

const NavBar = () => {
  console.log("navbar relaoding...");
  const accessToken = useSelector(state => state.auth.accessToken);
  const cartCount = useSelector(state => state.cartCount.count)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, isSuccess } = useCartQuery();
  const [logoutApi, { isLoading, error }] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logoutApi().unwrap();  // call backend logout API
      dispatch(logout());
      navigate('/login');
    } catch (err) {
      console.error('Failed to logout:', err);
      dispatch(logout());
      navigate('/login');
    }

  };
  useEffect(() => {
    if (isSuccess && data?.data) {
      const count = data.data.reduce((acc, item) => acc + item.quantity, 0);
      dispatch(setCartCount(count));
    }
  }, [isSuccess, data, dispatch]);

  return (
    <Navbar expand="md" bg="light" variant="light" className="py-3 px-4">
      <Container fluid>
        {/* Left Logo */}
        <Navbar.Brand as={NavLink} to="/" className="fw-bold fs-3">
          ShopEasy<span style={{ color: '#d69dff' }}>.</span>
        </Navbar.Brand>

        {/* Right Icons - Mobile */}
        <div className="d-flex d-md-none gap-3 order-md-2 ms-auto">
          <FaSearch size={18} />
          <FaUser size={18} />
          <FaShoppingCart size={18} />
        </div>

        {/* Toggle */}
        <Navbar.Toggle aria-controls="navbar-content" className="ms-2" />

        {/* Center Navigation Links */}
        <Navbar.Collapse id="navbar-content" className="justify-content-center">
          <div className="d-flex flex-column flex-md-row gap-4 text-center">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `custom-nav ${isActive ? 'active' : ''}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/collection"
              className={({ isActive }) =>
                `custom-nav ${isActive ? 'active' : ''}`
              }
            >
              Collection
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `custom-nav ${isActive ? 'active' : ''}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contactUs"
              className={({ isActive }) =>
                `custom-nav ${isActive ? 'active' : ''}`
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                `custom-nav border px-3 rounded-pill ${isActive ? 'active' : ''}`
              }
            >
              Admin Panel
            </NavLink>
          </div>
        </Navbar.Collapse>

        {/* Right Icons - Desktop */}
        <div className="d-none d-md-flex gap-4 order-md-3">

         
          <Link to="/collection">
            <FaSearch size={18} />
          </Link>
          {accessToken &&
            <Link to="/cart" className="position-relative d-inline-block">
              <img src={bagIcon} alt="Cart" width={24} height={24} />
              <span className="cart-badge">{cartCount}</span>
            </Link>}
              {accessToken && (
  <Link
    to="/orders"
  >
     <button
           
              style={{
                backgroundColor: 'black',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                padding: '6px 12px',
                cursor: 'pointer',
              }}
            >
             Orders
            </button>
  </Link>
)}

          {accessToken ? (
            <button
              onClick={handleLogout}
              style={{
                backgroundColor: 'black',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                padding: '6px 12px',
                cursor: 'pointer',
              }}
            >
              Logout
            </button>
        ) : (
            <Link
              to="/login"
              style={{
                color: 'black',
                width: '28px',
                height: '28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <FaUser size={18} />
            </Link>
          )}

          {/* <FaUser size={18} /> */}

        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
