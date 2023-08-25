import React from 'react'
import {Link} from 'react-router-dom'
import "./dashboard.css"
import Sidebar from "../../../components/Backend/Sidebar/Sidebar"

function Dashboard() {
  return (
    <div className='dbd-dv'>
      <Sidebar/>
      <div className="minDv">
        <div className="cntDV"> 
          <div className='mb-5 '>
            <div className="float-right flex gap-2">
            <div className="bg-black px-4 py-2"><i className="fa-solid fa-bell"></i></div>
            <div className="bg-black px-4 py-2">+</div>
            </div>
            <p className='text-black text-3xl font-bold'>Dashboard</p>
            <span className="block text-gray-500 text-sm">14 Jan, 2023</span>
          </div>
          <div className="card-wrap gap-2">
              <Link className="card bg-violet-300 rounded shadow-lg">
                <i className="fa-solid fa-trash text-lg text-black float-right"></i>
                <p className='text-black text-lg'>Sales</p>
                <p className='text-black text-lg float-right mt-10'>$3874</p>
              </Link>
              <Link className="card bg-blue-300 rounded shadow-lg">
                <i className="fa-solid fa-trash text-lg text-black float-right"></i>
                <p className='text-black text-lg'>Users</p>
                <p className='text-black text-lg float-right mt-10'>$3874</p>
              </Link>
              <Link className="card bg-green-300 rounded shadow-lg">
                <i className="fa-solid fa-trash text-lg text-black float-right"></i>
                <p className='text-black text-lg'>Movies</p>
                <p className='text-black text-lg float-right mt-10'>$3874</p>
              </Link>
              <Link className="card bg-green-400 rounded shadow-lg">
                <i className="fa-solid fa-trash text-lg text-black float-right"></i>
                <p className='text-black text-lg'>Shows</p>
                <p className='text-black text-lg float-right mt-10'>$3874</p>
              </Link>
          </div>
          <div className="">
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
