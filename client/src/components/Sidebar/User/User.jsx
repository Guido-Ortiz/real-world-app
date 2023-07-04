import { Stack, Avatar, Typography } from '@mui/material'
import React from 'react'

const User = () => {
  return (
    <Stack direction='row' spacing={2} sx={{ 
        // border: '1px solid orange', 
        padding: '10px' }}>
        <Avatar sx={{ width: 56, height: 56 }}>H</Avatar>
        <Stack direction='column'>
            <Typography variant='subtitle1'>Edgar J</Typography>
            <Typography variant='subtitle1'>@katharina_bernier</Typography>
        </Stack>
    </Stack>
  )
}

export default User