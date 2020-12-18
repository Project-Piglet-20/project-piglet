import Table from "./Table";
import { compose } from "redux";
import { connect } from "react-redux";
import React, { Component } from "react";
import { firestoreConnect } from "react-redux-firebase";

class AuthorityIssues extends Component {
  render() {
    const { issues } = this.props;
    return (
      <div className="row">
        <div className="col s12 m10 offset-m1">
          <br />
          <div className="divider"></div>
          <Table issues={issues} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    issues: state.firestore.ordered.issues,
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
