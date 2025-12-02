import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import { useNavigate } from 'react-router-dom'
import { FaTrash } from 'react-icons/fa'

const Cart = () => {

  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className='mt-[100px] mb-[100px] animate-fadeIn'>
      <div className="bg-white rounded-[24px] shadow-card p-8 mb-8">
        <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-500 text-[14px] font-medium border-b border-gray-200 pb-4 mb-4">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className='grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-[16px] my-4 text-dark font-medium'>
                  <img src={url + "/images/" + item.image} alt="" className='w-[60px] h-[60px] object-cover rounded-xl' />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p className='pl-4'>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <FaTrash onClick={() => removeFromCart(item._id)} className='cursor-pointer text-red-400 hover:text-red-600 transition-colors' />
                </div>
                <hr className='h-[1px] bg-gray-100 border-none' />
              </div>
            )
          }
        })}
      </div>

      <div className="flex justify-between gap-[50px] flex-col-reverse md:flex-row">
        <div className="flex-1 flex flex-col gap-6 bg-white p-8 rounded-[24px] shadow-card h-fit">
          <h2 className='text-[24px] font-bold text-dark'>Cart Totals</h2>
          <div className='flex flex-col gap-4'>
            <div className="flex justify-between text-gray-600">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className='border-gray-100' />
            <div className="flex justify-between text-gray-600">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr className='border-gray-100' />
            <div className="flex justify-between text-dark text-[20px] font-bold">
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button onClick={() => navigate('/order')} className='border-none text-black font-bold bg-primary py-4 rounded-full cursor-pointer hover:scale-[1.02] transition-transform shadow-soft'>PROCEED TO CHECKOUT</button>
        </div>
        <div className="flex-1">
          <div className='bg-white p-8 rounded-[24px] shadow-card'>
            <p className='text-gray-500 mb-4'>If you have a promo code, Enter it here</p>
            <div className='flex justify-between items-center bg-gray-100 rounded-full overflow-hidden p-1 pl-6'>
              <input type="text" placeholder='promo code' className='bg-transparent border-none outline-none w-full text-dark' />
              <button className='w-[150px] py-3 bg-dark border-none text-white rounded-full font-medium hover:bg-black transition-colors'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
