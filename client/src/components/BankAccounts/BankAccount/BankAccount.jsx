import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { deleteBankAccount } from '../../../redux/actions/actions';

const BankAccount = ({ id, name, bank }) => {

    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteBankAccount(id))
    }

    return (
        <Box sx={{
            //border: '1px solid fuchsia',
            display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '5px', margin: '8px 0'
        }}>
            <Typography variant='h6' sx={{ color: '#1976d2' }}>{name} - {bank}</Typography>
            <Tooltip title="Delete" onClick={() => handleDelete(id)}>
                <IconButton>
                    <DeleteIcon sx={{ color: '#1976d2' }} />
                </IconButton>
            </Tooltip>

        </Box>
    )
}

export default BankAccount