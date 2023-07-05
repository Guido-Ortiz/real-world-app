import React, { useEffect, useState } from 'react';
import { Box, Paper, TextField, Typography, Button } from '@mui/material';
import homeImage from '../../assets/undraw_personal_settings_kihd.svg';
import { useDispatch, useSelector } from 'react-redux';
import { editUser, getUsers } from '../../redux/actions/actions';

const Home = () => {

  const user = useSelector(state => state.user)
  
  const dispatch = useDispatch()

  // const name = localStorage.getItem("name")
  // const lastname = localStorage.getItem("lastname")
  // const email = localStorage.getItem("user")

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  const [input, setInput] = useState({
    name: user?.name,
    lastname: user?.lastname,
    phone: '',
    email: user?.email
  })

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  console.log(user.id)
  const handleSubmit = () => {
    dispatch(editUser(input))
  }

  return (
    <Paper sx={{
      // border: '1px solid red', 
      width: '70%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', margin: '0 auto', marginTop: '30px', padding: '20px'
    }}>
      <Typography variant='h5' sx={{ marginRight: '30px', color: '#1976d2' }}>User Settings</Typography>
      <Box sx={{
        //border: '1px solid red', 
        display: 'flex', flexDirection: 'row', width: '100%' }}>
        <Box sx={{ width: '30%', height: '80%', marginRight: '20px' }}>
          <img src={homeImage} style={{ width: '100%', height: '100%' }} />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '70%' }}>
          <TextField id="outlined-basic" label="Name" variant="outlined" name='name' value={input.name} onChange={e => handleChange(e)} sx={{ margin: '10px 0' }} />
          <TextField id="outlined-basic" label="Lastname" variant="outlined" name='lastname' value={input.lastname} onChange={e => handleChange(e)} sx={{ margin: '10px 0' }} />
          <TextField id="outlined-basic" label="Email" variant="outlined" name='email' value={input.email} onChange={e => handleChange(e)} sx={{ margin: '10px 0' }} />
          <TextField id="outlined-basic" label="Phone" variant="outlined" name='phone' value={input.phone} onChange={e => handleChange(e)} sx={{ margin: '10px 0' }} />
            <Button variant='contained' sx={{ margin: '10px 0' }} onClick={e => handleSubmit(e)}>Save</Button>
        </Box>
      </Box>
    </Paper>
  )
}

export default Home