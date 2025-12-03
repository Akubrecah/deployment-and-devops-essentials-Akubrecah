import React, { useContext } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'
import { StoreContext } from '../context/StoreContext'

const FoodItem = ({id, name, price, description, image}) => {

  const {cartItems, addToCart, removeFromCart, url} = useContext(StoreContext);

  return (
    <div className='w-full m-auto rounded-[24px] shadow-card hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white overflow-hidden animate-fadeIn group border border-gray-100'>
        <div className="relative h-[220px] overflow-hidden">
            <img className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' src={url+"/images/"+image} alt="" />
            {!cartItems[id]
                ? <div onClick={()=>addToCart(id)} className='absolute bottom-4 right-4 bg-white rounded-full w-[45px] h-[45px] flex items-center justify-center shadow-lg cursor-pointer hover:bg-primary hover:text-white transition-all duration-300 group-hover:scale-110'>
                    <FaPlus className='text-primary text-[18px] group-hover:text-white transition-colors' />
                  </div>
                : <div className='absolute bottom-4 right-4 flex items-center gap-3 p-1.5 rounded-full bg-white shadow-lg border border-gray-100'>
                    <div onClick={()=>removeFromCart(id)} className='bg-red-50 rounded-full w-[35px] h-[35px] flex items-center justify-center cursor-pointer hover:bg-red-100 transition-colors'>
                        <FaMinus className='text-primary text-[12px]' />
                    </div>
                    <p className='font-bold text-dark min-w-[20px] text-center'>{cartItems[id]}</p>
                    <div onClick={()=>addToCart(id)} className='bg-green-50 rounded-full w-[35px] h-[35px] flex items-center justify-center cursor-pointer hover:bg-green-100 transition-colors'>
                        <FaPlus className='text-green-600 text-[12px]' />
                    </div>
                </div>
            }
        </div>
        <div className="p-6">
            <div className="flex justify-between items-start mb-3">
                <p className='text-[20px] font-bold text-dark leading-tight group-hover:text-primary transition-colors'>{name}</p>
            </div>
            <p className="text-gray-500 text-[14px] leading-relaxed line-clamp-2 mb-4 h-[40px]">{description}</p>
            <p className="text-primary text-[22px] font-bold">${price}</p>
        </div>
    </div>
  )
}

export default FoodItem
