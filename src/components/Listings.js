import React from 'react'
import { Link } from 'react-router-dom';

import '../App.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';

const Listings = (props) => {

    return (
        <div className='listings'>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Hours</TableCell>
                        <TableCell>Address</TableCell>
                        {props.loggedIn ? <TableCell>Delete</TableCell> : <></>}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.listings.map((listing, idx) => {
                        return (
                            <TableRow key={idx}>
                                <TableCell><Link style={{ color: "black" }} to={`/details/${listing.name}`}>{listing.name}</Link></TableCell>
                                <TableCell sx={{ width: "75%"}}>{listing.description}</TableCell>
                                <TableCell>{listing.hours}</TableCell>
                                <TableCell>{listing.address}</TableCell>
                                {props.loggedIn ?  
                                    <TableCell>
                                        <IconButton onClick={(idx) => props.deleteListing(idx)}>
                                            <DeleteIcon sx={{ color: "red"}}></DeleteIcon>
                                        </IconButton>
                                    </TableCell> : 
                                    console.log("not signed in")}
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </div>
    )
}

export default Listings