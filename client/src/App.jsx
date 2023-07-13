import './App.css'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import ProtectedRoutes from './services/ProtectedRoutes';
import BankAccounts from './components/BankAccounts/BankAccounts';
import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/Topbar/Topbar';
import { Stack } from '@mui/material';
import MyAccount from './components/MyAccount/MyAccount';
import Transfer from './components/Transfer/Transfer';
import Notifications from './components/Notifications/Notifications';
import CreateBankAccount from './components/BankAccounts/CreateBankAccount/CreateBankAccount';
import Signup from './components/Signup/Signup';

function App() {

  const location = useLocation()

  return (
    <>
      <div>
        <Stack direction='row' sx={{ backgroundColor: 'rgb(246, 248, 250)' }}>
          {(location.pathname !== '/login' && location.pathname !== '/signup') && <Sidebar />}
          <Stack direction='column' sx={{ width: '100%' }}>
            {(location.pathname !== '/login' && location.pathname !== '/signup') && <Topbar />}

            <Routes>

              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />

              <Route path='/' element={<ProtectedRoutes />}>
                <Route path='/' element={<Home />} />
                <Route path='bankaccounts' element={<BankAccounts />} />
                <Route path='personal' element={<MyAccount />} />
                <Route path='transfer' element={<Transfer />} />
                <Route path='notifications' element={<Notifications />} />
                <Route path='bankaccounts/create' element={<CreateBankAccount />} />
              </Route>

            </Routes>

          </Stack>
        </Stack>
      </div>
    </>
  )
}

export default App
