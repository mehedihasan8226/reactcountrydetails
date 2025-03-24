import React, { useEffect, useState, useTransition } from 'react'
import { getCountryData } from '../api/postApi'
import CountryCard from '../components/Layout/CountryCard'
import SearchFilter from '../components/UI/SearchFilter'

const Country = () => {

  // const [isPending, startTransition] = useTransition()

 const [isPending, startTransition] = useTransition()
 const [countries, setCountries] = useState([])


 const [search, setSearch] = useState()
 const [filter, setFilter] = useState('all')
 

  useEffect(()=>{
    startTransition( async()=>{
    const res = await getCountryData()

    setCountries(res.data);
    // console.log(res.data);

    })
  },[])

  console.log(search, filter);
  const searchCountry = (country)=>{
    if(search){
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  }

  const filterRegion = (country)=>{
    if(filter==="all") return country;
    return country.region === filter;
  }


 const filterCountrys =  countries.filter((country)=>searchCountry(country)
    && filterRegion(country)
)

  if(isPending) return <h1>Loading...</h1>
  return (
    <>
        <section className='container'> 

          <SearchFilter  search={search} setSearch={setSearch}  
          finter={filter} setFilter={setFilter} 
          countries={countries}
          setCountries={setCountries}
          />

          <ul className='grid grid-cols-4 mt-20  '>
            {
                filterCountrys.map((curCountry,indx)=>{
                 
                  return <CountryCard country={curCountry} key={indx}  /> 
                })
            }


          </ul>


        </section>
    </>
  )
}

export default Country
