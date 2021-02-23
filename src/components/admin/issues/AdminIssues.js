import React, { Component } from "react";
import Table from "./Table";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

class AdminIssues extends Component {
  render() {
    const { issues, notifications, auth } = this.props;
    return (
      <div className="row">
        <div className="col s12 m10 offset-m1">
          <br />
          <div className="divider"></div>
          <Table issues={issues} notifications={notifications} auth={auth} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    issues: state.firestore.ordered.issues,
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
      orderBy: ["time", "desc"],
    },
  ])
)(AdminIssues);
