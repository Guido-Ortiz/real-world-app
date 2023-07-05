import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const SidebarItem = ({ icon, item, link }) => {
    const location = useLocation()
    
    return (
        <Link to={link} style={{ textDecoration: 'none' }}>
            <Box location={location.pathname} link={link} sx={{ 
                //border: '1px solid red',
                display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-starty', height: '50px', color: 'grey', padding: '8px', paddingLeft: '15px'}}>
                {icon}
                <Typography variant='h6' sx={{ marginLeft: '20px' }}>{item}</Typography>
            </Box>
        </Link>
    )
}

export default SidebarItem