import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
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
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="plan">Plan</NavLink>
            <NavLink to="contact">Contact</NavLink>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
