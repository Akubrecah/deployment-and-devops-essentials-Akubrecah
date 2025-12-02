import React from 'react'

const Header = () => {
  return (
    <div className='h-[34vw] my-[30px] mx-auto bg-[url("/header_img.png")] bg-no-repeat bg-contain relative bg-gray-200 rounded-2xl'>
        <div className="absoluteflex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw] animate-fadeIn p-10">
            <h2 className='font-bold text-white text-[max(4.5vw,22px)]'>Order your favourite food here</h2>
            <p className='text-white text-[1vw] hidden md:block'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
            <button className='border-none text-[#747474] font-medium py-[1vw] px-[2.3vw] bg-white text-[max(1vw,13px)] rounded-[50px] cursor-pointer hover:bg-gray-100 transition duration-300'>View Menu</button>
        </div>
    </div>
  )
}

export default Header
