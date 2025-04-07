import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';
import "./NavBar.css"; // For minor custom adjustments
const NavBar = () => {
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
          <FaSearch size={18} />
          <Link to="/login">
            <FaUser size={18} />
          </Link>
          <FaShoppingCart size={18} />
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
