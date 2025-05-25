import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import { FiLogOut } from 'react-icons/fi';
import './TopBar.css';

const TopBar = () => {
  const handleLogout = () => {
    // Add your logout logic here
    console.log('User logged out');
    // Typically you would:
    // 1. Clear authentication tokens
    // 2. Redirect to login page
  };

  return (
    <Navbar bg="white" expand="lg" className="admin-topbar">
      <Container fluid>
        <Navbar.Brand href="#" className="admin-brand">
          Admin Panel
        </Navbar.Brand>
        
        <div className="admin-user-info">
          <Button 
            variant="outline-danger" 
            onClick={handleLogout}
            className="logout-btn"
          >
            <FiLogOut className="logout-icon" />
            Logout
          </Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default TopBar;