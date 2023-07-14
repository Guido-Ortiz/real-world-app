import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { Typography, TextField, Stack, Button, Snackbar, Paper, Box, Alert } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, login } from '../../redux/actions/actions';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Login = () => {

    const dispatch = useDispatch()

    const [input, setInput] = useState({
        name: '',
        lastname: '',
        email: '',
        password: '',
        conpass: ''
    })

    const [openAlert, setOpenAlert] = useState(false)

    const navigate = useNavigate()

    const handleChange = e => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        if (input.email === 'solera@solera.com' && input.password === 'bootcamp2') {
            localStorage.setItem("user", 'solera@solera.com')
            localStorage.setItem("name", input.name)
            localStorage.setItem("lastname", input.lastname)
            localStorage.setItem("logged_in", true)
            await dispatch(login(input))
            navigate('/')
            //} else alert ('wrong credentials')
        } else {
            setOpenAlert(true)
        }
    }

    const handleAlertClose = () => {
        setOpenAlert(false);
    }

    return (
        <div style={{ 
            // border: '1px solid red',
            width: '100%', height: '100vh', margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Stack direction="column" spacing={2} sx={{ width: '40%', margin: '0 auto', background: '#fff', padding: '40px' }}>
                <Typography variant="h2" sx={{ color: '#1976d2', textAlign: 'center', fontStyle: 'italic', fontWeight: 'bold' }}>Real World App</Typography>
                <Typography variant="h4" sx={{ color: 'grey', textAlign: 'center' }}>Login</Typography>
                {/* <TextField id="outlined-basic" label="First Name" variant="outlined" name='name' value={input.name} onChange={e => handleChange(e)} />
    <TextField id="outlined-basic" label="Last Name" variant="outlined" name='lastname' value={input.lastname} onChange={e => handleChange(e)} /> */}
                <TextField id="outlined-basic" label="Username" variant="outlined" name='email' value={input.email} onChange={e => handleChange(e)} />
                <TextField id="outlined-basic" label="Password" variant="outlined" type='password' name='password' value={input.password} onChange={e => handleChange(e)} />
                {/* <TextField id="outlined-basic" label="Confirm Password" variant="outlined" type='password' name='conpass' value={input.conpass} onChange={e => handleChange(e)} /> */}
                <Button variant='contained' onClick={handleLogin}>Login</Button>
                <Typography variant='subtitle2' sx={{ color: "grey", letterSpacing: '1px' }}>
                    New to Real World App? <Link to='/signup' style={{ color: '#1976d2', fontWeight: 'bold' }}>Sign up</Link> now.</Typography>
            </Stack>
            <Snackbar open={openAlert} autoHideDuration={3000} onClose={handleAlertClose} message="Wrong Credentials" />
            {/* {
                openAlert && <Alert onClose={handleAlertClose} severity="error" sx={{ width: '25%', position: 'relative', bottom: '0px', left: '10px' }}>Wrong credentials! Please try to login again.</Alert>
            } */}
            
        </div>
    )
}

export default Login