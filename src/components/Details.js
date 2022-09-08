import React from "react";
import { useParams } from "react-router";

import "../App.css"

const Details = (props) => {
    const listingName = useParams().name

    const listing = props.listings.find(l => l.name == listingName)

    return (
        <div className="detailsContainer">
            <h1>{listing.name}</h1>
            <h2>{listing.address}</h2>
            <h2>{listing.hours}</h2>
            <p>{listing.description}</p>
        </div>
    )
}

export default Details