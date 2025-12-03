import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/StoreContext';
import axios from 'axios';
import { FaBox } from 'react-icons/fa';

const MyOrders = () => {

  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(url + "/api/order/userorders", {}, { headers: { token } });
    setData(response.data.data);
  }

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token])

  return (
    <div className='my-[50px] animate-fadeIn'>
      <h2 className='text-[24px] font-bold text-dark mb-8'>My Orders</h2>
      <div className="flex flex-col gap-5">
        {data.map((order, index) => {
          return (
            <div key={index} className='grid grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr] items-center gap-[30px] text-[14px] p-5 border border-gray-200 rounded-[12px] text-[#454545] bg-white shadow-sm hover:shadow-md transition-shadow'>
              <FaBox className='text-secondary text-[30px]' />
              <p>{order.items.map((item, index) => {
                if (index === order.items.length - 1) {
                  return item.name + " x " + item.quantity
                } else {
                  return item.name + " x " + item.quantity + ", "
                }
              })}</p>
              <p>KES {order.amount}.00</p>
              <p>Items: {order.items.length}</p>
              <p><span className='text-secondary font-bold'>&#x25cf;</span> <b>{order.status}</b></p>
              <button onClick={fetchOrders} className='border-none py-3 rounded-full bg-[#ffe1e1] text-[#454545] text-[14px] font-medium cursor-pointer hover:bg-secondary hover:text-white transition-colors'>Track Order</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MyOrders
