import { connect } from "react-redux";

import Signin from "../components/Signin";
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

export default connect(mapStateToProps, mapDispatchtoProps) (Signin)