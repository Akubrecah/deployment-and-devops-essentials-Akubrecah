import React, { useContext } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'
import { StoreContext } from '../context/StoreContext'

const FoodItem = ({id, name, price, description, image}) => {

  const {cartItems, addToCart, removeFromCart, url} = useContext(StoreContext);

  return (
    <div className='w-full m-auto rounded-[24px] shadow-card hover:shadow-soft transition-all duration-300 bg-white overflow-hidden animate-fadeIn group'>
        <div className="relative h-[200px] overflow-hidden">
            <img className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' src={url+"/images/"+image} alt="" />
            {!cartItems[id]
                ? <div onClick={()=>addToCart(id)} className='absolute bottom-4 right-4 bg-white rounded-full p-3 shadow-lg cursor-pointer hover:bg-gray-100 transition-colors'>
                    <FaPlus className='text-secondary text-[18px]' />
                  </div>
                : <div className='absolute bottom-4 right-4 flex items-center gap-3 p-2 rounded-full bg-white shadow-lg'>
                    <div onClick={()=>removeFromCart(id)} className='bg-gray-100 rounded-full p-2 cursor-pointer hover:bg-gray-200'>
                        <FaMinus className='text-secondary text-[14px]' />
                    </div>
                    <p className='font-bold text-dark'>{cartItems[id]}</p>
                    <div onClick={()=>addToCart(id)} className='bg-secondary/10 rounded-full p-2 cursor-pointer hover:bg-secondary/20'>
                        <FaPlus className='text-secondary text-[14px]' />
                    </div>
                </div>
            }
        </div>
        <div className="p-6">
            <div className="flex justify-between items-start mb-3">
                <p className='text-[20px] font-bold text-dark leading-tight'>{name}</p>
                <p className="text-secondary text-[20px] font-bold">${price}</p>
            </div>
            <p className="text-gray-500 text-[14px] leading-relaxed line-clamp-2">{description}</p>
        </div>
    </div>
  )
}

export default FoodItem
