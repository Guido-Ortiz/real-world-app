import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createBankAccount } from '../../../redux/actions/actions'

const CreateBankAccount = () => {

  const dispatch = useDispatch()

  const [input, setInput] = useState({
    name: '',
    bank: ''
  })

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
    setInput({
      name: '',
      bank: ''
    })
  }

  const handleSubmit = () => {
    dispatch(createBankAccount(input))
  }

  return (
    <Paper sx={{
      //border: '1px solid red',
      width: '90%', display: 'flex', flexDirection: 'column', padding: '20px', margin: '0 auto', marginTop: '20px'
    }}>

      <Typography variant='h5' color='#1976d2'>Create a new Bank Account</Typography>
      <Typography variant='subtitle1' sx={{ color: 'grey' }}>Please complete the following form in order to add a new bank account to your Real World App.</Typography>
      <Box sx={{
        //border: '1px solid orange', 
        display: 'flex', flexDirection: 'column', marginTop: '20px', padding: '5px'
      }}>
        <TextField id="outlined-basic" label="Full Name" variant="outlined" name='name' value={input.name} onChange={e => handleChange(e)} />
        <TextField id="outlined-basic" label="Bank" variant="outlined" name='bank' sx={{ margin: '10px 0' }} value={input.bank} onChange={e => handleChange(e)} />
        <Button variant='contained' onClick={handleSubmit}>Add to Real World App</Button>
      </Box>
    </Paper>
  )
}

export default CreateBankAccount