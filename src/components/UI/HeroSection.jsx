import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <>
         <main className='mt-24 '>
                <div className='container flex'>
        
                  <div className='here content'>
        
                    <h2 className='pt-2 mb-4 text-4xl'>Explore the world , <br /> one country at a time.</h2>
                    <p className='mb-6 w-[80%] text-gray-400'>
                      Explore diverse cultures, taste exotic foods, witness stunning landscapes, and create lasting memories. Travel broadens horizons, ignites passion, and enriches the soul.
                    </p>
        
                      <button className='flex text-sm cursor-pointer justify-center items-center border rounded-3xl py-2 px-4 rounded'>
                  <samp>Start Exploring</samp>
                  <FaLongArrowAltRight className='ml-2' />
                  </button>
                  </div>
        
                  <div className='here-img'>
                    <img src="./image/world.jpg" alt="World Image" className='rounded-4xl'  />
                  </div>
        
                </div>
              </main>
    </>
  )
}

export default HeroSection