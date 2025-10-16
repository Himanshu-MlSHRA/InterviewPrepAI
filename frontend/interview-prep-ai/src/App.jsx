import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import LandingPage from './Pages/LandingPage'
import InterviewPrep from './Pages/InterviewPrep/InterviewPrep'
import Dashboard from './Pages/home/dashboard'
import Login from "./Pages/Auth/Login";
import SignUp from "./Pages/Auth/SignUp";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/interview-prep' element={<InterviewPrep />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>

      <Toaster 
      toastOptions={{
        className: "",
        style: {
          fontSize: '15px',
        },
      }}/>
    </div>
  )
}

export default App
