import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { signOut } from "../../../store/actions/authActions";

const UserLinks = (props) => {
  const { auth } = props;
  return (
    <>
      <li>
        <a
          className="btn-flat white grey-text text-darken-4 waves-effect waves-light"
          href="/"
          onClick={props.signOut}
        >
          Logout
        </a>
      </li>
      <li>
        <NavLink to="#" className="btn btn-floating red darken-2">
          {auth.phoneNumber[3]}
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
