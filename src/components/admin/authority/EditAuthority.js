import React from "react";
import "firebase/firestore";
import firebase from "firebase/app";

const EditAuthority = (props) => {
  const { authorityData } = props;
  console.log(props)
  const editHandler = (event) => {
    event.preventDefault();
    // console.log(authorityData);
    // var authorityfilter = authorities.filter(
    //   (authority) => authority.id === authorityData.id
    // );
    // const DocID = authorityfilter[0].id;
    // var db = firebase.firestore();
    // db.collection("authority")
    //   .doc(DocID)
    //   .update({
    //     name: authorityfilter[0].name,
    //     email: authorityfilter[0].email,
    //     phone: authorityfilter[0].phone,
    //     password: authorityfilter[0].password,
    //     locality: authorityfilter[0].locality,
    //   })
    //   .then(function () {
    //     console.log("Document successfully edited!");
    //   })
    //   .catch(function (error) {
    //     console.error("Error updating document: ", error);
    //   });
    // var newAuthorities = authorities.filter(
    //   (authority) => authority.id !== event
    // );
    // authorities = newAuthorities;
  };
  return (
    <div>
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
  );
};

export default EditAuthority;
