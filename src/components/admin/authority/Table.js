import React from "react";
import "firebase/firestore";
import firebase from "firebase/app";
import { withRouter } from "react-router-dom";

// var authorityData = {
//   id: "",
//   name: "",
//   email: "",
//   phone: "",
//   password: "",
//   locality: "",
// };

const Table = (props) => {
  var key = 0;
  var { authorities } = props;
  var authorityList =
    authorities &&
    authorities.map((authority) => {
      return (
        <tr key={key}>
          <td className="center">
            {"\xa0\xa0"} {++key}
          </td>
          <td className="center">
            {"\xa0\xa0"} {authority.name}
          </td>
          <td className="center">
            {"\xa0\xa0"} {authority.email}
          </td>
          <td className="center">
            {"\xa0\xa0"} {authority.phone}
          </td>
          <td className="center">
            {"\xa0\xa0"} {authority.password}
          </td>
          <td className="center">
            {"\xa0\xa0"} {authority.locality}
          </td>
          <td className="center">
            <button
              className="btn-floating waves-effect waves-red red"
              value="Delete"
              onClick={() => deleteHandler(authority.id)}
            >
              <i className="material-icons">clear</i>
            </button>
          </td>
          {/* <td className="center">
            <button
              className="btn-flat waves-effect waves-light green-text"
              onClick={() => {
                console.log("clicked");
                props.history.push({
                  pathname: "/admin/authority/edit",
                  authorityData: authority,
                });
              }}
            >
              <i className="material-icons">edit</i>
            </button>
          </td> */}
        </tr>
      );
    });
  const deleteHandler = (event) => {
    var tempAuthorities = authorities.filter(
      (authority) => authority.id === event
    );
    const DocID = tempAuthorities[0].id;
    var db = firebase.firestore();
    db.collection("authority")
      .doc(DocID)
      .delete()
      .then(function () {
        console.log("Document successfully deleted!");
      })
      .catch(function (error) {
        console.error("Error removing document: ", error);
      });
    var newAuthorities = authorities.filter(
      (authority) => authority.id !== event
    );
    authorities = newAuthorities;
  };

  return (
    <div>
      <table className="highlight responsive-table">
        <thead>
          <tr>
            <th className="center">Sl No</th>
            <th className="center">Name</th>
            <th className="center">Email</th>
            <th className="center">Phone</th>
            <th className="center">Password</th>
            <th className="center">Locality</th>
            <th className="center red-text">Delete</th>
            {/* <th className="center green-text">Edit</th> */}
          </tr>
        </thead>
        <tbody>{authorityList}</tbody>
      </table>
    </div>
  );
};

export default withRouter(Table);
