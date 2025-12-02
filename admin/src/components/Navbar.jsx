import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-4 px-[4%] bg-white shadow-sm'>
        <h1 className='text-[max(2vw,24px)] font-bold text-secondary tracking-tight'>GlovoAdmin.</h1>
        <div className="flex items-center gap-4">
          <div className="text-right hidden md:block">
            <p className='text-[14px] font-bold text-dark'>Admin User</p>
            <p className='text-[12px] text-gray-500'>Super Admin</p>
          </div>
          <FaUserCircle size={36} className='cursor-pointer text-secondary' />
        </div>
    </div>
  )
}

export default Navbar
