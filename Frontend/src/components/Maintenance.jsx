import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Maintenance.css';
import Navbar from '../Pages/Navbar.jsx';

const Maintenance = () => {
  return (
    <>
    <Navbar/>
    <div className="maintenance-container">
      <Link to="/register" className="box">
        <h3>Add User</h3>
      </Link>
      <Link to="/update-membership" className="box">
        <h3>Update Membership</h3>
      </Link>
      <Link to="/add-book" className="box">
        <h3>Add New Book</h3>
      </Link>
    </div>
    </>
  );
};

export default Maintenance;
