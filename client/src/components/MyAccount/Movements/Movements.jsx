import { Box, Typography } from '@mui/material'
import React from 'react'

const Movements = ({ id, one, two, amount }) => {
    return (
        <Box sx={{
            //border: '1px solid red',
            display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '10px', margin: '5px 0', borderBottom: '1px solid grey'
        }}>
            <Box sx={{
                //border: '1px solid fuchsia',
                display: 'flex', flexDirection: 'column'
            }}>
                
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant='h6'>{one}</Typography>
                    <Typography variant='subtitle1' sx={{ color: 'grey', margin: '0 10px' }}> paid </Typography>
                    <Typography variant='h6'>{two}</Typography>
                </Box>

                <Typography variant='subtitle2' sx={{ color: 'grey' }}>Payment: #{id}</Typography>
            </Box>
            {
                amount < 0 
                ? <Typography variant='h5' sx={{ color: 'red' }}>$ {amount}</Typography>
                : <Typography variant='h5' sx={{ color: 'green' }}>$ {amount}</Typography>
            }
        </Box>
    )
}

export default Movements