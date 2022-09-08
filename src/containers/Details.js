import { connect } from "react-redux";

import Details from "../components/Details";
import { fetchMaps } from "../redux/actions";

const mapStateToProps = (state) => {
    return {
        listings: state.listings,
        maps: state.maps
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        fetchMaps: (url) => dispatch(fetchMaps(url))
    }
}

export default connect(mapStateToProps, mapDispatchtoProps) (Details)