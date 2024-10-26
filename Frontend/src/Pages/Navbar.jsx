import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const [role, setRole] = useState('');

  useEffect(() => {
    // Fetch user data to check role
    const fetchUser = async () => {
      try {
        const response = await axios.get('http://localhost:8080/user', { withCredentials: true });
        setRole(response.data.role); // Set the role based on user data
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    };
    fetchUser();
  }, []);

  const handleLogout= async()=>{
    try{
      const response= await axios.post("http://localhost:8080/logout", { withCredentials: true});
    //   setIsLoggedIn(false);
      if(response.data.success){
        // setUser("");
        // sessionStorage.setItem("message", JSON.stringify({type:"success", text:response.data.success}));
        navigate("/");
        // window.location.reload();
      }
    }
    catch(err){
      console.log("Logout failed", err);
    }
  }

  return (
    <nav className="navbar">
      <div className="logo">Library</div>
      <div className="nav-items">
      {role === 'admin' && <Link to="/maintenance" className="nav-item">Maintenance</Link>}
        <Link to="/reports" className="nav-item">Reports</Link>
        <Link to="/transactions" className="nav-item">Transactions</Link>
        <div className="nav-item" onClick={handleLogout}>Logout</div>
      </div>
    </nav>
  );
};

export default Navbar;

