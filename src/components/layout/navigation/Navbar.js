import React from "react";
import { connect } from "react-redux";
import CommonLinks from "./CommonLinks";
import SignedInLinks from "./SignedInLinks";
import { withRouter } from "react-router-dom";
import AuthoritySignedInLinks from "./AuthoritySignedInLinks";

const Navbar = (props) => {
  const curLoc = props.location.pathname.slice(1).toUpperCase();
  const { auth } = props;
  const links = auth.uid ? (
      auth.email ? (
        auth.email === "project.test.mail.19@gmail.com" ? (
          <SignedInLinks />
        ) : (
          <AuthoritySignedInLinks />
        )
      ) : (
        <>
          <CommonLinks />
          {/* <UserLinks /> */}
        </>
      )
    ) : (
      <CommonLinks />
    );
  return (
    <div>
      <div className="navBar">
        <nav role="navigation" className="white navBackground">
          <div className="nav-wrapper container">
            <div>
              <ul className="hide-on-med-and-down">
                <span className="left">
                  <li>
                    <h5>PIGLET</h5>
                  </li>
                </span>
                <span className="right">{links}</span>
              </ul>
              <ul id="nav-mobile" className="sidenav">
                <li>
                  <h4 className="deep-orange-text text-accent-3 center">PIGLET</h4>
                </li>
                <br />
                <span className="left">{links}</span>
              </ul>
              <a href="!#" data-target="nav-mobile" className="sidenav-trigger">
                <div>
                  <span>
                    <div className="navMenuLogo">
                      <i className="material-icons left">menu</i>
                      PIGLET
                    </div>
                  </span>
                </div>
              </a>
            </div>
            <br />
            <div className="center navCurrentPage">
              <h1>
                {!curLoc
                  ? "REPORT"
                  : curLoc.slice(0, 6) === "ISSUES"
                  ? "ISSUES"
                  : curLoc}
              </h1>
              <div className="divider red darken-2 dividerPadding"></div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(withRouter(Navbar));
