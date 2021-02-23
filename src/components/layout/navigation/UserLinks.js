import React from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import { signOut } from "../../../store/actions/authActions";

// btn btn-floating white grey-text text-darken-4 waves-effect waves-light
// btn-flat white grey-text text-darken-4 waves-effect waves-light

const UserLinks = (props) => {
  return (
    <>
      <li>
        <NavLink
          className="btn-flat red darken-4 white-text waves-effect waves-light"
          // to={props.history.location.pathname}
          to="#"
          onClick={props.signOut}
        >
          Logout
        </NavLink>
      </li>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(UserLinks));
