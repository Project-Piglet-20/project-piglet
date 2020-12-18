import React, { Component } from "react";
import * as firebaseui from "firebaseui";
import firebase from "firebase";

class Report extends Component {
  componentDidMount() {
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
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", uiConfig);
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

export default Report;
