import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { Typography, TextField, Stack, Button, Snackbar, Paper, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/actions';
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

    const [openAlert, setOpenAlert] = useState(false);


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
            //} else alert ('wrong credencials')
        } else {
            setOpenAlert(true)
        }
    }

    const handleAlertClose = () => {
        setOpenAlert(false);
    };

    return (
        <div>
            <Stack direction="column" spacing={2} sx={{ width: '40%', margin: '0 auto', height: '100vh', background: '#fff', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography variant="h2" sx={{ color: '#1976d2', textAlign: 'center' }}>Real World App</Typography>
                <Typography variant="h4" sx={{ color: 'grey', textAlign: 'center' }}>Sign Up</Typography>
                <TextField id="outlined-basic" label="First Name" variant="outlined" name='name' value={input.name} onChange={e => handleChange(e)} />
                <TextField id="outlined-basic" label="Last Name" variant="outlined" name='lastname' value={input.lastname} onChange={e => handleChange(e)} />
                <TextField id="outlined-basic" label="Username" variant="outlined" name='email' value={input.email} onChange={e => handleChange(e)} />
                <TextField id="outlined-basic" label="Password" variant="outlined" type='password' name='password' value={input.password} onChange={e => handleChange(e)} />
                {/* <TextField id="outlined-basic" label="Confirm Password" variant="outlined" type='password' name='conpass' value={input.conpass} onChange={e => handleChange(e)} /> */}
                <Button variant='contained' onClick={handleLogin}>Sign Up</Button>
            </Stack>
            <Snackbar
                open={openAlert}
                autoHideDuration={3000}
                onClose={handleAlertClose}
                message="Wrong Credentials"
            />
        </div>
    )
}

export default Login