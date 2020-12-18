import React, { Component } from "react";
import IssueList from "../issues/IssueList";
import Notifications from "./Notifications";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

class Dashboard extends Component {
  render() {
    const { issues, notifications } = this.props;
    return (
      <div className="dashboard">
        <div className="row">
          <div className="col s12">
            <ul className="tabs">
              <li className="tab col s3">
                <a href="#test1">Test 1</a>
              </li>
              <li className="tab col s3">
                <a href="#test2">Test 2</a>
              </li>
              <li className="tab col s3">
                <a href="#test3">Disabled Tab</a>
              </li>
              <li className="tab col s3">
                <a href="#test4">Test 4</a>
              </li>
            </ul>
          </div>
          <div id="test1" className="col s12">
            Test 1
          </div>
          <div id="test2" className="col s12">
            Test 2
          </div>
          <div id="test3" className="col s12">
            Test 3
          </div>
          <div id="test4" className="col s12">
            Test 4
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6 offset-m1">
            <div className="scrollable">
              <IssueList issues={issues} />
            </div>
          </div>
          <div className="col s12 m3 offset-m1">
            <Notifications notifications={notifications} />
          </div>
          <div className="col m1"></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    issues: state.firestore.ordered.issues,
    notifications: state.firestore.ordered.notifications,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "issues",
      limit: 10,
      orderBy: ["DOR", "desc"],
    },
    {
      collection: "notifications",
      limit: 10,
      orderBy: ["time", "desc"],
    },
  ])
)(Dashboard);
