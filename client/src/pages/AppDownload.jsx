import React from 'react'
import { FaApple, FaGooglePlay } from 'react-icons/fa'

const AppDownload = () => {
  return (
    <div className='animate-fadeIn pt-10 min-h-[60vh] flex items-center justify-center'>
      <div className="text-center flex flex-col items-center gap-8">
        <h2 className='text-[max(3vw,40px)] font-bold text-dark leading-tight'>
            For Better Experience Download <br /> <span className="text-primary">Tomato App</span>
        </h2>
        <p className="text-gray-500 text-[18px] max-w-[500px]">
            Get the full experience with our mobile app. Order on the go, track your delivery in real-time, and get exclusive offers.
        </p>
        <div className="flex gap-4 mt-4">
            <button className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:scale-105 transition-transform shadow-lg">
                <FaApple size={28} />
                <div className="text-left">
                    <p className="text-[10px] uppercase font-medium">Download on the</p>
                    <p className="text-[16px] font-bold leading-none">App Store</p>
                </div>
            </button>
            <button className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:scale-105 transition-transform shadow-lg">
                <FaGooglePlay size={24} />
                <div className="text-left">
                    <p className="text-[10px] uppercase font-medium">Get it on</p>
                    <p className="text-[16px] font-bold leading-none">Google Play</p>
                </div>
            </button>
        </div>
        
        <div className="mt-12 relative w-full max-w-[800px] h-[400px] bg-gradient-to-b from-red-50 to-transparent rounded-t-[40px] border-t border-x border-red-100 flex justify-center items-end overflow-hidden">
             <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop" alt="App Preview" className="w-[300px] h-[350px] object-cover rounded-t-[30px] shadow-2xl transform translate-y-10" />
        </div>
      </div>
    </div>
  )
}

export default AppDownload
