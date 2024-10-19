import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const role = localStorage.getItem('role');  // Check if the user is an admin or user

  return (
    <div className="container">
      <h2>Welcome to the Library Management System</h2>
      {role === 'admin' && (
        <div>
          <Link to="/add-book" className="btn btn-primary">
            Add New Book
          </Link>
          <Link to="/transactions" className="btn btn-secondary">
            View Transactions
          </Link>
        </div>
      )}
      <Link to="/books" className="btn btn-info">
        View Books
      </Link>
    </div>
  );
};

export default Dashboard;