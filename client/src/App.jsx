import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import ProtectedRoutes from './services/ProtectedRoutes';

function App() {


  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path='/signup' element={<Login />} />

          <Route path='/' element={<ProtectedRoutes />}>

            <Route path='/' element={<Home />} />

          </Route>

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
