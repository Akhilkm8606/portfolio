import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaGithub } from "react-icons/fa6";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='menu-section'>
      <Link to="/" className='logo-section'>
        <span></span>
        <span></span>
        <span>AK</span>
        <h1>Portfolio</h1>
      </Link>
      <div className='menu-icon' onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? 'open' : ''}>
        <li>
          <Link onClick={() => setMenuOpen(!menuOpen)} to="/">Home</Link>
        </li>
        <li>
          <Link onClick={() => setMenuOpen(!menuOpen)} to="/about">About</Link>
        </li>
        <li>
          <Link onClick={() => setMenuOpen(!menuOpen)} to="/skill">Skill</Link>
        </li>
        <li>
          <Link onClick={() => setMenuOpen(!menuOpen)} to="/work">Work</Link>
        </li>
        <li>
          <Link onClick={() => setMenuOpen(!menuOpen)} to="/contact">Contact</Link>
        </li>
      </ul>
      <ul className={menuOpen ? 'open' : ''}>
      <li>
          <Link onClick={() => setMenuOpen(!menuOpen)} to="/">Git <FaGithub /></Link>
        </li>
      </ul>
     
    </nav>
  );
}

export default Navbar;
