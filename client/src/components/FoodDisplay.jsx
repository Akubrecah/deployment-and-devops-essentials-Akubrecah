import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import FoodItem from './FoodItem'

const FoodDisplay = ({category}) => {

  const {food_list} = useContext(StoreContext)

  return (
    <div className='mt-[50px] mb-[100px]' id='food-display'>
      <div className="flex items-center justify-between mb-8">
        <h2 className='text-[32px] font-bold text-dark'>Top dishes near you</h2>
        <div className="h-[4px] w-[100px] bg-primary rounded-full"></div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-[40px]">
        {food_list.map((item, index)=>{
          if (category==="All" || category===item.category) {
            return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
          }
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
