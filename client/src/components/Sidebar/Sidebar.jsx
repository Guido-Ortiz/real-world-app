import React from 'react'
import SidebarItem from './SidebarItem/SidebarItem'
import DashboardIcon from '@mui/icons-material/Dashboard';
import KeyIcon from '@mui/icons-material/Key';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ContactsIcon from '@mui/icons-material/Contacts';
import PersonIcon from '@mui/icons-material/Person';
import { Box } from '@mui/material';

const Sidebar = () => {
  return (
    <Box sx={{ border: '1px solid red', width: '250px', height: '100vh'}}>
        <SidebarItem item='Home' icon={<DashboardIcon />} link='/' />
        <SidebarItem item='My Account' icon={<KeyIcon />} link='/' />
        <SidebarItem item='Bank Accounts' icon={<CalendarMonthIcon />} link='/' />
        <SidebarItem item='Notifications' icon={<ContactsIcon />} link='/' />
        <SidebarItem item='Logout' icon={<PersonIcon />} link='/' />
    </Box>
  )
}

export default Sidebar