import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Badge, Tooltip } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Link } from 'react-router-dom';

const Topbar = () => {
  return (
    <Box sx={{
      // border: '1px solid red', 
      height: 'auto'
    }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, letterSpacing: "1.5px" }}>
            Real World App
          </Typography>
          <Link to='/transfer'>
            <Button color="inherit" variant='contained' sx={{ backgroundColor: 'green', color: '#fff' }}>$ New</Button>
          </Link>
          <Tooltip title="Notifications">
            <Link to='/notifications'>
            <IconButton>
              <Badge badgeContent={4} color="warning" sx={{ marginLeft: '20px' }}>
                <NotificationsNoneIcon color="action" />
              </Badge>
            </IconButton>
            </Link>
          </Tooltip>

        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Topbar