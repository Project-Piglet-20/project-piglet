import React, { Component } from "react";
import Table from "./Table";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

class AdminIssues extends Component {  
  render() {
    const { issues, auth } = this.props;
    return (
      <div className="row">
        {!auth.uid ? (
          <>
            <div className="progress">
              <div className="indeterminate"></div>
            </div>
            {this.props.history.push("/adminlogin")}
          </>
        ) : (
          <div className="col s12 m10 offset-m1">
            <br />
            <div className="divider"></div>
            <Table issues={issues} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    issues: state.firestore.ordered.issues,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "issues",
    },
  ])
)(AdminIssues);
