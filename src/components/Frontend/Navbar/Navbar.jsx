import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
// Custom Imports 
import "./navbar.css"
import logo from '../../../assets/images/logo.png'

function Navbar() {
    const [scrollBackground, setScrollBackground] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 0) {
            setScrollBackground(true);
          } else {
            setScrollBackground(false);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
    }, []);

  return (
    <nav className={`flex flex-wrap w-full px-4 mx-auto ${scrollBackground ? "nav-scroll" : ""}`}>
        <Link to="/" className='flex items-center gap-2'>
            <img src={logo} className='px-3' width={"150px"}/>
        </Link>
        <div className='block w-auto ml-auto'>
            <ul className=' flex justify-between p-4'>
                <li>
                    <Link to="/login" className='px-2 py-2 hover:bg-slate-700 hm-auth'>Login</Link>
                </li>
                |
                <li>
                    <Link to="/register" className='px-2 py-2 hover:bg-slate-700 hm-auth'>SignUp</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
