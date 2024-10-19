import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import "../styles/Register.css";
const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    membership: '',
    role: '',
  });

  const [error, setError] = useState('');
  const [redirectToBookList, setRedirectToBookList] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/signup', formData); // Adjust API endpoint as needed
      if (res.data.success) {
        setRedirectToBookList(true); // Trigger redirection to Book List page
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    }
  };

  if (redirectToBookList) {
    return <Navigate to="/booklist" />; // Redirect to Book List page
  }

  return (
    <div className="signup-container">
      <h2>Register</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="membership">Membership:</label>
          <select
            id="membership"
            name="membership"
            value={formData.membership}
            onChange={handleChange}
            required
          >
            <option value="6 months">6 months</option>
            <option value="1 year">1 year</option>
            <option value="2 years">2 years</option>
          </select>
        </div>
        <div>
          <label htmlFor="role">Role:</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
