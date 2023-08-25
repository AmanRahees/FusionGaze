import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import "./movie.css"
import Navbar from '../../../components/Frontend/Navbar/Navbar'
import Footer from '../../../components/Frontend/Footer/Footer'

function Movie() {
    const [showTrailer, setShowTrailer] = useState(false);
    const toggleTrailer = () => {
        setShowTrailer(prevShowTrailer => !prevShowTrailer);
    };
    const navigate = useNavigate();
    const goToBooking = () => {
        navigate('/movie/book')
    }
  return (
    <div className='bg-black'>
        <Navbar/>
        <div className="pt-16 px-10 md:p-28">
            <div className='dmv-pt'>
                <div>
                    <img className="dmv-poster mx-auto " src="https://m.media-amazon.com/images/M/MV5BMDJiNzUwYzEtNmQ2Yy00NWE4LWEwNzctM2M0MjE0OGUxZTA3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX280_CR0,0,280,414_.jpg" alt=""/>
                    <div className="flex my-3 justify-evenly gap-3">
                        <button id="getTrailer" onClick={toggleTrailer} className='w-full py-2 rounded-lg'>Trailer <i className="fa-solid fa-play text-sm"></i></button>
                        <button id="bookTicket" onClick={goToBooking} className='w-full py-2 rounded-lg'>Book Ticket</button>
                    </div>
                </div>
                <div className="mv-dts md:px-10">
                    <h1 className='text-2xl md:text-4xl'>Extraction 2</h1>
                    <p className='indent-7 p-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam nostrum beatae iusto eligendi! Maiores maxime voluptatum error veniam accusamus pariatur quaerat est soluta autem? Quidem dolores corrupti possimus aperiam sapiente!</p>
                    {/* <div className="flex md:justify-normal justify-center">
                        <p className="p-3 text-gray-400">Action</p>
                        <p className="p-3 text-gray-400">Drama</p>
                        <p className="p-3 text-gray-400">Fantasy</p>
                    </div> */}
                    <p className="p-2 text-gray-400">Action/Thriller</p>
                    <p className="p-2"><strong>IMDb Rating</strong>: <i className="fa-solid fa-star"></i> 9/10</p>
                    <p className="p-2"><strong>Duration</strong>: 2hr 39m</p>
                    <p className="p-2"><strong>Relase Date</strong>: 23 March, 2023</p>
                </div>
            </div>
            {showTrailer && (
            <div className="py-10 mt-5" style={{background:"#0f0f11"}}>
                <div className='py-3 px-10'>
                    <button className='bk-cls text-red-600' onClick={toggleTrailer} data-tooltip="Close">X</button>
                    {/* <h1 className='text-2xl mb-3'>Trailer</h1> */}
                    <iframe className='mx-auto w-full h-72 md:h-96' src="https://www.youtube.com/embed/w8xrTMM7t-w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
            )}
        </div>
        <Footer/>
    </div>
  )
}

export default Movie
