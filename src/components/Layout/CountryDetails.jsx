import React, { useEffect, useState, useTransition } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { getCountryIndData } from '../../api/postApi';

const CountryDetails = () => {
   const params = useParams()
//    console.log(params);

   
    const [isPending, startTransition] = useTransition()
    const [country, setCountry] = useState()
    
   
     useEffect(()=>{
       startTransition( async()=>{
       const res = await getCountryIndData(params.id)
         //  console.log(res.data[0].flags.svg);
        
     if(res.status===200){
        setCountry(res.data[0]);
     }
   
       })
     },[])

     console.log(country);
     

     if(isPending) return <h1>Loading...</h1>
   
  return (
   <>

      <section className='container'>

    {country && 
         <div className='grid grid-cols-[40%_auto] gap-4 mt-36'>
         <div>
             <img src={country.flags.svg} alt={country.flags.alt} />
         </div>
         <div className='flex justify-center items-center  flex-col'>
         
          <div className='infoContainer'>
          <h1 className='font-bold text-2xl'>{country.name.official}</h1>
            <p className='mt-2 '>
               <span className=' text-gray-400'>Native Names: </span>
               {Object.keys(country.name.nativeName)
               .map((key)=> country.name.nativeName[key].common)
               .join(", ")
               }
            </p>

            <p className='mt-2 '>
               <span className=' text-gray-400' >Population: </span>
               {country.population.toLocaleString()}
            </p>

            <p className='mt-2 '>
               <span className=' text-gray-400'>Region: </span>
               {country.region}
            </p>

            <p className='mt-2 '>
               <span className=' text-gray-400'>Sub Region: </span>
               {country.subregion}
            </p>

            <p className='mt-2 '>
               <span className=' text-gray-400'>Capital: </span>
               {country.capital}
            </p>

            <p className='mt-2 '>
               <span className=' text-gray-400'>Top Level Domain: </span>
               {country.tld[0]}
            </p>

            <p className='mt-2 '>
               <span className=' text-gray-400'>Currencies: </span>
               {Object.keys(country.currencies)
               .map((curElem)=> country.currencies[curElem].name)
               .join(", ")
               }
            </p>

            <p className='mt-2 '>
               <span className=' text-gray-400'>Languages: </span>
               {Object.keys(country.languages)
               .map((key)=> country.languages[key])
               .join(", ")
               }
            </p>



          </div>
         </div>
      
     </div>
    }

    <div className='flex justify-end mt-20'>
      <NavLink to="/country">
         <button className='border py-2 px-5 cursor-pointer'>Go Back</button>
      </NavLink>
    </div>

   </section>

   </>
  )
}

export default CountryDetails