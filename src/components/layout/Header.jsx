import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {

  const getActiveLink = ({ isActive }) => {
    return {
      color: isActive ? "red" : "black",
    };
  };

  return (
    <>
      <header className='header'>
        <div className="container flex">
          <div className="logo">
            <NavLink to="/">
              <h4>🌳🌲</h4>
            </NavLink>
          </div>
          <div className="nav-item-gap">
            <NavLink to="/" style={getActiveLink}>Home</NavLink>
            <NavLink to="about" style={getActiveLink}>About</NavLink>
            <NavLink to="plan" style={getActiveLink}>Plan</NavLink>
            <NavLink to="contact"style={getActiveLink}>Contact</NavLink>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
