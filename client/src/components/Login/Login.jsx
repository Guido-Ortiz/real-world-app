import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { Typography, TextField, Stack, Button, Snackbar } from '@mui/material';
// import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Login = () => {
    const [input, setInput] = useState({
        first: '',
        last: '',
        username: '',
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
        console.log(input);
    }


    //   const Alert = () => {

    //         )
    // }

    // const Alert = (function Alert(
    //     props,
    //     ref,
    //   ) {
    //     return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    //   });

    const handleLogin = (e) => {
        e.preventDefault()
        if (input.username === 'solera@solera.com' && input.password === 'bootcamp2') {
            localStorage.setItem("user", 'solera@solera.com')
            localStorage.setItem("name", input.first + " " + input.last)
            localStorage.setItem("logged_in", true)
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
            <Stack direction="column" spacing={2} sx={{ width: '40%', margin: '0 auto', height: '100vh', background: '#fff', padding: '20px' }}>
                <Typography variant="h2" sx={{ color: '#1976d2', textAlign: 'center' }}>Real World App</Typography>
                <Typography variant="h4" sx={{ color: 'grey', textAlign: 'center' }}>Sign Up</Typography>
                <TextField id="outlined-basic" label="First Name" variant="outlined" name='first' value={input.first} onChange={e => handleChange(e)} />
                <TextField id="outlined-basic" label="Last Name" variant="outlined" name='last' value={input.last} onChange={e => handleChange(e)} />
                <TextField id="outlined-basic" label="Username" variant="outlined" name='username' value={input.username} onChange={e => handleChange(e)} />
                <TextField id="outlined-basic" label="Password" variant="outlined" name='password' value={input.password} onChange={e => handleChange(e)} />
                <TextField id="outlined-basic" label="Confirm Password" variant="outlined" name='conpass' value={input.conpass} onChange={e => handleChange(e)} />
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