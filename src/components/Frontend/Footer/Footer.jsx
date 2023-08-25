import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <footer className='bg-zinc-950 px-10 py-8 flex justify-between items-center'>
        {/* <div className='text-center md:text-left flex gap-5'>
            <i className="fab fa-instagram text-2xl hover:text-rose-300"></i>
            <i className="fab fa-facebook-f text-xl hover:text-blue-600"></i>
            <i className="fab fa-twitter text-2xl hover:text-sky-400"></i>
        </div> */}
        <div className="text-center mx-auto">
            <p>© 2023 FusionGaze | All Rights Reserved</p>
        </div>
    </footer>
  )
}

export default Footer
