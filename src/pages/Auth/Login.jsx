import React from 'react'
import {Link} from 'react-router-dom'
import "./auth.css"

function Login() {
  return (
    <div className='dm-ath '>
      <div className='fm-a'>
        <form action="">
            <h1 className='text-center text-3xl'>Login <Link to='/' className='float-right text-sm text-red-600'>X</Link></h1>
            <div className='p-3'>
                <label htmlFor="">Email</label>
                <input className='w-full p-1 bg-transparent text-blue-400 focus:border-b-blue-400 outline-none border-0 border-b' type="text" name="" id="" />
            </div>
            <div className='p-3'>
                <label htmlFor="">Password</label>
                <input className='w-full p-1 bg-transparent text-blue-400 focus:border-b-blue-400 outline-none border-0 border-b' type="password" name="" id="" />
            </div>
            <div className="p-3">
                <button className='w-full py-2'>Login</button>
            </div>
            <div>
                <p className='text-center text-sm'>Don't have Account? <Link to="/register" className='text-blue-700'>Register</Link></p>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Login
