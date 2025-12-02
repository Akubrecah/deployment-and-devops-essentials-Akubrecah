import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaPlus, FaList, FaBoxOpen } from 'react-icons/fa'

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen border-r border-gray-200 bg-white text-[15px]">
        <div className="pt-[50px] pl-[15%] flex flex-col gap-5">
            <NavLink to='/add' className={({isActive})=> `flex items-center gap-3 border border-r-0 p-3 rounded-l-[12px] cursor-pointer transition-all duration-300 ${isActive ? "bg-[#fff0ed] border-primary text-primary font-medium" : "border-white hover:bg-gray-50 text-gray-600"}`}>
                <FaPlus />
                <p className="hidden md:block">Add Items</p>
            </NavLink>
            <NavLink to='/list' className={({isActive})=> `flex items-center gap-3 border border-r-0 p-3 rounded-l-[12px] cursor-pointer transition-all duration-300 ${isActive ? "bg-[#fff0ed] border-primary text-primary font-medium" : "border-white hover:bg-gray-50 text-gray-600"}`}>
                <FaList />
                <p className="hidden md:block">List Items</p>
            </NavLink>
            <NavLink to='/orders' className={({isActive})=> `flex items-center gap-3 border border-r-0 p-3 rounded-l-[12px] cursor-pointer transition-all duration-300 ${isActive ? "bg-[#fff0ed] border-primary text-primary font-medium" : "border-white hover:bg-gray-50 text-gray-600"}`}>
                <FaBoxOpen />
                <p className="hidden md:block">Orders</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar
