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
    <div className='py-5 flex justify-between items-center bg-transparent'>
      <Link to='/'><h1 className='text-[32px] font-bold text-secondary tracking-tight'>GlovoClone.</h1></Link>
      <div className="flex items-center gap-8">
        <button className='bg-primary text-black font-bold py-2 px-6 rounded-[50px] text-[14px] hover:scale-105 transition-transform duration-300 shadow-soft'>
          Get started
        </button>
        <div className="relative group">
          <Link to='/cart'><FaShoppingBasket size={24} className='text-dark cursor-pointer hover:text-secondary transition-colors' /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "absolute min-w-[10px] min-h-[10px] bg-secondary rounded-full top-[-5px] right-[-5px] border-2 border-white"}></div>
        </div>
        {!token ? <button onClick={() => setShowLogin(true)} className='text-[16px] text-dark font-medium hover:text-secondary transition-colors'>Profile</button>
          : <div className='relative group'>
              <FaUserCircle size={30} className='text-secondary cursor-pointer' />
              <ul className='absolute hidden group-hover:flex flex-col gap-2.5 bg-white py-3 px-6 rounded-xl shadow-card border border-gray-100 right-0 z-10 w-[150px] animate-fadeIn'>
                <li onClick={()=>navigate('/myorders')} className='flex items-center gap-2.5 cursor-pointer hover:text-secondary font-medium'><p>Orders</p></li>
                <li onClick={logout} className='flex items-center gap-2.5 cursor-pointer hover:text-secondary font-medium'><p>Logout</p></li>
              </ul>
            </div>}
      </div>
    </div>
  )
}

export default Navbar
