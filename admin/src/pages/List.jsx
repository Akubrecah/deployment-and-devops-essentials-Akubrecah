import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { FaTrash, FaEdit } from 'react-icons/fa'

const List = ({url}) => {
  
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  }

  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, {id:foodId});
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("Error");
    }
  }

  useEffect(() => {
    fetchList();
  }, [])

  return (
    <div className='w-[70%] ml-[max(5vw,25px)] mt-[50px] animate-fadeIn'>
      <h2 className='text-[24px] font-bold text-dark mb-8'>All Foods List</h2>
      <div className="bg-white rounded-[24px] shadow-card overflow-hidden">
        <div className="hidden md:grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center gap-4 p-4 bg-gray-50 border-b border-gray-200 text-[14px] font-bold text-gray-600">
          <p>Image</p>
          <p>Name</p>
          <p>Category</p>
          <p>Price</p>
          <p>Stock</p>
          <p>Action</p>
        </div>
        <div className="flex flex-col">
          {list.map((item, index) => {
            return (
              <div key={index} className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center gap-4 p-4 border-b border-gray-100 last:border-none hover:bg-gray-50 transition-colors text-[14px] text-dark'>
                <img src={`${url}/images/` + item.image} alt="" className='w-[60px] h-[60px] object-cover rounded-xl' />
                <p className='font-medium'>{item.name}</p>
                <p className='text-gray-500'>{item.category}</p>
                <p className='font-bold'>KES {item.price}</p>
                <p className={`${item.stock < 5 ? 'text-red-500 font-bold' : 'text-dark'}`}>{item.stock || 10}</p>
                <div onClick={() => removeFood(item._id)} className='cursor-pointer w-[35px] h-[35px] rounded-full bg-red-50 flex items-center justify-center text-red-500 hover:bg-red-100 transition-colors'>
                  <FaTrash size={14} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default List
