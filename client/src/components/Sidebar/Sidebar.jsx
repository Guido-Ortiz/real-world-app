import React from 'react'
import { useNavigate } from 'react-router';
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
      },
    },
  }));

const Sidebar = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const classes = useStyles();

    const handleLogout = () => {
        localStorage.removeItem("logged_in")
        localStorage.removeItem("user")
        localStorage.removeItem("name")
        localStorage.removeItem("lastname")
        dispatch(resetUser())
        navigate("/signup")
        
    }
    return (
        <Box sx={{
            // border: '1px solid red', 
            width: '280px', height: '100vh', borderRight: '1px solid grey', background: '#fff'}}>
            <User />
            <AccountBalance />
            <SidebarItem item='Home' icon={<HomeIcon />} link='/' />
            <SidebarItem item='My Account' icon={<PersonIcon />} link='/personal' />
            <SidebarItem item='Bank Accounts' icon={<AccountBalanceIcon />} link='/bankaccounts' />
            <SidebarItem item='Notifications' icon={<NotificationsIcon />} link='/notifications' />

            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: '50px', color: 'grey', padding: '8px', paddingLeft: '15px' }} onClick={handleLogout} className={classes.box}>
                <LogoutIcon />
                <Typography variant='h6' sx={{ marginLeft: '10px' }}>Logout</Typography>
            </Box>

        </Box>
    )
}

export default Sidebar