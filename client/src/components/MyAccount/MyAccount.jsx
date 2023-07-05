import React from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';
import Movements from './Movements/Movements';
import SelectDate from './Select/Select';

const movements = [
    { id: 1, one: 'Edgar Johns', two: 'Arely Kertzman', amount: 259.71 },
    { id: 2, one: 'Edgar Johns', two: 'Ibrahim Dickens', amount: 140.36 },
    { id: 3, one: 'Ibrahim Dickens', two: 'Edgar Johns', amount: 363.14 },
]

const MyAccount = () => {
    return (
        <Paper sx={{
            //border: '1px solid red',
            width: '90%', display: 'flex', flexDirection: 'column', padding: '20px', margin: '0 auto', marginTop: '20px'
        }}>
            <Typography variant='h5' sx={{ marginBottom: '15px', color: '#1976d2' }}>My Account Movements</Typography>
            <Box sx={{
                //border: '1px solid blue',
                display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'
            }}>
                <SelectDate />

            </Box>
            <Box sx={{
                //border: '1px solid orange', 
                display: 'flex', flexDirection: 'column', marginTop: '20px', padding: '5px'
            }}>
                <Typography variant='subtitle2' sx={{ color: 'grey' }}>Personal</Typography>
                {
                    movements.map(e => {
                        return (
                            <div key={e.id}>
                                <Movements id={e.id} one={e.one} two={e.two} amount={e.amount} />
                            </div>
                        )
                    })
                }
            </Box>
        </Paper>
    )
}

export default MyAccount