import React from 'react'
import { NavLink } from 'react-router-dom';


const CountryCard = ({country}) => {
        
    const {flags,name,population, region, capital} = country;
  return (
   <>
    <li className='country-card w-52 h-auto mb-6 bg-gray-800 p-4 gap-1 rounded-2xl'>
            <div className=''> 
                <img src={flags.svg} alt={flags.alt} />

                <div className='countryInfo mt-3'>
                    <p className='text-2xl'>{name.common.length >10 ? name.common.slice(0,10) + "..." : name.common}</p>
                    <p>
                        <span className='text-gray-400'>Population: </span>
                        {population}
                    </p>
                    <p>
                        <span className='text-gray-400'>Region: </span>
                        {region}
                    </p>
                    <p>
                        <span className='text-gray-400'>Capital: </span>
                        {capital[0]}
                    </p>
                
               
                </div>
            </div>

            <div className='mt-5'>
            <NavLink to={`/country/${name.common}`} >
                    <button className='border rounded-md px-2 cursor-pointer'>Read More</button>
                </NavLink>
            </div>

    </li>
   </>
  )
}

export default CountryCard