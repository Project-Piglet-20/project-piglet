import { connect } from "react-redux";
import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { signIn } from "../../../store/actions/authActions";

class AuthoritySignIn extends Component {
  state = {
    email: "",
    password: "",
  };
  submitHandler = (event) => {
    if (this.state.email !== "project.test.mail.19@gmail.com") {
      event.preventDefault();
      this.props.signIn(this.state);
      setTimeout(() => {
        this.props.history.push({
          pathname: "/authorityhome",
          Locality: this.props.Locality,
        });
      }, 2000);
    } else {
      alert("Invalid authority credentials!");
    }
  };
  inputHandler = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };
  render() {
    const { auth, authError, Locality } = this.props;
    <Redirect to="/authoritylogin" />;
    return (
      <>
        {auth.uid ? (
          this.props.history.push({
            pathname: "/authorityhome",
            Locality: Locality,
          })
        ) : (
          <div className="container signInForm">
            <form onSubmit={this.submitHandler}>
              <h5 className="blye-grey-text text-darken-4">Sign In</h5>
              <div className="input-field">
                <input
                  id="email"
                  type="email"
                  className="validate"
                  onChange={(e) => this.inputHandler(e)}
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field">
                <input
                  id="password"
                  type="password"
                  className="validate"
                  onChange={(e) => this.inputHandler(e)}
                />
                <label htmlFor="password">Password</label>
              </div>
              <div className="input-field">
                <button type="submit" className="btn teal lighten-2 z-depth-2">
                  Login
                </button>
                <div className="red-text center">
                  {authError ? <p>{authError}</p> : null}
                </div>
              </div>
            </form>
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
    Locality: state.firebase.profile.locality,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AuthoritySignIn));
