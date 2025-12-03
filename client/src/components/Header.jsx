import React from 'react'
import { FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa'

const Header = () => {
  return (
    <div className='relative h-[34vw] min-h-[500px] mx-auto bg-cover bg-center rounded-[30px] overflow-hidden flex flex-col items-center justify-center text-center p-10 transform hover:scale-[1.01] transition-transform duration-500' style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop')" }}>
        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 to-black/40"></div>
        
        <div className="relative z-10 flex flex-col items-center gap-6 max-w-[900px] animate-fadeIn">
            <h2 className='font-bold text-white text-[max(4.5vw,48px)] leading-tight drop-shadow-lg'>
                Order your <br /> favourite food here
            </h2>
            <p className='text-white text-[18px] font-medium max-w-[600px] drop-shadow-md opacity-90'>
                Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.
            </p>
            
            <div className="bg-white/20 backdrop-blur-md border border-white/30 w-full max-w-[600px] p-2 rounded-full shadow-2xl flex items-center justify-between pl-6 mt-4">
                <div className="flex items-center gap-3 w-full">
                    <FaMapMarkerAlt className='text-primary text-[24px]' />
                    <input type="text" placeholder="What's your address?" className='w-full outline-none text-[18px] text-white placeholder:text-gray-200 bg-transparent' />
                </div>
                <button className='bg-primary text-white font-bold py-4 px-10 rounded-full hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1'>
                    Search
                </button>
            </div>
        </div>
    </div>
  )
}

export default Header
