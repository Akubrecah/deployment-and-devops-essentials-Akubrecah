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
    <form onSubmit={placeOrder} className='flex items-start justify-between gap-[50px] mt-[100px] mb-[100px] flex-col md:flex-row animate-fadeIn'>
      <div className="w-full max-w-[max(30%,500px)] bg-white p-8 rounded-[24px] shadow-card">
        <p className='text-[24px] font-bold mb-[30px] text-dark'>Delivery Information</p>
        <div className="flex gap-4">
          <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First name' className='mb-[15px] w-full p-3 border border-gray-200 rounded-xl outline-primary focus:border-primary transition-colors bg-gray-50' />
          <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Last name' className='mb-[15px] w-full p-3 border border-gray-200 rounded-xl outline-primary focus:border-primary transition-colors bg-gray-50' />
        </div>
        <input required name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Email address' className='mb-[15px] w-full p-3 border border-gray-200 rounded-xl outline-primary focus:border-primary transition-colors bg-gray-50' />
        <input required name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='Street' className='mb-[15px] w-full p-3 border border-gray-200 rounded-xl outline-primary focus:border-primary transition-colors bg-gray-50' />
        <div className="flex gap-4">
          <input required name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='City' className='mb-[15px] w-full p-3 border border-gray-200 rounded-xl outline-primary focus:border-primary transition-colors bg-gray-50' />
          <input required name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='State' className='mb-[15px] w-full p-3 border border-gray-200 rounded-xl outline-primary focus:border-primary transition-colors bg-gray-50' />
        </div>
        <div className="flex gap-4">
          <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='Zip code' className='mb-[15px] w-full p-3 border border-gray-200 rounded-xl outline-primary focus:border-primary transition-colors bg-gray-50' />
          <input required name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder='Country' className='mb-[15px] w-full p-3 border border-gray-200 rounded-xl outline-primary focus:border-primary transition-colors bg-gray-50' />
        </div>
        <input required name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='Phone' className='mb-[15px] w-full p-3 border border-gray-200 rounded-xl outline-primary focus:border-primary transition-colors bg-gray-50' />
      </div>
      
      <div className="w-full max-w-[max(40%,500px)]">
        <div className="flex flex-col gap-6 bg-white p-8 rounded-[24px] shadow-card">
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
          <button type='submit' className='border-none text-black font-bold bg-primary w-full py-4 rounded-full cursor-pointer mt-[20px] hover:scale-[1.02] transition-transform shadow-soft'>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
