import React from 'react'
import './Card.css'

const Card = ({ curElement }) => {
    const { Poster, imdbID } = curElement;

    return (
        <li>
            <div className="wrapper">
                <img src={Poster} alt={imdbID} className='poster' />
            </div>
        </li>
    )
}

export default Card
