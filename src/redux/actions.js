export const addListing = (listing) => {
    return {
        type: "ADD_LISTING",
        value: listing
    }
}

export const deleteListing = (index) => {
    return {
        type: "DELETE_LISTING",
        value: index
    }
}

export const setLoggedIn = (loggedIn) => {
    return {
        type: "SET_LOGGEDIN",
        value: loggedIn
    }

}

export const fetchMaps = (url) => {
    return (dispatch) => {
        fetch(url)
        .then(response => response.json())
        .then((res) => {
            const action = {
                type: "FETCH_MAPS",
                value: res.results
            }
            dispatch(action)
        })
    }
}