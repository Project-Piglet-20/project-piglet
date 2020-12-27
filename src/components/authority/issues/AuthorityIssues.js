import Table from "./Table";
import { compose } from "redux";
import { connect } from "react-redux";
import React, { Component } from "react";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";

class AuthorityIssues extends Component {
  render() {
    var { issues, auth, Locality } = this.props;
    if(!auth.uid) <Redirect to="/authoritylogin" />
    return (
      <div className="row">
        {!auth.uid ? (
          <>
            <div className="progress">
              <div className="indeterminate"></div>
            </div>
          </>
        ) : (
          <>
            <div className="col s12 m10 offset-m1">
              <br />
              <div className="divider"></div>
              <Table
                issues={
                  (issues = issues && issues.filter((issue) => {
                    return issue.Locality === Locality;
                  }))
                }
              />
            </div>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    issues: state.firestore.ordered.issues,
    auth: state.firebase.auth,
    Locality: state.firebase.profile.locality,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "issues",
    },
  ])
)(AuthorityIssues);
