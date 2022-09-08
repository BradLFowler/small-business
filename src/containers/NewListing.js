import { connect } from "react-redux";

import NewListing from "../components/NewListing";
import { fetchMaps, addListing } from "../redux/actions";


const mapStateToProps = (state) => {
    return {
        user: state.user,
        loggedIn: state.loggedIn,
        maps: state.maps
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        fetchMaps: (url) => dispatch(fetchMaps(url)),
        addListing: (listing) => dispatch(addListing(listing))
    }
}

export default connect(mapStateToProps, mapDispatchtoProps) (NewListing)