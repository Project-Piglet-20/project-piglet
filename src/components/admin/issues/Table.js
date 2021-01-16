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
            {"\xa0\xa0"}
            {new Date(issue.DOR.seconds * 1000).toLocaleDateString("en-US")}
          </td>
          <td>
            {"\xa0\xa0"} {issue.Status}
          </td>
          <td>
            {"\xa0\xa0"}
            {issue.DOC !== "-"
              ? new Date(issue.DOC.seconds * 1000).toLocaleDateString("en-US")
              : "-"}
          </td>
          <td className="center">
            <button
              className="btn waves-effect waves-red red"
              value={issue.Status}
              onClick={() => clickHandler(issue.id)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  const clickHandler = (event) => {
    var tempIssues = issues.filter((issue) => issue.id === event);
    const DocID = tempIssues[0].id;
    var db = firebase.firestore();
    db.collection("issues")
      .doc(DocID)
      .delete()
      .then(function () {
        console.log("Document successfully deleted!");
      })
      .catch(function (error) {
        console.error("Error removing document: ", error);
      });
    var tempNotif = notifications.filter(
      (notification) => notification.docId === event
    );
    db.collection("notifications")
      .doc(tempNotif[0].id)
      .delete()
      .then(function () {
        console.log("Notification successfully deleted!");
      })
      .catch(function (error) {
        console.error("Error removing notification: ", error);
      });
    var newIssues = issues.filter((issue) => issue.id !== event);
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
            <th className="center">Action</th>
          </tr>
        </thead>
        <tbody>{issueList}</tbody>
      </table>
    </div>
  );
};

export default Table;
