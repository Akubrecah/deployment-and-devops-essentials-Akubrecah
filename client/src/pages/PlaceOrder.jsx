import React, { useContext, useState } from 'react'
import { StoreContext } from '../context/StoreContext'
import axios from 'axios'

const PlaceOrder = () => {

  const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext)

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
  }

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    })
    
    // Placeholder for Stripe integration
    console.log("Order Placed", orderItems);
    alert("Order placement logic will be connected to Stripe here.");
  }

  return (
    <form onSubmit={placeOrder} className='flex items-start justify-between gap-[50px] mt-[100px] flex-col md:flex-row'>
      <div className="w-full max-w-[max(30%,500px)]">
        <p className='text-[30px] font-semibold mb-[50px]'>Delivery Information</p>
        <div className="flex gap-2.5">
          <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First name' className='mb-[15px] w-full p-2.5 border border-[#c5c5c5] rounded outline-[#tomato]' />
          <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Last name' className='mb-[15px] w-full p-2.5 border border-[#c5c5c5] rounded outline-[#tomato]' />
        </div>
        <input required name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Email address' className='mb-[15px] w-full p-2.5 border border-[#c5c5c5] rounded outline-[#tomato]' />
        <input required name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='Street' className='mb-[15px] w-full p-2.5 border border-[#c5c5c5] rounded outline-[#tomato]' />
        <div className="flex gap-2.5">
          <input required name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='City' className='mb-[15px] w-full p-2.5 border border-[#c5c5c5] rounded outline-[#tomato]' />
          <input required name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='State' className='mb-[15px] w-full p-2.5 border border-[#c5c5c5] rounded outline-[#tomato]' />
        </div>
        <div className="flex gap-2.5">
          <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='Zip code' className='mb-[15px] w-full p-2.5 border border-[#c5c5c5] rounded outline-[#tomato]' />
          <input required name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder='Country' className='mb-[15px] w-full p-2.5 border border-[#c5c5c5] rounded outline-[#tomato]' />
        </div>
        <input required name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='Phone' className='mb-[15px] w-full p-2.5 border border-[#c5c5c5] rounded outline-[#tomato]' />
      </div>
      <div className="w-full max-w-[max(40%,500px)]">
        <div className="flex flex-col gap-5">
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
          <button type='submit' className='border-none text-white bg-[#tomato] w-full py-3 rounded cursor-pointer mt-[30px]'>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
