import React from 'react'
import './Card.css'
import { NavLink } from 'react-router-dom';

const Card = ({ curElement }) => {
    const { Poster, imdbID } = curElement;

    return (
        <li>
            <div className="main-container">
                <img src={Poster} alt={imdbID} className='poster' />
                <div className="ticket-container">
                    <NavLink to='/'>Watch Now</NavLink>
                </div>
            </div>
        </li>
    )
}

export default Card
