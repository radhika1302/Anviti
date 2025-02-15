import React from 'react'
import {Route , Routes} from 'react-router-dom'
import Home from './pages/Home'
import PlacedStudents from './pages/PlacedStudents'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import SentRequest from './pages/SentRequest'
import Profile from './pages/Profile'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
     
  <Navbar/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/PlacedStudents' element={<PlacedStudents/>} />
      <Route path='/PlacedStudents/:Company' element={<PlacedStudents />}/>
      <Route path='/login' element={<Login />}/>
      <Route path ='/about' element={<About />}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route path='/myprofile' element={<Profile />}/>
     <Route path='/sentrequest' element={<SentRequest />}/>
     <Route path='/appointment/:docId' element={<Appointment/>}/>
    </Routes>

    </div>
  )
}

export default App
