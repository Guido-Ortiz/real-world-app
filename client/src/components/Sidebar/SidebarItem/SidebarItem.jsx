import { Box } from '@mui/material'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const SidebarItem = ({ icon, item, link }) => {
    const location = useLocation()
    
    return (
        <Link to={link} style={{ textDecoration: 'none' }}>
            <Box location={location.pathname} link={link} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: '50px', border: '1px solid blue' }}>
                {icon}
                <h4>{item}</h4>
            </Box>
        </Link>
    )
}

export default SidebarItem