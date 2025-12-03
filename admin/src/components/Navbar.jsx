import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

const Navbar = () => {
  const logout = () => {
    localStorage.removeItem("auth");
    window.location.reload();
  }

  return (
    <div className='flex justify-between items-center p-[8px_4%]'>
        <h1 className='text-[max(2vw,20px)] font-bold text-primary'>Tomato. <span className='text-[12px] text-dark'>Admin Panel</span></h1>
        <div className="flex items-center gap-4">
            <FaUserCircle size={40} className='text-primary' />
            <button onClick={logout} className="text-sm text-red-500 font-bold hover:underline">Logout</button>
        </div>
    </div>
  )
}

export default Navbar
