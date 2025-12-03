import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { FaBoxOpen } from 'react-icons/fa'

const Orders = ({url}) => {

  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    // Placeholder for API call
    // const response = await axios.get(url+"/api/order/list");
    // if (response.data.success) {
    //   setOrders(response.data.data);
    // } else {
    //   toast.error("Error");
    // }
    
    // Mock data for UI testing since backend route might not be ready
    setOrders([
      {
        _id: "1",
        items: [{name: "Greek Salad", quantity: 2}, {name: "Lasagna", quantity: 1}],
        amount: 45,
        address: {firstName: "John", lastName: "Doe", street: "123 Main St", city: "New York", state: "NY", zipcode: "10001", phone: "1234567890"},
        status: "Food Processing",
        itemsCount: 3
      }
    ])
  }

  const statusHandler = async (event, orderId) => {
    // const response = await axios.post(url+"/api/order/status", {orderId, status:event.target.value})
    // if (response.data.success) {
    //   await fetchAllOrders();
    // }
    console.log("Status changed to", event.target.value);
  }

  useEffect(() => {
    fetchAllOrders();
  }, [])

  return (
    <div className='w-[70%] ml-[max(5vw,25px)] mt-[50px] animate-fadeIn'>
      <h2 className='text-[24px] font-bold text-dark mb-8'>Order Page</h2>
      <div className="flex flex-col gap-6">
        {orders.map((order, index) => (
          <div key={index} className='grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr] items-start gap-6 p-6 bg-white border border-gray-200 rounded-[24px] shadow-sm text-[14px] text-gray-600'>
            <FaBoxOpen className='text-secondary text-[40px] mt-2' />
            <div>
              <p className='font-bold text-dark mb-2'>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity
                  } else {
                    return item.name + " x " + item.quantity + ", "
                  }
                })}
              </p>
              <p className='font-bold text-dark mb-4'>{order.address.firstName + " " + order.address.lastName}</p>
              <div className='mb-2'>
                <p>{order.address.street + ","}</p>
                <p>{order.address.city + ", " + order.address.state + ", " + order.address.country + ", " + order.address.zipcode}</p>
              </div>
              <p>{order.address.phone}</p>
            </div>
            <p>Items: {order.items.length}</p>
            <p className='font-bold text-dark'>${order.amount}</p>
            <select onChange={(event) => statusHandler(event, order._id)} value={order.status} className='bg-[#ffe8e4] border border-primary p-2.5 rounded-full outline-none font-medium cursor-pointer text-dark'>
              <option value="Food Processing">Food Processing</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders
