import React from 'react'
import {Link} from 'react-router-dom'
import "./auth.css"

function Register() {
  return (
    <div className='dm-ath '>
      <div className='fm-arg'>
        <form action="">
            <h1 className='text-center text-3xl'>Register</h1>
            <div className="fm-arg-wrap">
                <div className='p-3'>
                    <label className="block">Name</label>
                    <input className='w-full p-1 bg-transparent text-blue-400 focus:border-b-blue-400 outline-none border-0 border-b' type="text" name="" id="" />
                </div>
                <div className='p-3'>
                    <label className="block">Phone</label>
                    <input className='w-full p-1 bg-transparent text-blue-400 focus:border-b-blue-400 outline-none border-0 border-b' type="text" name="" id="" />
                </div>
            </div>
            <div className="fm-arg-wrap">
                <div className='p-3 w-full'>
                    <label className="block">Email</label>
                    <input className='w-full p-1 bg-transparent text-blue-400 focus:border-b-blue-400 outline-none border-0 border-b' type="text" name="" id="" />
                </div>
            </div>
            <div className="fm-arg-wrap">
                <div className='p-3'>
                    <label className="block">Password</label>
                    <input className='w-full p-1 bg-transparent text-blue-400 focus:border-b-blue-400 outline-none border-0 border-b' type="text" name="" id="" />
                </div>
                <div className='p-3'>
                    <label className="block">Confirm Password</label>
                    <input className='w-full p-1 bg-transparent text-blue-400 focus:border-b-blue-400 outline-none border-0 border-b' type="text" name="" id="" />
                </div>
            </div>
            <div className="p-3">
                <button className='w-full py-2 bg-gray-600'>Register</button>
            </div>
            <div>
                <p className='text-center text-sm'>Already have Account? <Link to="/login" className='text-blue-700'>Login</Link></p>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Register
