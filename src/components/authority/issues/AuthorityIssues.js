import Table from "./Table";
import { compose } from "redux";
import { connect } from "react-redux";
import React, { Component } from "react";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";

class AuthorityIssues extends Component {
  render() {
    var { issues, notifications, auth, Locality } = this.props;
    return (
      <div className="row">
        {!auth.uid ? (
          <Redirect to="/authoritylogin" />
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
    auth: state.firebase.auth,
    issues: state.firestore.ordered.issues,
    Locality: state.firebase.profile.locality,
    notifications: state.firestore.ordered.notifications,
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
