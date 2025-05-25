import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiPlusSquare, FiList, FiShoppingBag } from 'react-icons/fi';
import './sideBar.css';

const Sidebar = () => {
  return (
    <div className="admin-sidebar">
      <h5 className="sidebar-title">
        {/* <span className="sidebar-logo-icon">🛍️</span>
        <span className="sidebar-logo-text">FOREVER.<small>ADMIN PANEL</small></span> */}
      </h5>
      <nav className="sidebar-links">
        <NavLink to="/addProduct" className="sidebar-link">
          <FiPlusSquare className="sidebar-icon" />
          <span className="sidebar-text">Add Items</span>
        </NavLink>
        <NavLink to="/list" className="sidebar-link">
          <FiList className="sidebar-icon" />
          <span className="sidebar-text">List Items</span>
        </NavLink>
        <NavLink to="/orders" className="sidebar-link">
          <FiShoppingBag className="sidebar-icon" />
          <span className="sidebar-text">Orders</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
