import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext'
import { FaSearch, FaShoppingBasket, FaUserCircle } from 'react-icons/fa'

const Navbar = ({ setShowLogin }) => {

  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  }

  return (
    <div className='py-5 flex justify-between items-center'>
      <Link to='/'><h1 className='text-[max(3vw,25px)] font-bold text-[#tomato]'>Tomato.</h1></Link>
      <ul className="hidden md:flex list-none gap-5 text-[#49557e] text-[18px]">
        <Link to='/' onClick={() => setMenu("home")} className={`cursor-pointer ${menu === "home" ? "pb-[2px] border-b-2 border-[#49557e]" : ""}`}>home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={`cursor-pointer ${menu === "menu" ? "pb-[2px] border-b-2 border-[#49557e]" : ""}`}>menu</a>
        <a href='#app-download' onClick={() => setMenu("mobile-app")} className={`cursor-pointer ${menu === "mobile-app" ? "pb-[2px] border-b-2 border-[#49557e]" : ""}`}>mobile-app</a>
        <a href='#footer' onClick={() => setMenu("contact-us")} className={`cursor-pointer ${menu === "contact-us" ? "pb-[2px] border-b-2 border-[#49557e]" : ""}`}>contact us</a>
      </ul>
      <div className="flex items-center gap-10">
        <FaSearch size={24} className='text-[#49557e] cursor-pointer' />
        <div className="relative">
          <Link to='/cart'><FaShoppingBasket size={28} className='text-[#49557e] cursor-pointer' /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "absolute min-w-[10px] min-h-[10px] bg-[#tomato] rounded-[5px] top-[-8px] right-[-8px]"}></div>
        </div>
        {!token ? <button onClick={() => setShowLogin(true)} className='bg-transparent text-[16px] text-[#49557e] border border-[#tomato] py-2.5 px-[30px] rounded-[50px] cursor-pointer hover:bg-[#fff4f2] transition duration-300'>sign in</button>
          : <div className='relative group'>
              <FaUserCircle size={30} className='text-[#tomato] cursor-pointer' />
              <ul className='absolute hidden group-hover:flex flex-col gap-2.5 bg-[#fff2ef] py-3 px-6 rounded border border-[#tomato] right-0 z-10 w-[150px]'>
                <li onClick={()=>navigate('/myorders')} className='flex items-center gap-2.5 cursor-pointer hover:text-[#tomato]'><p>Orders</p></li>
                <li onClick={logout} className='flex items-center gap-2.5 cursor-pointer hover:text-[#tomato]'><p>Logout</p></li>
              </ul>
            </div>}
      </div>
    </div>
  )
}

export default Navbar
