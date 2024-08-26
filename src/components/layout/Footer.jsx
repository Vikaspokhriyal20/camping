import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className='dark-footer'>
        <div className="container flex-footer">
          <div className="footer-box-1">
            <h4>CAMPING🌳🌲</h4>
          </div>
          <div className="footer-box-2">
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="plan">Plan</NavLink>
            <NavLink to="contact">Contact</NavLink>
         </div>
          <div className="footer-box-3">
            <NavLink to="https://vercel.com/vikaspokhriyal20s-projects" target='_blank'>1</NavLink>
            <NavLink to="https://icodethis.com/VIKAS_POKHIRYAL" target='_blank'>2</NavLink>
            <NavLink to="https://github.com/Vikaspokhriyal20" target='_blank'>3</NavLink>
            <NavLink to="https://www.instagram.com/vikas_pokhriyal22/?hl=en" target='_blank'>4</NavLink>
         </div>
          <form className="footer-newsletter">
            <input type="Email" className='newsletter' placeholder='Enter your Email' />
            <button className='subscribe-btn'>Subscribe</button>
         </form>
        </div>
        <div className="copyright">
          <kbd>© Camping Copyright 2024 🌲🌳</kbd>
        </div>
      </footer>
    </>
  )
}

export default Footer
