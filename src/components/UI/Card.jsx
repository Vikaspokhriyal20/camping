import React from 'react'
import './Card.css'
import { NavLink } from 'react-router-dom';

const Card = ({ curElement }) => {
    const { Poster, imdbID } = curElement;

    return (
        <li>
            <div className="wrapper">
                <img src={Poster} alt={imdbID} className='poster' />
                <NavLink to={`/plan/${imdbID}`}>See More</NavLink>
            </div>
        </li>
    )
}

export default Card
