import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { FaUpload, FaCloudUploadAlt } from 'react-icons/fa'

const Add = ({url}) => {
    
    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "Salad"
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({...data, [name]: value}))
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("price", Number(data.price));
        formData.append("category", data.category);
        formData.append("image", image);
        
        const response = await axios.post(`${url}/api/food/add`, formData);
        if (response.data.success) {
            setData({
                name: "",
                description: "",
                price: "",
                category: "Salad"
            });
            setImage(false);
            toast.success(response.data.message);
        } else {
            toast.error(response.data.message);
        }
    }

  return (
    <div className='w-[70%] ml-[max(5vw,25px)] mt-[50px] animate-fadeIn'>
        <h2 className='text-[24px] font-bold text-dark mb-8'>Add New Item</h2>
        <form className='flex flex-col gap-6 bg-white p-8 rounded-[24px] shadow-card' onSubmit={onSubmitHandler}>
            <div className='flex flex-col gap-3'>
                <p className='text-gray-600 font-medium'>Upload Image</p>
                <label htmlFor="image" className='cursor-pointer group'>
                    {image 
                        ? <img src={URL.createObjectURL(image)} alt="" className='w-[150px] h-[100px] object-cover rounded-xl shadow-sm' /> 
                        : <div className='w-full max-w-[300px] h-[120px] bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center gap-2 group-hover:bg-gray-100 group-hover:border-secondary transition-all'>
                            <FaCloudUploadAlt size={40} className='text-gray-400 group-hover:text-secondary' />
                            <p className='text-[14px] text-gray-500'>Click to upload</p>
                          </div>
                    }
                </label>
                <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required />
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='flex flex-col gap-2'>
                    <p className='text-gray-600 font-medium'>Product name</p>
                    <input onChange={onChangeHandler} value={data.name} className='p-3 border border-gray-200 rounded-xl outline-none focus:border-secondary transition-colors bg-gray-50' type="text" name='name' placeholder='Type here' required />
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-gray-600 font-medium'>Product price</p>
                    <input onChange={onChangeHandler} value={data.price} className='p-3 border border-gray-200 rounded-xl outline-none focus:border-secondary transition-colors bg-gray-50' type="number" name='price' placeholder='$20' required />
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <p className='text-gray-600 font-medium'>Product description</p>
                <textarea onChange={onChangeHandler} value={data.description} className='p-3 border border-gray-200 rounded-xl outline-none focus:border-secondary transition-colors bg-gray-50 resize-none' name="description" rows="4" placeholder='Write content here' required></textarea>
            </div>

            <div className='flex flex-col gap-2 w-full md:w-1/2'>
                <p className='text-gray-600 font-medium'>Product category</p>
                <select onChange={onChangeHandler} name="category" className='p-3 border border-gray-200 rounded-xl outline-none focus:border-secondary transition-colors bg-white cursor-pointer'>
                    <option value="Salad">Salad</option>
                    <option value="Rolls">Rolls</option>
                    <option value="Deserts">Deserts</option>
                    <option value="Sandwich">Sandwich</option>
                    <option value="Cake">Cake</option>
                    <option value="Pure Veg">Pure Veg</option>
                    <option value="Pasta">Pasta</option>
                    <option value="Noodles">Noodles</option>
                </select>
            </div>

            <button type='submit' className='w-full md:w-[200px] py-3 bg-primary text-black font-bold rounded-full hover:scale-[1.02] transition-transform shadow-soft mt-4'>ADD ITEM</button>
        </form>
    </div>
  )
}

export default Add
