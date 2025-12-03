import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Login = ({ setUrl, setIsAuthenticated }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    // Hardcoded admin credentials for demonstration
    if (email === "admin@tomato.com" && password === "admin123") {
        setIsAuthenticated(true);
        localStorage.setItem("auth", "true");
        toast.success("Welcome Admin!");
    } else {
        toast.error("Invalid Credentials");
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
        <form onSubmit={onSubmitHandler} className='bg-white p-8 rounded-[24px] shadow-card w-[90%] max-w-[400px] flex flex-col gap-6 animate-fadeIn'>
            <h2 className='text-[28px] font-bold text-secondary text-center'>Admin Login</h2>
            <div className='flex flex-col gap-2'>
                <p className='text-gray-600 font-medium'>Email</p>
                <input onChange={(e)=>setEmail(e.target.value)} value={email} className='p-3 border border-gray-200 rounded-xl outline-none focus:border-secondary transition-colors bg-gray-50' type="email" placeholder='admin@tomato.com' required />
            </div>
            <div className='flex flex-col gap-2'>
                <p className='text-gray-600 font-medium'>Password</p>
                <input onChange={(e)=>setPassword(e.target.value)} value={password} className='p-3 border border-gray-200 rounded-xl outline-none focus:border-secondary transition-colors bg-gray-50' type="password" placeholder='admin123' required />
            </div>
            <button type='submit' className='w-full py-3 bg-primary text-black font-bold rounded-full hover:scale-[1.02] transition-transform shadow-soft mt-2'>LOGIN</button>
        </form>
    </div>
  )
}

export default Login
