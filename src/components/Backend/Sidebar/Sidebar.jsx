import React from 'react'
import {Link} from 'react-router-dom'
import "./sidebar.css"
import defaultImage from '../../../assets/images/default.png';
import icon from '../../../assets/images/icon.png';
import logo from '../../../assets/images/logo.png';

function Sidebar() {
  const extendSidebar = () => {
    const sidebar = document.querySelector('.sdbDv');
    sidebar.classList.toggle('active');
    const icon = document.querySelector('.xtnd-icon');
    if (icon.classList.contains('fa-angle-right')) {
        icon.classList.remove('fa-angle-right');
        icon.classList.add('fa-angle-left');
    } else {
        icon.classList.remove('fa-angle-left');
        icon.classList.add('fa-angle-right');
    }
  }
  return (
    <div className='sdbDv'>
      <button className='bg-black xtnd' onClick={extendSidebar}>
        <i className="fa-solid xtnd-icon fa-angle-right"></i>
      </button>
      <div className="sdb-cnt">
        <div className="logo mt-3">
          <img src={icon} className='sht'/>
          <img src={logo} className='lng'/>
        </div>
        <div id="adminBlock">
            <img id="adminImg" src={defaultImage}/>
            <div id="adminName">
              <p className='mt-1'>Aman Rahees</p>
              <span className='text-xs text-gray-500 block'>Admin</span>
            </div>
        </div>
        <div className="sdb-ul">
            <ul>
              <Link>
                <li>
                    <i className="fa-solid text-lg fa-gauge-high"></i>
                    <span className='my-auto'>Dashboard</span>
                </li>
              </Link>
              <Link>
                <li>
                    <i className="fa-solid text-lg fa-warehouse"></i>
                    <span className='my-auto'>Theatres</span>
                </li>
              </Link>
              <Link>
                <li>
                    <i className="fa-solid text-lg fa-users"></i>
                    <span className='my-auto'>Customers</span>
                </li>
              </Link>
              <Link>
                <li>
                    <i className="fa-solid text-lg fa-clapperboard"></i>
                    <span className='my-auto'>Movies</span>
                </li>
              </Link>
            </ul>
        </div>
        <div className='my-5 stg-dv'>
              <i className="fa-solid fa-gear text-lg hover:text-xl"></i>
              <span className='my-auto'>Settings</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
