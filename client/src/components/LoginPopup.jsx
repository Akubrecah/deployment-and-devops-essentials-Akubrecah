import React, { useContext, useState } from 'react'
import { StoreContext } from '../context/StoreContext'
import axios from 'axios'
import { FaTimes } from 'react-icons/fa'

const LoginPopup = ({ setShowLogin }) => {

  const { url, setToken } = useContext(StoreContext)

  const [currState, setCurrState] = useState("Login")
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
  }

  const onLogin = async (event) => {
    event.preventDefault()
    let newUrl = url;
    if (currState === "Login") {
      newUrl += "/api/user/login"
    } else {
      newUrl += "/api/user/register"
    }

    const response = await axios.post(newUrl, data);

    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false)
    } else {
      alert(response.data.message)
    }
  }

  return (
    <div className='fixed z-50 w-full h-full bg-[#00000090] grid place-items-center backdrop-blur-sm animate-fadeIn'>
      <form onSubmit={onLogin} className="place-self-center w-[max(23vw,330px)] bg-white flex flex-col gap-6 p-8 rounded-[24px] shadow-2xl text-[14px] relative">
        <div className="flex justify-between items-center text-dark font-bold text-[24px]">
          <h2>{currState}</h2>
          <FaTimes onClick={() => setShowLogin(false)} className='cursor-pointer text-gray-400 hover:text-dark transition-colors' />
        </div>
        <div className="flex flex-col gap-4">
          {currState === "Login" ? <></> : <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your name' required className='outline-none border border-gray-200 p-3 rounded-xl focus:border-secondary transition-colors bg-gray-50' />}
          <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your email' required className='outline-none border border-gray-200 p-3 rounded-xl focus:border-secondary transition-colors bg-gray-50' />
          <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required className='outline-none border border-gray-200 p-3 rounded-xl focus:border-secondary transition-colors bg-gray-50' />
        </div>
        <button type='submit' className='border-none p-3 rounded-full text-white bg-secondary font-bold text-[16px] cursor-pointer hover:bg-[#008f73] transition-colors shadow-soft'>{currState === "Sign Up" ? "Create account" : "Login"}</button>
        <div className="flex items-start gap-2 -mt-2">
          <input type="checkbox" required className='mt-[4px] accent-secondary' />
          <p className='text-gray-500 text-[12px]'>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login"
          ? <p className='text-gray-500'>Create a new account? <span onClick={() => setCurrState("Sign Up")} className='text-secondary font-bold cursor-pointer hover:underline'>Click here</span></p>
          : <p className='text-gray-500'>Already have an account? <span onClick={() => setCurrState("Login")} className='text-secondary font-bold cursor-pointer hover:underline'>Login here</span></p>
        }
      </form>
    </div>
  )
}

export default LoginPopup
