import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import { FiLogOut } from 'react-icons/fi';
import './TopBar.css';
import { logout } from '../redux/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../redux/apiSlice';
const TopBar = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const [logoutApi]=useLogoutMutation();
   const handleLogout = async () => {
      try {
        await logoutApi().unwrap();  
        dispatch(logout());
        navigate('/login');
      } catch (err) {
        console.error('Failed to logout:', err);
        dispatch(logout());
      }
  
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