import { connect } from "react-redux";
import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { signIn } from "../../../store/actions/authActions";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    pathname: this.props.history.location,
  };
  submitHandler = (event) => {
    if (this.state.email === "project.test.mail.19@gmail.com") {
      event.preventDefault();
      //   var charVal = "";
      //   let itr = 0;
      //   for (itr = 0; itr < this.state.password.length; itr++) {
      //     charVal = charVal.concat(
      //       String.fromCharCode(this.state.password.charCodeAt(itr) - 1)
      //     );
      //   }
      const cred = {
        email: this.state.email,
        password: this.state.password,
      };
      this.props.signIn(cred);
    } else {
      alert("Invalid admin credentials!");
    }
  };
  inputHandler = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };
  render() {
    const { authError, auth } = this.props;
    if (this.props.auth.email === "project.test.mail.19@gmail.com") {
      this.props.history.push("/admin/issues");
    }
    return (
      <div className="container signInForm">
        {!auth ? (
          <Redirect to="/adminlogin" />
        ) : (
          <Redirect to={this.state.pathname} />
        )}
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
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignIn));
