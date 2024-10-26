import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../styles/Login.css";
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Ensure `withCredentials` is included to send cookies
      const response = await axios.post(
        'http://localhost:8080/login',
        { email, password },
        { withCredentials: true }
      );

      // Check if response contains success flag
      if (response.data.success) {
        if (response.data.token) {
          localStorage.setItem('token', response.data.token);
        }
        alert('Login successful!');
        navigate('/home');
      } else {
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error during login:', error);

      // Additional error information
      if (error.response) {
        // Server responded with a status outside 2xx range
        console.error('Server error:', error.response.data);
        alert(`Error: ${error.response.data.failure || 'Server error occurred'}`);
      } else if (error.request) {
        // No response from the server
        console.error('No response received:', error.request);
        alert('No response from server. Check server or network connection.');
      } else {
        console.error('Error setting up request:', error.message);
        alert('An unexpected error occurred.');
      }
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      {/* <p className="mt-3">
        Don't have an account? <Link to="/register">Register here</Link>
      </p> */}
    </div>
  );
};

export default Login;
