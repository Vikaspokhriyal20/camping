import React from 'react'
import { useRouteError } from 'react-router'
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);

  return (
    <div>
          <h4>Error Page</h4>
          <NavLink to="/">Go back to home page</NavLink>
    </div>
  )
}

export default ErrorPage
