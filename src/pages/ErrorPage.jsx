import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'

const ErrorPage = () => {

  const error = useRouteError()

  console.log(error);
  

  return (
    <>
        <div className='flex justify-center items-center h-screen flex-col text-4xl'>
        <h1>Opp's an error occurred.</h1>

            {error && <p>{error.data}</p>}

            <NavLink to="/">
            <button className='bg-blue-500 py-2 px-3 m-5 rounded-md cursor-pointer'>Go Home</button>
            </NavLink>
        </div>
    </>
  )
}

export default ErrorPage