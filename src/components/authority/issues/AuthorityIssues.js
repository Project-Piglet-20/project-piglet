import Table from "./Table";
import { compose } from "redux";
import { connect } from "react-redux";
import React, { Component } from "react";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";

class AuthorityIssues extends Component {
  render() {
    var { issues, notifications, auth, Locality } = this.props;
    if (!auth.uid) <Redirect to="/authoritylogin" />;
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
                  (issues =
                    issues &&
                    issues.filter((issue) => {
                      return issue.Locality === Locality;
                    }))
                }
                notifications={
                  notifications &&
                  notifications.filter((notification) => {
                    return notification.locality === Locality;
                  })
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
    notifications: state.firestore.ordered.notifications,
    auth: state.firebase.auth,
    Locality: state.firebase.profile.locality,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "issues",
      orderBy: ["DOR", "desc"],
    },
    {
      collection: "notifications",
      orderBy: ["locality", "asc"],
    },
  ])
)(AuthorityIssues);
