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
    <div className='absolute z-10 w-full h-full bg-[#00000090] grid place-items-center'>
      <form onSubmit={onLogin} className="place-self-center w-[max(23vw,330px)] text-[#808080] bg-white flex flex-col gap-6 p-6 rounded-lg text-[14px] animate-fadeIn">
        <div className="flex justify-between items-center text-black font-bold text-[20px]">
          <h2>{currState}</h2>
          <FaTimes onClick={() => setShowLogin(false)} className='cursor-pointer w-4' />
        </div>
        <div className="flex flex-col gap-5">
          {currState === "Login" ? <></> : <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your name' required className='outline-none border border-[#c9c9c9] p-2.5 rounded' />}
          <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your email' required className='outline-none border border-[#c9c9c9] p-2.5 rounded' />
          <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required className='outline-none border border-[#c9c9c9] p-2.5 rounded' />
        </div>
        <button type='submit' className='border-none p-2.5 rounded text-white bg-[#tomato] text-[15px] cursor-pointer'>{currState === "Sign Up" ? "Create account" : "Login"}</button>
        <div className="flex items-start gap-2 -mt-3">
          <input type="checkbox" required className='mt-[5px]' />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login"
          ? <p>Create a new account? <span onClick={() => setCurrState("Sign Up")} className='text-[#tomato] font-bold cursor-pointer'>Click here</span></p>
          : <p>Already have an account? <span onClick={() => setCurrState("Login")} className='text-[#tomato] font-bold cursor-pointer'>Login here</span></p>
        }
      </form>
    </div>
  )
}

export default LoginPopup
