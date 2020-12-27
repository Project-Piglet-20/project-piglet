import React, { Component } from "react";
import * as firebaseui from "firebaseui";
import firebase from "firebase";
import { connect } from "react-redux";

class Report extends Component {
  componentDidMount() {
    const { auth } = this.props;
    const uiConfig = {
      signInSuccessUrl: "/home",
      signInOptions: [
        {
          provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
          defaultCountry: "IN",
        },
      ],
      tosUrl: "/home",
    };
    if (firebaseui.auth.AuthUI.getInstance()) {
      const ui = firebaseui.auth.AuthUI.getInstance();
      ui.start("#firebaseui-auth-container", uiConfig);
      if (auth.uid) {
        this.props.history.push('/home');
      }
      else if (!auth.uid){
        this.props.history.push('/');
      }
    } else {
      const ui = new firebaseui.auth.AuthUI(firebase.auth());
      ui.start("#firebaseui-auth-container", uiConfig);
    }
  }
  render() {
    return (
      <>
        <div className="center">
          <h3>Small verification before reporting!</h3>
        </div>
        <br />
        <div className="row">
          <div id="firebaseui-auth-container"></div>
          <br />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Report);
