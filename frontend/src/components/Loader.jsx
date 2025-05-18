import React from 'react';
import './Loader.css'; // We'll define the spinner style here

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="spinner" />
    </div>
  );
};

export default Loader;
