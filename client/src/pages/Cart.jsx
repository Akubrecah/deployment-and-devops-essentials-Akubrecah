import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className='mt-[100px]'>
      <div className="">
        <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-500 text-[max(1vw,12px)]">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className='grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-[max(1vw,12px)] my-2.5 text-black'>
                  <img src={url + "/images/" + item.image} alt="" className='w-[50px]' />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className='cursor-pointer text-red-500'>x</p>
                </div>
                <hr className='h-[1px] bg-[#e2e2e2] border-none' />
              </div>
            )
          }
        })}
      </div>
      <div className="mt-[80px] flex justify-between gap-[max(12vw,20px)] flex-col-reverse md:flex-row">
        <div className="flex-1 flex flex-col gap-5">
          <h2 className='text-[max(2vw,24px)] font-bold'>Cart Totals</h2>
          <div>
            <div className="flex justify-between text-[#555]">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className='my-2.5' />
            <div className="flex justify-between text-[#555]">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr className='my-2.5' />
            <div className="flex justify-between text-[#555]">
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button onClick={() => navigate('/order')} className='border-none text-white bg-[#tomato] w-[max(15vw,200px)] py-3 rounded cursor-pointer'>PROCEED TO CHECKOUT</button>
        </div>
        <div className="flex-1">
          <div>
            <p className='text-[#555]'>If you have a promo code, Enter it here</p>
            <div className='mt-2.5 flex justify-between items-center bg-[#eaeaea] rounded'>
              <input type="text" placeholder='promo code' className='bg-transparent border-none outline-none pl-2.5' />
              <button className='w-[max(10vw,150px)] py-3 px-1.5 bg-black border-none text-white rounded'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
