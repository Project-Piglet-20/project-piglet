import { connect } from "react-redux";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { signIn } from "../../../store/actions/authActions";

var preLoader = [];

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };
  submitHandler = (event) => {
    preLoader = (
      <div className="preloader-wrapper active">
        <div className="spinner-layer spinner-red-only">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div>
          <div className="gap-patch">
            <div className="circle"></div>
          </div>
          <div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div>
    );
    if (this.state.email === "project.test.mail.19@gmail.com") {
      event.preventDefault();
      this.props.signIn(this.state);
      // setTimeout(() => {
      //   if (this.props.auth.uid) {
      //     this.props.history.push("/admin/issues");
      //   }
      // }, 2000);
      console.log(this.props)
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
    const { authError } = this.props;
    return (
      <div className="container signInForm">
        <div className="center">{preLoader}</div>
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
