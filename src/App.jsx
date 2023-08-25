import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// Custom Imports
import Home from './pages/Base/Home/Home';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Movie from './pages/Base/Movie/Movie';
import Booking from './pages/Base/Booking/Booking';
import Dashboard from './pages/Admin/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/movie' element={<Movie/>}/>
        <Route path='/movie/book' element={<Booking/>}/>
        <Route path='/admin' element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;
