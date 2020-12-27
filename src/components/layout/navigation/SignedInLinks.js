import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { signOut } from "../../../store/actions/authActions";

const SignedInLinks = (props) => {
  const { auth } = props;
  return (
    <>
      <li>
        <NavLink to="#" className="btn btn-floating red darken-2">
          {auth.email[0].toUpperCase()}
        </NavLink>
      </li>
      <li>
        <NavLink to="/admin/authority">Authority</NavLink>
      </li>
      <li>
        <NavLink to="/admin/category">Category</NavLink>
      </li>
      <li>
        <NavLink to="/admin/issues">Issues</NavLink>
      </li>
      <li>
        <a
          className="btn-flat white grey-text text-darken-4 waves-effect waves-light"
          href="/adminlogin"
          onClick={props.signOut}
        >
          Logout
        </a>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);
