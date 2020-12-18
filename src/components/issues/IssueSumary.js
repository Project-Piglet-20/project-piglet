import React from "react";
import moment from "moment";

const IssueSummary = ({ issue }) => {
  return (
    <div className="col s12 m6">
      <div
        className="card z-depth-1 hoverable issue-summary"
        style={{ height: "310px" }}
      >
        <div className="card-content blue-grey-text text-darken-4">
          <div>
            <span className="card-title" style={{ height: "60px" }}>
              <b>{issue.Type}</b>
            </span>
          </div>
          <div
            className="divider red accent-3"
            style={{ padding: "3px" }}
          ></div>
          <div className="card-content">
            <p>{issue.Category}</p>
            <p>{issue.Locality}</p>
            <p>{issue.Status}</p>
            <p>
              {issue.DOC !== "-" ? moment(issue.DOC.toDate()).calendar() : "-"}
            </p>
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
