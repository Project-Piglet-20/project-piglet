import React from "react";
import "firebase/firestore";
import firebase from "firebase/app";

var authorityData = {
  id: "",
  name: "",
  email: "",
  phone: "",
  password: "",
  locality: "",
};

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
          <td className="center">
            <button
              data-target="modalEdit"
              className="btn-flat waves-effect waves-light green-text modal-trigger"
              value="Edit"
              onClick={() => {
                authorityData = authority;
              }}
            >
              <i className="material-icons">edit</i>
            </button>
          </td>
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

  const editHandler = (event) => {
    event.preventDefault();
    console.log(authorityData);
    var authorityfilter = authorities.filter(
      (authority) => authority.id === authorityData.id
    );
    const DocID = authorityfilter[0].id;
    var db = firebase.firestore();
    db.collection("authority")
      .doc(DocID)
      .update({
        name: authorityfilter[0].name,
        email: authorityfilter[0].email,
        phone: authorityfilter[0].phone,
        password: authorityfilter[0].password,
        locality: authorityfilter[0].locality,
      })
      .then(function () {
        console.log("Document successfully edited!");
      })
      .catch(function (error) {
        console.error("Error updating document: ", error);
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
            <th className="center green-text">Edit</th>
          </tr>
        </thead>
        <tbody>{authorityList}</tbody>
      </table>
      <div id="modalEdit" className="modal">
        <div className="modal-content">
          <form onSubmit={(event) => editHandler(event)}>
            <h3 className="center blue-grey-text text-darken-4">
              Edit Authority Details
            </h3>
            <div className="divider red accent-3"></div>
            <br />
            <div className="container blue-grey-text text-darken-4">
              <div className="input-field">
                <input
                  id="name"
                  placeholder={authorityData.name}
                  type="text"
                  className="validate"
                  data-length="20"
                  onChange={(e) => (authorityData.name = e.value)}
                />
                <label htmlFor="name" className="black-text">
                  Name
                </label>
              </div>
              <div className="input-field">
                <input
                  id="email"
                  placeholder={authorityData.email}
                  type="email"
                  className="validate"
                  data-length="30"
                  onChange={(e) => (authorityData.email = e.value)}
                />
                <label htmlFor="email" className="black-text">
                  Email
                </label>
              </div>
              <div className="input-field">
                <input
                  id="phone"
                  placeholder={authorityData.phone}
                  type="tel"
                  className="validate"
                  maxLength={10}
                  onChange={(e) => (authorityData.phone = e.value)}
                />
                <label htmlFor="phone" className="black-text">
                  Phone
                </label>
              </div>
              <div className="input-field">
                <input
                  id="password"
                  type="password"
                  className="validate"
                  data-length="30"
                  onChange={(e) => (authorityData.password = e.value)}
                />
                <label htmlFor="password" className="black-text">
                  Password
                </label>
              </div>
              <div className="input-field">
                <input
                  id="locality"
                  placeholder={authorityData.locality}
                  type="text"
                  className="validate"
                  data-length="20"
                  onChange={(e) => (authorityData.locality = e.value)}
                />
                <label htmlFor="locality" className="black-text">
                  Locality
                </label>
              </div>
            </div>
            <div className="modal-footer grey lighten-4">
              <div className="center">
                <button
                  className="btn waves-effect waves-light modal-close"
                  type="submit"
                  name="action"
                >
                  Submit
                  <i className="material-icons right">send</i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Table;
