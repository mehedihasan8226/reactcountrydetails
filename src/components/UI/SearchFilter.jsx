import React from 'react'
import Country from '../../pages/Country'

const SearchFilter = ({search,setSearch,filter, setFilter,countries,setCountries}) => {

    const handleInputChange = (e)=>{
        e.preventDefault()
        setSearch(e.target.value)
    }

    const handleSelectChange = (e)=>{
        e.preventDefault()
        setFilter(e.target.value)
    }

    const sortCountries = (value)=>{
        const sortCountry = [...countries].sort((a,b)=>{
            return value == "asc"
            ? a.name.common.localeCompare(b.name.common)
            : b.name.common.localeCompare(a.name.common)
        })

        setCountries(sortCountry)
    }


  return (
    <section>
        <div className='flex justify-between mt-20'>
           <div>

           <input type="text" value={search} onChange={handleInputChange} 
            className='
                border rounded-md 
            ' />
           </div>

           <div className='border px-4  rounded-md'>
            <button className='cursor-pointer' onClick={()=>sortCountries("asc")}>Asc</button>
           </div>

           <div className='border px-4 rounded-md'>
            <button className='cursor-pointer' onClick={()=>sortCountries("des")}>Desc</button>
           </div>

            <div>
                <select 
                className='bg-black border rounded-md'
                value={filter} onChange={handleSelectChange}>
                    <option value="all">All</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>

            </div>

    </section>
  )
}

export default SearchFilter