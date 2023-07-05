import React, { useEffect } from 'react';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import BankAccount from './BankAccount/BankAccount';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAccounts } from '../../redux/actions/actions';

// const accounts = [
//   { id: 1, name: 'OHara', bank: 'Labadie Bank' },
//   { id: 2, name: 'Bernier', bank: 'Caixa Bank' }
// ]

const BankAccounts = () => {

  const dispatch = useDispatch()
  const accounts = useSelector(state => state.accounts)

  useEffect(() => {
    dispatch(getAccounts())
  }, [dispatch])

  return (
    <Paper sx={{
      //border: '1px solid red',
      width: '90%', display: 'flex', flexDirection: 'column', padding: '20px', margin: '0 auto', marginTop: '20px'
    }}>
      <Box sx={{
        //border: '1px solid blue',
        display: 'flex', flexDirection: 'row', justifyContent: 'space-between'
      }}>
        <Typography variant='h5'>Bank Accounts</Typography>
        <Link to='/bankaccounts/create'>
          <Button variant='contained'>Create</Button>
        </Link>
      </Box>
      <Box sx={{
        //border: '1px solid orange', 
        display: 'flex', flexDirection: 'column', marginTop: '20px', padding: '5px'
      }}>
        {
          accounts.map(e => {
            return (
              <div key={e.id}>
                <BankAccount id={e.id} name={e.name} bank={e.bank} />
              </div>
            )
          })
        }
      </Box>
    </Paper>
  )
}

export default BankAccounts