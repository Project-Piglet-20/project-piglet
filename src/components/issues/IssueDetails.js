import React from "react";
import Map from "../map/Map";
import { compose } from "redux";
import { connect } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";

const IssueDetails = (props) => {
  const { issue } = props;
  if (issue) {
    return (
      <div className="row">
        <div className="section issue-details">
          <div className="col s12 l6 offset-l3">
            <div className="card z-depth-2">
              <div className="card-content">
                <h3>{issue.Category.toUpperCase()}</h3>
                <div
                  className="divider red darken-2"
                  style={{ padding: "3px" }}
                ></div>
                <br />
                <Map center={issue.Location} />
                <div className="row">
                  <div className="input-field">
                    <div className="col s12 m6">
                      <h5>
                        <b>Issue</b>: {issue.Type}
                      </h5>
                    </div>
                    <div className="col s12 m6">
                      <h5>
                        {" "}
                        <b>Locality</b>: {issue.Locality}
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field">
                    <div className="col s12 m6">
                      <h5>
                        {" "}
                        <b>Date of Closure</b>:{" "}
                        {issue.DOC !== "-"
                          ? moment(issue.DOC.toDate()).calendar()
                          : "-"}
                      </h5>
                    </div>
                    <div className="col s12 m6">
                      <h5>
                        {" "}
                        <b>Status</b>: {issue.Status}
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="input-field center">
                  <Link to="/home">
                    <button className="btn-floating btn-large waves-effect waves-light teal lighten-1 center">
                      <i className="material-icons">done</i>
                    </button>
                  </Link>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                  <div>
                    <b>Reported Date:</b> {"\xa0\xa0"}
                    {moment(issue.DOR.toDate()).calendar()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="progress">
        <div className="indeterminate"></div>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const issues = state.firestore.data.issues;
  const issue = issues ? issues[id] : null;
  return {
    issue: issue,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "issues" }])
)(IssueDetails);
