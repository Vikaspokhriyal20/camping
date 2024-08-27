import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {


  return (
    <main>
      <div className='container'>
        <div className="home">
          <div className="home-content">
          <p id='home-title'>Offers general information regarding the screenplay</p>
          <p>A movie or film is a type of visual art that uses images and sounds to tell stories or teach people something</p>
          <NavLink to='/plan' className='watch-btn'>Watch Now</NavLink>
          </div>
        </div>
      </div>
    </main>

  )
}

export default Home
