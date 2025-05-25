import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import TopBar from './components/TopBar';
import Sidebar from './components/Sidebar';
import './App.css';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <TopBar />
      <Sidebar />
      <div className="main-content">
        <h2>Welcome Admin</h2>
        <Outlet/>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default App;
