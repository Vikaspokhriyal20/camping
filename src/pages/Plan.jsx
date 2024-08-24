import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Card from '../components/UI/Card';

const Plan = () => {
  const movieData = useLoaderData();
  console.log(movieData);

  return (
    <section>
      <ul className='container grid-col-4'>
        {movieData &&
          movieData.Search.map((curElement) => {
            return <Card key={curElement.imdbID} curElement={curElement} />;
        })}
      </ul>
    </section>
  )
}

export default Plan
