import React from 'react';
import { useNavigate } from 'react-router-dom';

import "../App.css"
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Signin = (props) => {
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target
        return {
            [name]: value
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        document.cookie = "loggedIn=true;max-age=60*1000"

        props.setLoggedIn(true)

        navigate("/")
    }

    return (
        <Container maxWidth="md" component="form" className='signin' onSubmit={handleSubmit}>
            <TextField 
                required 
                variant='standard' 
                type="username" 
                fullWidth 
                placeholder='Username' 
                name="username"
                onChange={handleChange}>
            </TextField>
            <TextField
                required 
                variant='standard' 
                type="password" 
                fullWidth 
                placeholder='Password' 
                name="password"
                onChange={handleChange}>
            </TextField>
            <Button type="submit" variant='contained' color="inherit" sx={{ backgroundColor: '#d3d3d3' }}>Login</Button>
        </Container>
    )
}

export default Signin