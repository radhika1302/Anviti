import React from 'react'
import { assests } from '../assets/assests'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <img src={assests.logo} alt="" />
      <ul>
       <NavLink>
        <li>HOME</li>
        <hr />
       </NavLink>

       <NavLink>
        <li>PLACED STUDENTS</li>
        <hr />
       </NavLink>

       <NavLink>
        <li>ABOUT</li>
        <hr />
       </NavLink>

       <NavLink>
        <li>CONTACT</li>
        <hr />
       </NavLink>

      </ul>
      <div>
        <button>Create Account</button>
      </div>
    </div>
  )
}

export default Navbar
