import React, {useState} from 'react'
import "./booking.css"
import Navbar from '../../../components/Frontend/Navbar/Navbar'
import Footer from '../../../components/Frontend/Footer/Footer'

function Booking() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const staticData =  ["Kannur", "Mananthavady", "Calicut"]
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setQuery(inputValue);
    setShowResults(inputValue !== ''); // Show results only if there's input
    const filteredResults = inputValue
      ? staticData.filter(item =>
          item.toLowerCase().includes(inputValue.toLowerCase())
        )
      : [];
    setResults(filteredResults);
  };
  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setShowResults(false);
    setResults([]); // Clear suggestions when a suggestion is clicked
  };
  return (
    <div className='bg-black h-screen'>
      <Navbar/>
        <div className="pt-16 px-10 md:p-28">
          <h1 className='text-2xl font-semibold'>Book Ticket</h1>
          <div className="p-10 mt-5" style={{background:"#0f0f11"}}>
            <p className='text-lg mb-2'>Select City</p>
            <div className="">
                <input type="text" value={query}  onChange={handleInputChange} className='bg-transparent outline-none border rounded-lg p-2 w-full'/>
                {showResults && (
                  <ul className='rounded-lg border cty-sg'>
                  {results.length < 1 ? (
                    <li className='p-2'>Not Found</li>
                    ) : (
                    results.map((result, index) => (
                      <li className='p-2' key={index} onClick={() => handleSuggestionClick(result)}>{result}</li>
                    ))
                  )}
                  </ul>
                )}
            </div>
          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Booking
