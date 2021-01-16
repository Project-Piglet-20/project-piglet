import React, { Component } from "react";
import Table from "./Table";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

class AdminIssues extends Component {
  render() {
    const { issues, notifications } = this.props;
    return (
      <div className="row">
        <div className="col s12 m10 offset-m1">
          <br />
          <div className="divider"></div>
          <Table issues={issues} notifications={notifications} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    issues: state.firestore.ordered.issues,
    notifications: state.firestore.ordered.notifications,
    auth: state.firebase.auth,
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
