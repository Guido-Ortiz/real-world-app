import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { Typography, TextField, Stack, Button } from '@mui/material';

const Login = () => {
    const [input, setInput] = useState({
        first: '',
        last: '',
        username: '',
        password: '',
        conpass: ''
    })

    const navigate = useNavigate()

    const handleChange = e => {
        setInput({
          ...input,
          [e.target.name]: e.target.value
        })
        console.log(input);
      }

    const handleLogin = (e) => {
        e.preventDefault()      
          if(input.username === 'solera@solera.com' && input.password === 'bootcamp2'){
            localStorage.setItem("user", 'solera@solera.com')
            localStorage.setItem("logged_in", true)
            navigate('/')
        } else alert ('wrong credencials')
    }

    return (
        <div>
            <Stack direction="column" spacing={2} sx={{ width: '30%', margin: '0 auto'}}>
                <Typography variant="h2">Real World App</Typography>
                <Typography variant="h4" >Sign Up</Typography>
                <TextField id="outlined-basic" label="First Name" variant="outlined" name='first' value={input.first} onChange={e => handleChange(e)} />
                <TextField id="outlined-basic" label="Last Name" variant="outlined" name='last' value={input.last} onChange={e => handleChange(e)} />
                <TextField id="outlined-basic" label="Username" variant="outlined" name='username' value={input.username} onChange={e => handleChange(e)} />
                <TextField id="outlined-basic" label="Password" variant="outlined" name='password' value={input.password} onChange={e => handleChange(e)} />
                <TextField id="outlined-basic" label="Confirm Password" variant="outlined" name='conpass' value={input.conpass} onChange={e => handleChange(e)} />
                <Button variant='contained' onClick={handleLogin}>Sign Up</Button>
            </Stack>
        </div>
    )
}

export default Login