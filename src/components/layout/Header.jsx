import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {

  const getActiveLink = ({ isActive }) => {
    return {
      color: isActive ? "red" : "black",
    };
  };

  const getActiveHome = ({ isActive }) => {
    return {
      color: isActive ? "blue" : "black",
    };
  };

  const getActiveAbout = ({ isActive }) => {
    return {
      color: isActive ? "deeppink" : "black",
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
            <NavLink to="/" style={getActiveHome}>Home</NavLink>
            <NavLink to="about" style={getActiveAbout}>About</NavLink>
            <NavLink to="plan" style={getActiveLink}>Movie</NavLink>
            <NavLink to="contact"style={getActiveLink}>Contact</NavLink>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
