import { combineReducers } from "redux";

const user = (state = null) => state

const listings = (state = [], action) => {
    switch(action.type) {
        case 'ADD_LISTING':
            return [action.value, ...state]
        case 'DELETE_LISTING':
            const newState = [...state]
            newState.splice(action.value, 1)
            return newState
        default:
            return state
    }
}

const maps = (state = []) => state

const loggedIn = (state = false, action) => {
    switch(action.type) {
        case 'SET_LOGGEDIN':
            return action.value;
        default:
            return state;

    }
}

export default combineReducers({ user, listings, maps, loggedIn })