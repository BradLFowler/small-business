import React from "react";
import { Link } from "react-router-dom";

import '../App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Header = (props) => {

    const handleClick = () => {
        document.cookie = "loggedIn=false;max-age=0"

        props.setLoggedIn(false)
    }
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h6' component="div" sx={{ flexGrow: 1 }}>Lubbock Small Business</Typography>
                    <Button color="inherit">
                        <Link to="/" style={{ textDecoration: "none", color: "white" }}>Listings</Link>
                    </Button>
                    {props.loggedIn ? 
                        <Button color="inherit">
                            <Link to="/newlisting" style={{ textDecoration: "none", color: "white" }}>Add</Link>
                            </Button> : 
                            <></>
                    }
                    {props.loggedIn ? 
                        <Button onClick={handleClick} color="inherit">
                            <Link to="/signin" style={{ textDecoration: "none", color: "white" }}>Logout
                            </Link>
                        </Button> :
                        <Button color="inherit">
                            <Link to="/signin" style={{ textDecoration: "none", color: "white" }}>Login
                            </Link>
                        </Button>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header