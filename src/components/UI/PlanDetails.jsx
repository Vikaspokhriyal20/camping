import React from 'react'
import { useLoaderData } from 'react-router-dom'
import './MovieDetails.css'

const PlanDetails = () => {
    const movieData = useLoaderData();

    const {
        Actors, Poster, Title, Type, Year, Plot, Released, BoxOffice, imdbID, Writer
    } = movieData;



    console.log(movieData);
    return (
        <section>
            <div className="container">
                <div className="card-details">
                    <div>
                        <img src={Poster} alt={Title} className='movie-poster' />
                    </div>
                    <div>
                        <h3>{Title}</h3>
                        <p>Actors : {Actors}</p>
                    </div>
                    <div>
                        <h3>Year : {Year}</h3>
                        <p> Writer : {Writer}</p>
                        <p>Released : {Released}</p>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default PlanDetails
