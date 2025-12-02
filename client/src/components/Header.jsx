import React from 'react'
import { FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa'

const Header = () => {
  return (
    <div className='relative h-[500px] my-5 mx-auto bg-primary rounded-[30px] overflow-hidden flex flex-col items-center justify-center text-center p-10'>
        {/* Background Pattern (Optional CSS or SVG) */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/food.png')]"></div>
        
        <div className="relative z-10 flex flex-col items-center gap-6 max-w-[800px] animate-fadeIn">
            <h2 className='font-bold text-black text-[max(4vw,40px)] leading-tight'>Food delivery and more</h2>
            <p className='text-black text-[18px] font-medium opacity-80 max-w-[600px]'>Groceries, shops, pharmacies, anything! We deliver it all to your doorstep in minutes.</p>
            
            <div className="bg-white w-full max-w-[500px] p-2 rounded-full shadow-soft flex items-center justify-between pl-6">
                <div className="flex items-center gap-3 w-full">
                    <FaMapMarkerAlt className='text-secondary text-[20px]' />
                    <input type="text" placeholder="What's your address?" className='w-full outline-none text-[16px] text-dark placeholder:text-gray-400' />
                </div>
                <button className='bg-secondary text-white font-bold py-3 px-8 rounded-full hover:bg-[#008f73] transition-colors flex items-center gap-2'>
                    Use current location
                </button>
            </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-white rounded-full opacity-20 blur-2xl"></div>
    </div>
  )
}

export default Header
