import React from 'react'
import './css/ErrorPage.css'
import { useNavigate, useRouteError } from 'react-router'
import { NavLink } from 'react-router-dom';
import img1 from './images/error404.png';

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);

  }

  return (
    <div className='error'>
      <img src={img1} alt="img" />
      <h3>Page is not found 404</h3>
      <p>The page you are looking for is not found please fix your url in the search bar</p>
      <div className="link">
      <NavLink to="/">Go back to home page</NavLink>
      <button className='btn' onClick={goBack}>Go to previces page</button>
      </div>
     
    </div>
  )
}

export default ErrorPage
