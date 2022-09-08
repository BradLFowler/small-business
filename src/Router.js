import React from "react";
import { Routes, Route, Navigate } from 'react-router'
import cookie from 'cookie'

import Listings from "./containers/Listings";
import Signin from "./containers/Signin";
import Details from "./containers/Details";
import NewListing from "./containers/NewListing";

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies["loggedIn"] ? true : false
}

const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        checkAuth() === true ? <Component {...rest} /> : <Navigate to="/signin" />
    )
}

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Listings />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/details/:name" element={<ProtectedRoute component={Details} />} />
            <Route path="/newlisting" element={<ProtectedRoute component={NewListing}/>}/>
        </Routes>
    )
}

export default Router