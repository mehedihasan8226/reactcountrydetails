import React from 'react'
import footerApi from "../../api/footerApi.json"
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { NavLink } from 'react-router-dom';




const Footers = () => {

  const footerIcons ={
    FaLocationDot : <FaLocationDot />,
    IoCall : <IoCall />,
    MdMessage : <MdMessage />
  }

  return (
    <>
      <footer className='container'>

        <div className='grid grid-cols-3  mt-8'>

          {
            footerApi.map((curData,indx)=>{
              const {icon, title, details} = curData;
              return(

                <div key={indx} className=' flex gap-1.5 justify-center items-center '>
                    <div className='text-blue-900 text-base md:text-3xl'>{footerIcons[icon]}</div>
                    <div>
                      <p className='text-base'>{title}</p>
                      <p className='text-gray-400 text-xs md:text-base'>{details}</p>
                    </div>

                </div>


              )

            })
          }
        </div>

          <div className='copywrite flex justify-center gap-2 mt-5 mb-4 '>
            <p>Copyright &copy; 2025, All Right Reserved.</p>
            <NavLink to="/" className="font-bold bg-blue-900 px-2 py-1 rounded-md hover:bg-blue-800">
                Home
            </NavLink>

          </div>


      </footer>
    
    </>
  )
}

export default Footers