import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { signOut } from "../../../store/actions/authActions";

const AuthoritySignedInLinks = (props) => {
  const { auth } = props;
  return (
    <>
      <li>
        <NavLink
          className="btn-flat white grey-text text-darken-4 waves-effect waves-light"
          to="/authoritylogin"
          onClick={props.signOut}
        >
          Logout
        </NavLink>
      </li>
      <li>
        <NavLink to="#" className="btn btn-floating red darken-2">
          {auth.email[0].toUpperCase()}
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
)(AuthoritySignedInLinks);
