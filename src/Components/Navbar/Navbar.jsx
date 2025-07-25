import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'; 
const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className='logo'>Suyog Bhandari</h1>
    <Link to="/">
    </Link>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/project">Project</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/products">Products</Link>
        <Link to="/login">Login</Link>

      <div>
        
      </div>
     </div>
  
  )
}
export default Navbar;