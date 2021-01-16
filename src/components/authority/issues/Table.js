import React from "react";
import "firebase/firestore";
import firebase from "firebase/app";

const Table = (props) => {
  var { issues, notifications } = props;
  var key = 0;
  var issueList =
    issues &&
    issues.map((issue) => {
      return (
        <tr key={key}>
          <td>
            {"\xa0\xa0"} {++key}
          </td>
          <td>
            {"\xa0\xa0"} {issue.Category}
          </td>
          <td>
            {"\xa0\xa0"} {issue.Type}
          </td>
          <td>
            {"\xa0\xa0"} {issue.Locality}
          </td>
          <td>
            {"\xa0\xa0"}{" "}
            {new Date(issue.DOR.seconds * 1000).toLocaleDateString("en-US")}
          </td>
          <td className="center">
            <button
              className={
                issue.Status === "Resolved"
                  ? "btn waves-effect waves-teal"
                  : "btn waves-effect waves-red red"
              }
              value={issue.Status}
              onClick={() => clickHandler(issue.id)}
            >
              {issue.Status}
            </button>
          </td>
          <td>
            {"\xa0\xa0"}{" "}
            {issue.DOC !== "-"
              ? new Date(issue.DOC.seconds * 1000).toLocaleDateString("en-US")
              : "-"}
          </td>
        </tr>
      );
    });
  const clickHandler = (event) => {
    var tempIssues = issues.filter((issue) => issue.id === event);
    var newIssues = issues.filter((issue) => issue.id !== event);
    tempIssues[0].Status = "Resolved";
    var date = new Date();
    var today =
      (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) +
      "/" +
      (date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1) +
      "/" +
      date.getFullYear();
    tempIssues[0].DOC = today;
    var db = firebase.firestore();
    db.collection("issues")
      .doc(event)
      .update({ DocID: tempIssues[0].id, DOC: new Date(), Status: "Resolved" });
    var tempNotif = notifications.filter(
      (notification) => notification.docId === event
    );
    db.collection("notifications").doc(tempNotif[0].id).update({
      status: "Resolved",
      time: new Date(),
    });
    newIssues.push(tempIssues[0]);
    issues = newIssues;
  };
  return (
    <div>
      <table className="highlight responsive-table">
        <thead>
          <tr>
            <th>Sl No</th>
            <th>Issue Category</th>
            <th className="center">Issue Type</th>
            <th className="center">Location</th>
            <th>Date of Reporting</th>
            <th className="center">Status</th>
            <th>Date of Closure</th>
          </tr>
        </thead>
        <tbody>{issueList}</tbody>
      </table>
    </div>
  );
};

export default Table;
