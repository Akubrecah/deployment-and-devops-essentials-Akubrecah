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
    <div className='sticky top-0 z-50 py-4 px-8 flex justify-between items-center bg-white/80 backdrop-blur-md shadow-sm mb-5 rounded-b-[20px] transition-all duration-300'>
      <Link to='/'><h1 className='text-[32px] font-bold text-primary tracking-tight cursor-pointer hover:scale-105 transition-transform'>Tomato.</h1></Link>
      <div className="flex items-center gap-8">
        <ul className="hidden md:flex gap-8 text-[16px] font-medium text-dark">
            <Link to='/' className='hover:text-primary cursor-pointer transition-colors'>Home</Link>
            <Link to='/menu' className='hover:text-primary cursor-pointer transition-colors'>Menu</Link>
            <Link to='/about' className='hover:text-primary cursor-pointer transition-colors'>About Us</Link>
            <Link to='/contact' className='hover:text-primary cursor-pointer transition-colors'>Contact</Link>
            <Link to='/app' className='hover:text-primary cursor-pointer transition-colors'>App</Link>
        </ul>
        <div className="flex items-center gap-6">
          <div className="relative group">
            <Link to='/cart'><FaShoppingBasket size={24} className='text-dark cursor-pointer hover:text-primary transition-colors' /></Link>
            <div className={getTotalCartAmount() === 0 ? "" : "absolute min-w-[10px] min-h-[10px] bg-primary rounded-full top-[-5px] right-[-5px] border-2 border-white"}></div>
          </div>
          {!token ? <button onClick={() => setShowLogin(true)} className='bg-transparent border border-primary text-primary font-bold py-2 px-6 rounded-[50px] hover:bg-primary hover:text-white transition-all duration-300'>Sign In</button>
            : <div className='relative group'>
                <FaUserCircle size={30} className='text-primary cursor-pointer' />
                <ul className='absolute hidden group-hover:flex flex-col gap-2.5 bg-white py-3 px-6 rounded-xl shadow-card border border-gray-100 right-0 z-10 w-[150px] animate-fadeIn'>
                  <li onClick={()=>navigate('/myorders')} className='flex items-center gap-2.5 cursor-pointer hover:text-primary font-medium'><p>Orders</p></li>
                  <li onClick={logout} className='flex items-center gap-2.5 cursor-pointer hover:text-primary font-medium'><p>Logout</p></li>
                </ul>
              </div>}
        </div>
      </div>
    </div>
  )
}

export default Navbar
