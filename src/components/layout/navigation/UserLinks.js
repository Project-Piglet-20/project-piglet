import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { signOut } from "../../../store/actions/authActions";

const UserLinks = (props) => {
  const { auth } = props;
  return (
    <>
      <li>
        <NavLink
          className="btn-flat white grey-text text-darken-4 waves-effect waves-light"
          to="/"
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

export default connect(mapStateToProps, mapDispatchToProps)(UserLinks);
