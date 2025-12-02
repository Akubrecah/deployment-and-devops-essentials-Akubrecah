import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaPlus, FaList, FaBoxOpen } from 'react-icons/fa'

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen border-r-2 border-[#a9a9a9] text-[15px]">
        <div className="pt-[50px] pl-[20%] flex flex-col gap-5">
            <NavLink to='/add' className={({isActive})=> `flex items-center gap-3 border border-[#a9a9a9] border-r-0 p-2.5 rounded-l-[3px] cursor-pointer ${isActive ? "bg-[#fff0ed] border-[#tomato]" : ""}`}>
                <FaPlus />
                <p className="hidden md:block">Add Items</p>
            </NavLink>
            <NavLink to='/list' className={({isActive})=> `flex items-center gap-3 border border-[#a9a9a9] border-r-0 p-2.5 rounded-l-[3px] cursor-pointer ${isActive ? "bg-[#fff0ed] border-[#tomato]" : ""}`}>
                <FaList />
                <p className="hidden md:block">List Items</p>
            </NavLink>
            <NavLink to='/orders' className={({isActive})=> `flex items-center gap-3 border border-[#a9a9a9] border-r-0 p-2.5 rounded-l-[3px] cursor-pointer ${isActive ? "bg-[#fff0ed] border-[#tomato]" : ""}`}>
                <FaBoxOpen />
                <p className="hidden md:block">Orders</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar
