import React from 'react'
// Custom Imports
import Navbar from '../../../components/Frontend/Navbar/Navbar'
import Banner from '../../../components/Frontend/Banner/Banner'
import Slider from '../../../components/Frontend/Slider/Slider'
import Footer from '../../../components/Frontend/Footer/Footer'

function Home() {
  return (
    <div className='bg-black'>
      <Navbar/>
      <Banner/>
      <div className='pt-8 px-10'>
        <h1 className='text-3xl'>In Cinemas</h1>
        <div className='p-3'>
            <Slider/>
        </div>
      </div>
      <div className='pt-8 px-10'>
        <h1 className='text-3xl'>Coming Soon</h1>
        <div className='p-3'>
            <Slider/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home