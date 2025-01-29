import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import Destination from './pages/Destination'
import Booking from './pages/Booking'
import Footer from './components/footer/Footer'
import SignIn from './pages/book/Signin'
import SignUp from './pages/book/SingUp'
import HotelBooking from './pages/book/HotelBooking'
import TourPackages from './pages/book/TourPackages'
import VehicleBooking from './pages/book/VehicleBooking'
import TrainBooking from './pages/book/TrainBooking'
import Profile from './pages/book/Profile'
const App = () => {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/' element={<Home />} />
        <Route path='/destination' element={<Destination />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/hotels' element={<HotelBooking />} />
        <Route path='/tour-packages' element={<TourPackages />} />
        <Route path='/trainbooking' element={<TrainBooking/>} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/vehicles' element={<VehicleBooking />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App