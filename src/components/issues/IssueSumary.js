import React from "react";
import moment from "moment";

const IssueSummary = ({ issue }) => {
  const divider =
    issue.Status === "Resolved" ? (
      <div className="divider green darken-1 dividerPadding"></div>
    ) : (
      <div className="divider red accent-3 dividerPadding"></div>
    );
  const issueStatus =
    issue.Status === "Resolved" ? (
      <p>
        <i className="material-icons left">check_circle</i>
        {issue.Status}
      </p>
    ) : (
      <p>
        <i className="material-icons left">check_circle_outline</i>
        {issue.Status}
      </p>
    );
  return (
    <div className="col s12 m6">
      <div className="card z-depth-1 hoverable">
        <div className="card-content blue-grey-text text-darken-4">
          <div>
            <span className="card-title cardTitleHeight flow-text">
              <i className="material-icons left">notifications_active</i>
              <b>{issue.Type}</b>
            </span>
          </div>
          {divider}
          <div className="card-content" style={{ height: "fit-content" }}>
            <div className="input-field">
              <p>
                <i className="material-icons left">details</i>
                {issue.Category}
              </p>
            </div>
            <div className="input-field">
              <p>
                <i className="material-icons left">gps_fixed</i>
                {issue.Locality}
              </p>
            </div>
            <div className="input-field">{issueStatus}</div>
            <div className="input-field">
              <p>
                <i className="material-icons left">today</i>
                {issue.DOC !== "-"
                  ? moment(issue.DOC.toDate()).calendar()
                  : "-"}
              </p>
            </div>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>{moment(issue.DOR.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueSummary;
