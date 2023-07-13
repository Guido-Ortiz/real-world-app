import React from 'react'
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import SidebarItem from './SidebarItem/SidebarItem'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import { Box, Typography } from '@mui/material';
import User from './User/User';
import AccountBalance from './AccountBalance/AccountBalance';
import { makeStyles } from '@mui/styles';
import { useDispatch } from 'react-redux';
import { resetUser } from '../../redux/actions/actions';

const useStyles = makeStyles((theme) => ({
  box: {
    '&:hover': {
      cursor: 'pointer',
      color: '1976d2'
    },
  },
}));

const Sidebar = () => {

  const { pathname } = useLocation()

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const classes = useStyles();

  const handleLogout = () => {
    localStorage.removeItem("logged_in")
    localStorage.removeItem("user")
    localStorage.removeItem("name")
    localStorage.removeItem("lastname")
    dispatch(resetUser())
    navigate("/login")
  }

  const sidebarOptions = [
    {
      path: '/',
      item: 'Home',
      icon: <HomeIcon />,
      color: '#1976d2',
    },
    {
      path: '/personal',
      item: 'My Account',
      icon: <HomeIcon />,
      color: '#1976d2',
    },
    {
      path: '/bankaccounts',
      item: 'Bank Accounts',
      icon: <HomeIcon />,
      color: '#1976d2',
    },
    {
      path: '/notifications',
      item: 'Notifications',
      icon: <HomeIcon />,
      color: '#1976d2',
    },
  ];

  return (
    <Box sx={{
      // border: '1px solid red', 
      width: '280px', height: '100vh', borderRight: '1px solid grey', background: '#fff'
    }}>
      <User />
      <AccountBalance />


 

       {
        pathname === '/' ? <SidebarItem item='Home' icon={<HomeIcon sx={{ color: '#1976d2' }} />} link='/' color='#1976d2' /> : <SidebarItem item='Home' icon={<HomeIcon sx={{ color: 'grey' }} />} link='/' />
      }
      {
        pathname === '/personal' ? <SidebarItem item='My Account' icon={<PersonIcon sx={{ color: '#1976d2' }} />} link='/personal' color='#1976d2' /> : <SidebarItem item='My Account' icon={<PersonIcon sx={{ color: 'grey' }} />} link='/personal' />
      }
      {
        pathname === '/bankaccounts' ? <SidebarItem item='Bank Accounts' icon={<AccountBalanceIcon sx={{ color: '#1976d2' }} />} link='/bankaccounts' color='#1976d2' /> : <SidebarItem item='Bank Accounts' icon={<AccountBalanceIcon sx={{ color: 'grey' }} />} link='/bankaccounts' />
      }
      {
        pathname === '/notifications' ? <SidebarItem item='Notifications' icon={<NotificationsIcon sx={{ color: '#1976d2' }} />} link='/notifications' color='#1976d2' /> : <SidebarItem item='Notifications' icon={<NotificationsIcon sx={{ color: 'grey' }} />} link='/notifications' />
      } 

{/*       
{sidebarOptions.map((option) => (
        <SidebarItem
          key={option.path}
          item={option.item}
          icon={<HomeIcon sx={{ color: pathname === option.path ? option.color : 'grey' }} />}
          link={option.path}
          color={option.color}
        />
      ))} */}



      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: '50px', color: 'grey', padding: '8px', paddingLeft: '15px' }} onClick={handleLogout} className={classes.box}>
        <LogoutIcon />
        <Typography variant='h6' sx={{ marginLeft: '10px', letterSpacing: '1px' }}>Logout</Typography>
      </Box>

    </Box>
  )
}

export default Sidebar