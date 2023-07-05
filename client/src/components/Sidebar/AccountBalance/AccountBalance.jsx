import { Box, Typography } from '@mui/material'
import React from 'react'

const AccountBalance = () => {
  return (
    <Box sx={{
        //border: '1px solid red',
        display: 'flex', flexDirection: 'column', padding: '10px', marginLeft: '15px', marginBottom: '10px'}}>
        <Typography variant='h5' sx={{ fontWeight: 'bold', color: '#1976d2' }}>$ 1,681.37</Typography>
        <Typography variant='subtitle1'>Account Balance</Typography>
    </Box>
  )
}

export default AccountBalance