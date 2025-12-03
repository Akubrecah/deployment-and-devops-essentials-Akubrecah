import React, { useState } from 'react'
import ExploreMenu from '../components/ExploreMenu'
import FoodDisplay from '../components/FoodDisplay'

const Menu = () => {
  const [category, setCategory] = useState("All");

  return (
    <div className='animate-fadeIn pt-10'>
      <div className="text-center mb-10">
        <h2 className='text-[40px] font-bold text-dark mb-4'>Our Menu</h2>
        <p className='text-gray-500 max-w-[600px] mx-auto'>Explore our diverse menu featuring a delectable array of dishes crafted with the finest ingredients.</p>
      </div>
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  )
}

export default Menu
