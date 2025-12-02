import React, { useContext } from 'react'
import { FaPlus, FaMinus, FaStar } from 'react-icons/fa'
import { StoreContext } from '../context/StoreContext'

const FoodItem = ({id, name, price, description, image}) => {

  const {cartItems, addToCart, removeFromCart, url} = useContext(StoreContext);

  return (
    <div className='w-full m-auto rounded-[15px] shadow-[0px_0px_10px_#00000015] transition duration-300 animate-fadeIn'>
        <div className="relative">
            <img className='w-full rounded-t-[15px]' src={url+"/images/"+image} alt="" />
            {!cartItems[id]
                ? <FaPlus onClick={()=>addToCart(id)} className='absolute w-[35px] h-[35px] cursor-pointer bg-white rounded-[50%] p-2 bottom-[15px] right-[15px] shadow-md' />
                : <div className='absolute bottom-[15px] right-[15px] flex items-center gap-2.5 p-1.5 rounded-[50px] bg-white shadow-md'>
                    <FaMinus onClick={()=>removeFromCart(id)} className='w-[30px] h-[30px] bg-[#ffe1e1] text-[#ff4c4c] rounded-[50%] p-2 cursor-pointer' />
                    <p>{cartItems[id]}</p>
                    <FaPlus onClick={()=>addToCart(id)} className='w-[30px] h-[30px] bg-[#d9ffd9] text-[#1ac01a] rounded-[50%] p-2 cursor-pointer' />
                </div>
            }
        </div>
        <div className="p-5">
            <div className="flex justify-between items-center mb-2.5">
                <p className='text-[20px] font-medium'>{name}</p>
                <div className="flex text-[#tomato]">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar className='text-[#e4e4e4]' />
                </div>
            </div>
            <p className="text-[#676767] text-[12px]">{description}</p>
            <p className="text-[#tomato] text-[22px] font-medium my-2.5">${price}</p>
        </div>
    </div>
  )
}

export default FoodItem
