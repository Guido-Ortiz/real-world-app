import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Badge } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const Topbar = () => {
  return (
    <Box sx={{
      // border: '1px solid red', 
      height: 'auto'
    }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Real World App
          </Typography>
          <Button color="inherit" variant='contained' sx={{ backgroundColor: 'green' }}>$ New</Button>
          <Badge badgeContent={4} color="warning" sx={{ marginLeft: '10px' }}>
            <NotificationsNoneIcon color="action" />
          </Badge>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Topbar