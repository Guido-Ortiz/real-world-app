import './App.css'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import ProtectedRoutes from './services/ProtectedRoutes';
import BankAccounts from './components/BankAccounts/BankAccounts';
import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/Topbar/Topbar';
import { Stack } from '@mui/material';

function App() {

  const location = useLocation()
  console.log(location.pathname !== '/signup');


  return (
    <>
        <div>
          <Stack direction='row' sx={{ backgroundColor: 'rgb(246, 248, 250)'}}> 
            { location.pathname !== "/signup" && <Sidebar /> }
            <Stack direction='column' sx={{ width: '100%' }}>
              { location.pathname !== '/signup' && <Topbar />}

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
    </>
  )
}

export default App
