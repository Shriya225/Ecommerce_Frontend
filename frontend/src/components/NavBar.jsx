import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import "./NavBar.css";
import bagIcon from "../assets/cart_icon.png";
import { setCartCount } from '../redux/cartCountSlice';
import { useCartQuery } from '../redux/apiSlice';
import { useEffect } from 'react';
const NavBar = () => {
  console.log("navbar relaoding...");
  const accessToken = useSelector(state => state.auth.accessToken);
  const cartCount = useSelector(state => state.cartCount.count)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, isSuccess } = useCartQuery();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
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
          <Link to="/orders">
            <button>Orders</button>
          </Link>
          <Link to="/collection">
            <FaSearch size={18} />
          </Link>
          {accessToken &&
            <Link to="/cart" className="position-relative d-inline-block">
              <img src={bagIcon} alt="Cart" width={24} height={24} />
              <span className="cart-badge">{cartCount}</span>
            </Link>}

          {accessToken ? <button onClick={handleLogout}>logout</button> : <Link to="/login"><FaUser size={18} />  </Link>}
          {/* <FaUser size={18} /> */}

        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
