import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { GiHamburgerMenu } from "react-icons/gi";


const Headers = () => {

  const [show, setShow] = useState(false)

const hanburgerMenu = ()=>{
  setShow(!show)
  
}



  return (
    <header>
      <div className='container flex justify-between py-3'>
        <div className='logo'>
          <NavLink to="/">
            <h1>WorldAtlas</h1>
          </NavLink>
        </div>
        <nav className={show ? "mobileMenu" : "webMenu"}>
          <ul className='flex gap-3'>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/country">Country</NavLink>
            </li>
            
          </ul>
        </nav>

        <div className='mobile-menu'> 

          <button onClick={hanburgerMenu}>
                <GiHamburgerMenu />
          </button>

        </div>

      </div>

    </header>
  )
}

export default Headers