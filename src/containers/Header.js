import { connect } from "react-redux";

import Header from "../components/Header";
import { setLoggedIn } from "../redux/actions";

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        setLoggedIn: (loggedIn) => dispatch(setLoggedIn(loggedIn))
    }
}

export default connect(mapStateToProps, mapDispatchtoProps) (Header)