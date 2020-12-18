import React from "react";
import UserLinks from "./UserLinks";
import { connect } from "react-redux";
import CommonLinks from "./CommonLinks";
import SignedInLinks from "./SignedInLinks";
import { withRouter } from "react-router-dom";
import Background from "../../../images/Background.png";
import AuthoritySignedInLinks from "./AuthoritySignedInLinks";

const Navbar = (props) => {
  const curLoc = props.location.pathname.slice(1).toUpperCase();
  const { auth } = props;
  const links =
    auth.uid && auth.email === "project.test.mail.19@gmail.com" ? (
      <>
        <CommonLinks />
        <SignedInLinks />
      </>
    ) : auth.email ? (
      <AuthoritySignedInLinks />
    ) : auth.uid ? (
      <>
        <CommonLinks />
        <UserLinks />
      </>
    ) : (
      <CommonLinks />
    );
  return (
    <div>
      <div style={{ paddingBottom: "2vh" }}>
        <nav
          role="navigation"
          style={{
            backgroundImage: `url(${Background})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "40vh",
          }}
          className="white"
        >
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
                  <h4 className="deep-orange-text text-accent-3">PIGLET</h4>
                </li>
                <br />
                <span className="left">{links}</span>
              </ul>
              <a href="!#" data-target="nav-mobile" className="sidenav-trigger">
                <div>
                  <span>
                    <div style={{ fontSize: "20px" }}>
                      <i className="material-icons left">menu</i>
                      PIGLET
                    </div>
                  </span>
                </div>
              </a>
            </div>
            <br />
            <div
              style={{ paddingTop: "20px", fontFamily: "Ropa Sans" }}
              className="center"
            >
              <h1>
                {!curLoc
                  ? "REPORT"
                  : curLoc.slice(0, 6) === "ISSUES"
                  ? "ISSUES"
                  : curLoc}
              </h1>
              <div
                className="divider red darken-2"
                style={{ padding: "5px" }}
              ></div>
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
