import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';
import { FaSearch, FaUser } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import "../styles/NavBar.css";
import '../styles/Heading.css';
import bagIcon from "../assets/cart_icon.png";
import { setCartCount } from '../redux/cartCountSlice';
import { useCartQuery } from '../redux/apiSlice';
import { useEffect } from 'react';
import { useLogoutMutation } from '../redux/apiSlice';

const NavBar = () => {

  const accessToken = useSelector(state => state.auth.accessToken);
  const cartCount = useSelector(state => state.cartCount.count)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApi, { isLoading, error }] = useLogoutMutation();
  const { data, isSuccess, refetch } = useCartQuery(undefined, {
    skip: !accessToken, // skip query if no token
  });
  
  useEffect(() => {
    if (accessToken) {
      refetch().then((res) => {
        if (res.data?.data) {
          const count = res.data.data.reduce((acc, item) => acc + item.quantity, 0);
          dispatch(setCartCount(count));
        }
      });
    } else {
      dispatch(setCartCount(0));
    }
  }, [accessToken, refetch, dispatch]);

  const handleLogout = async () => {
    try {
      await logoutApi().unwrap();  
      dispatch(logout());
      navigate('/login');
    } catch (err) {

      dispatch(logout());
      navigate('/login');
    }
  };

  return (
    <Navbar expand="md" bg="light" variant="light" className="py-3 px-4 font">
      <Container fluid>
        {/* Left Logo */}
        <Navbar.Brand as={NavLink} to="/" className="fw-bold fs-3 me-auto me-md-0">
          ShopNest
        </Navbar.Brand>

        {/* Toggle and Right Icons - Mobile */}
        <div className="d-flex align-items-center gap-3">
          <Navbar.Toggle aria-controls="navbar-content" className="ms-2" />
          
          <div className="d-flex d-md-none gap-3">
            <Link to="/collection" className="d-flex align-items-center">
              <FaSearch size={18} />
            </Link>
            {accessToken &&
              <Link to="/cart" className="position-relative d-inline-block d-flex align-items-center">
                <img src={bagIcon} alt="Cart" width={24} height={24} />
                <span className="cart-badge">{cartCount}</span>
              </Link>}
            {accessToken && (
              <Link to="/orders" className="d-flex align-items-center">
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
          </div>
        </div>

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
              HOME
            </NavLink>
            <NavLink
              to="/collection"
              className={({ isActive }) =>
                `custom-nav ${isActive ? 'active' : ''}`
              }
            >
              COLLECTION
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `custom-nav ${isActive ? 'active' : ''}`
              }
            >
              ABOUT
            </NavLink>
            <a href={`${import.meta.env.VITE_ADMIN_PANEL_URL}/login`} className='custom-nav border px-3 rounded-pill'>Admin Panel</a>
          </div>
        </Navbar.Collapse>

        {/* Right Icons - Desktop */}
        <div className="d-none d-md-flex gap-4">
          <Link to="/collection">
            <FaSearch size={18} />
          </Link>
          {accessToken &&
            <Link to="/cart" className="position-relative d-inline-block">
              <img src={bagIcon} alt="Cart" width={24} height={24} />
              <span className="cart-badge">{cartCount}</span>
            </Link>}
          {accessToken && (
            <Link to="/orders">
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
        </div>
      </Container>
    </Navbar>
  );
};
export default React.memo(NavBar);