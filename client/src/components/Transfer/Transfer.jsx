import React from 'react';
import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import transferImage from '../../assets/transferImage.svg';

const Transfer = () => {
    return (
        <Paper sx={{
            //border: '1px solid red',
            width: '90%', display: 'flex', flexDirection: 'column', padding: '20px', margin: '0 auto', marginTop: '20px'
        }}>

            <Typography variant='h5' color='#1976d2'>Transfer</Typography>
            <Typography variant='subtitle1' sx={{ color: 'grey' }}>Please complete the following form in order to make a money transfer.</Typography>
            <Box sx={{
               // border: '1px solid red', 
                display: 'flex', flexDirection: 'row', marginTop: '30px' }}>
                <Box sx={{ width: '30%', height: '80%', marginRight: '20px' }}>
                    <img src={transferImage} style={{ width: '100%', height: '100%' }} />
                </Box>
                <Box sx={{
                    //border: '1px solid orange', 
                    display: 'flex', flexDirection: 'column', marginTop: '20px', padding: '5px', width: '100%'
                }}>
                    <TextField id="outlined-basic" label="Destination" variant="outlined" name='destination' />
                    <TextField id="outlined-basic" label="Amount" type='number' variant="outlined" name='amount' sx={{ margin: '10px 0' }} />
                    
                    <Button variant='contained'>Make Transfer</Button>
                </Box>
            </Box>

        </Paper>
    )
}

export default Transfer