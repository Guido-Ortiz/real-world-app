import { Button, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    const [input, setInput] = useState({
        name: '',
        lastname: '',
        email: '',
        password: '',
        conpass: ''
    })

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
            navigate('/login')
            //} else alert ('wrong credentials')
        } else {
            setOpenAlert(true)
        }
    }

    return (
        <div style={{ width: '100%', height: '100vh', margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Stack direction="column" spacing={2} sx={{ width: '40%', margin: '0 auto', background: '#fff', padding: '40px' }}>
                <Typography variant="h2" sx={{ color: '#1976d2', textAlign: 'center' }}>Real World App</Typography>
                <Typography variant="h4" sx={{ color: 'grey', textAlign: 'center' }}>Sign Up</Typography>
                <TextField id="outlined-basic" label="First Name" variant="outlined" name='name' value={input.name} onChange={e => handleChange(e)} />
                <TextField id="outlined-basic" label="Last Name" variant="outlined" name='lastname' value={input.lastname} onChange={e => handleChange(e)} />
                <TextField id="outlined-basic" label="Username" variant="outlined" name='email' value={input.email} onChange={e => handleChange(e)} />
                <TextField id="outlined-basic" label="Password" variant="outlined" type='password' name='password' value={input.password} onChange={e => handleChange(e)} />
                <TextField id="outlined-basic" label="Confirm Password" variant="outlined" type='password' name='conpass' value={input.conpass} onChange={e => handleChange(e)} />
                <Button variant='contained' onClick={handleLogin}>Sign Up</Button>
                {/* <Typography variant='subtitle2' sx={{ color: "grey", letterSpacing: '1px' }}>
                    New to Real World App? <Link to='/signup' style={{color: '#1976d2', fontWeight: 'bold'}}>Sign up</Link> now.</Typography> */}
            </Stack>
        </div>
    )
}

export default Signup