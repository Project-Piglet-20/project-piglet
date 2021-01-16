import React from "react";
import IssueSummary from "./IssueSumary";
import { Link } from "react-router-dom";

const IssueList = ({ issues }) => {
  var id = 1;
  const listOfIssues = issues ? (
    issues.length !== 0 ? (
      issues.map((issue) => {
        return (
          <Link to={"/issues/" + issue.id} key={id++}>
            <IssueSummary issue={issue} />
          </Link>
        );
      })
    ) : (
      <div className="progress">
        <div className="indeterminate"></div>
      </div>
    )
  ) : (
    <div className="progress">
      <div className="indeterminate"></div>
    </div>
  );
  return (
    <div className="issue-list section">
      <div className="row">{listOfIssues}</div>
    </div>
  );
};

export default IssueList;
