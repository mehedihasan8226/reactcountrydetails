import React from 'react'
import countryFact from '../api/countryData.json'

const About = () => {
  return (
    <>
      <section className='container  '> 
          <h2 className='mt-24 text-center text-3xl pb-5 capitalize'>
            Here is the interesting Facts
            <br />
            we are proud of
          </h2>
          {/* <div className='flex justify-center items-center h-screen'> */}
          <div className='grid grid-cols-1 gap-6 justify-center items-center lg:grid-cols-3 md:grid-cols-2'>

          {
            countryFact.map((country)=>{ 

              const {id, countryName, capital,population, interestingFact } = country;
              
              return(
                <div key={id} className='bg-gray-800 rounded-md p-3'>
              <p>{countryName}</p>
              <p>Capital: 
                <span>{capital}</span>
              </p>
              <p>population: 
                <span>{population}</span>
              </p>
              <p>Interesting Fact: 
                <span>{interestingFact}</span>
              </p>
            </div>
              )
              
              
          })
        }
            
    
          </div>
          {/* </div> */}

      </section>
    </>
  )
}

export default About