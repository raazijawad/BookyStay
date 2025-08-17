import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { UserButton } from '@clerk/clerk-react'

const NavBar = () => {
  return (
    <div className='py-3 border-b border-gray-400 flex items-center bg-white px-4 justify-between md:px-8 transition-all duration-300'>
        <Link to={'/'}>
            <img src={assets.logo} className='invert h-9 opacity-80' alt="" />
        </Link>
        <UserButton/>
    </div>
  )
}

export default NavBar
