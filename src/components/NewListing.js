import React, { useState } from "react";
import { useNavigate } from "react-router";
// import GoogleMapReact from "google-map-react";

import '../App.css';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const NewListing = (props) => {
    const navigate = useNavigate()

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [hours, setHours] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        let listing = {
            name: name,
            address: address,
            hours: hours,
            description: description
        }

        props.addListing(listing)

        navigate("/")
    }

    return (
        <>
            <Container className="newListing" component="form" onSubmit={handleSubmit}>
                <TextField variant="standard" placeholder="Name" onChange={(e) => setName(e.target.value)}></TextField>
                <TextField variant="standard" placeholder="Address" onChange={(e) => setAddress(e.target.value)}></TextField>
                <TextField variant="standard" placeholder="Hours (ex. 8AM - 9PM)" onChange={(e) => setHours(e.target.value)}></TextField>
                <TextField variant="standard" placeholder="Description" onChange={(e) => setDescription(e.target.value)}></TextField>
                <Button type="submit" variant="contained" className="addButton">Save</Button>
            </Container>
            {/* <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyCS1s8ujoq9E7LxQuRKB9R0tYqlZdQiBmk" }}
                >
                </GoogleMapReact>
            </div> */}
        </>
    )
}

export default NewListing;