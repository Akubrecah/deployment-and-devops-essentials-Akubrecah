import React from 'react'

const ExploreMenu = ({category, setCategory}) => {

  const menu_list = [
    { menu_name: "Salad", menu_image: "https://via.placeholder.com/150?text=Salad" },
    { menu_name: "Rolls", menu_image: "https://via.placeholder.com/150?text=Rolls" },
    { menu_name: "Deserts", menu_image: "https://via.placeholder.com/150?text=Deserts" },
    { menu_name: "Sandwich", menu_image: "https://via.placeholder.com/150?text=Sandwich" },
    { menu_name: "Cake", menu_image: "https://via.placeholder.com/150?text=Cake" },
    { menu_name: "Pure Veg", menu_image: "https://via.placeholder.com/150?text=Veg" },
    { menu_name: "Pasta", menu_image: "https://via.placeholder.com/150?text=Pasta" },
    { menu_name: "Noodles", menu_image: "https://via.placeholder.com/150?text=Noodles" }
  ]

  return (
    <div className='flex flex-col gap-5' id='explore-menu'>
      <h1 className='text-[#262626] font-medium text-[24px]'>Explore our menu</h1>
      <p className='max-w-[60%] text-[#808080] text-[14px]'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
      <div className="flex justify-between items-center gap-8 text-center my-5 overflow-x-scroll scrollbar-hide">
        {menu_list.map((item, index)=>{
            return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='cursor-pointer min-w-[80px]'>
                    <img src={item.menu_image} alt="" className={`w-[7.5vw] min-w-[80px] cursor-pointer rounded-[50%] transition duration-200 ${category===item.menu_name?"border-4 border-[#tomato] p-[2px]":""}`} />
                    <p className='mt-2.5 text-[#747474] text-[max(1.4vw,16px)] cursor-pointer'>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr className='my-2.5 h-[2px] bg-[#e2e2e2] border-none' />
    </div>
  )
}

export default ExploreMenu
