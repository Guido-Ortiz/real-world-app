import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import ProtectedRoutes from './services/ProtectedRoutes';
import BankAccounts from './components/BankAccounts/BankAccounts';
import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/Topbar/Topbar';
import { Stack } from '@mui/material';

function App() {


  return (
    <>


      <BrowserRouter>


        <div>
          <Stack direction='row'>
            <Sidebar />
            <Stack direction='column' sx={{ width: '100%' }}>
              <Topbar />
                <Routes>

                  <Route path='/signup' element={<Login />} />

                  <Route path='/' element={<ProtectedRoutes />}>
                    <Route path='/' element={<Home />} />
                    <Route path='bankaccounts' element={<BankAccounts />} />
                  </Route>

                </Routes>
            </Stack>
          </Stack>
        </div>


        {/* <Routes>



          <Route path='/signup' element={<Login />} />

          <Route path='/' element={<ProtectedRoutes />}>

            <Route path='/' element={<Home />} />
            <Route path='bankaccounts' element={<BankAccounts />} />


          </Route>

        </Routes> */}

      </BrowserRouter>
    </>
  )
}

export default App
