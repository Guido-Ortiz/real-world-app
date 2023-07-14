import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const SidebarItem = ({ icon, item, link, color }) => {

    return (
        <Link to={link} style={{ textDecoration: 'none' }}>
            <Box  link={link} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', height: '50px', padding: '8px', paddingLeft: '15px'}}>
                {icon}
                <Typography variant='h6' sx={{ marginLeft: '20px', letterSpacing: '1px', color: color ? {color} : "grey", fontWeight: color ? 'bold' : 'normal'}}>{item}</Typography>
            </Box>
        </Link>
    )
}

export default SidebarItem