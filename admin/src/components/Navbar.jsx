import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-2 px-[4%]'>
        <h1 className='text-[max(3vw,20px)] font-bold text-[#tomato]'>Food Del Admin</h1>
        <FaUserCircle size={30} className='cursor-pointer' />
    </div>
  )
}

export default Navbar
