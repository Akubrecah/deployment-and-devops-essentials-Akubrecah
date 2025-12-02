import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { FaTrash } from 'react-icons/fa'

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
    <div className='flex flex-col gap-2.5 w-[70%] ml-[max(5vw,25px)] mt-[50px]'>
      <p>All Foods List</p>
      <div className="bg-[#f9f9f9]">
        <div className="hidden md:grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-[#cacaca] text-[13px] title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-[#cacaca] text-[13px]'>
              <img src={`${url}/images/` + item.image} alt="" className='w-[50px]' />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p onClick={() => removeFood(item._id)} className='cursor-pointer text-red-500'><FaTrash /></p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List
