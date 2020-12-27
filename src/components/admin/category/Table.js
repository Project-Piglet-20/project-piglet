import React, { Component } from "react";
import firebase from "firebase/app";
import "firebase/firestore";

class Table extends Component {
  state = {
    "data-icon": null,
    Cid: "",
    label: "",
    value: "",
    clickedID: "",
  };

  clickHandler = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  render() {
    var { categories } = this.props;
    var key = 0;
    var categoryList =
      categories &&
      categories.map((category) => {
        return (
          <tr key={key}>
            <td className="center">
              {"\xa0\xa0"} {++key}
            </td>
            <td className="center">
              {"\xa0\xa0"} {category.Cid}
            </td>
            <td className="tableContent">
              {category.label}
            </td>
            <td className="tableContent">
              {category.value}
            </td>
            <td className="center">
              <button
                className="btn-floating waves-effect waves-red red"
                value="Delete"
                onClick={() => deleteHandler(category.id)}
              >
                <i className="material-icons">clear</i>
              </button>
            </td>
            <td className="center">
              <button
                data-target="modalEdit"
                className="btn-flat waves-effect waves-light green-text modal-trigger"
                value="Edit"
                onClick={() =>
                  this.setState({
                    clickedID: category.id,
                    Cid: category.Cid,
                    label: category.label,
                    value: category.value,
                  })
                }
              >
                <i className="material-icons">edit</i>
              </button>
            </td>
          </tr>
        );
      });

    const editHandler = (event) => {
      event.preventDefault();
      const categoryDetails = {
        Cid: "",
        label: "",
        value: "",
      };
      categoryDetails.Cid = this.state.Cid;
      categoryDetails.label = this.state.label;
      categoryDetails.value = this.state.value;

      var authorityfilter = categories.filter(
        (category) => category.id === this.state.clickedID
      );

      const DocID = authorityfilter[0].id;
      var db = firebase.firestore();
      db.collection("dropdownList")
        .doc(DocID)
        .update({
          Cid: this.state.Cid,
          label: this.state.label,
          value: this.state.value,
        })
        .then(function () {
          console.log("Document successfully edited!");
        })
        .catch(function (error) {
          console.error("Error updating document: ", error);
        });
      var newCategories = categories.filter(
        (category) => category.id !== event
      );
      categories = newCategories;
    };

    const deleteHandler = (event) => {
      var tempCategories = categories.filter(
        (category) => category.id === event
      );
      const DocID = tempCategories[0].id;
      var db = firebase.firestore();
      db.collection("dropdownList")
        .doc(DocID)
        .delete()
        .then(function () {
          console.log("Document successfully deleted!");
        })
        .catch(function (error) {
          console.error("Error removing document: ", error);
        });
      var newCategories = categories.filter(
        (category) => category.id !== event
      );
      categories = newCategories;
    };

    return (
      <div>
        <table className="highlight responsive-table">
          <thead>
            <tr>
              <th className="center">Sl No</th>
              <th className="center">ID</th>
              <th>{"\xa0\xa0"}{"\xa0\xa0"}Label</th>
              <th>{"\xa0\xa0"}{"\xa0\xa0"}Value</th>
              <th className="center red-text">Delete</th>
              <th className="center green-text">Edit</th>
            </tr>
          </thead>
          <tbody>{categoryList}</tbody>
        </table>
        <div id="modalEdit" className="modal">
          <div className="modal-content">
            <form onSubmit={(event) => editHandler(event)}>
              <h3 className="center blue-grey-text text-darken-4">
                Edit Category Details
              </h3>
              <div className="divider red accent-3"></div>
              <br />
              <div className="container">
                <div className="input-field">
                  <input
                    id="Cid"
                    placeholder={this.state.Cid}
                    type="text"
                    className="validate"
                    data-length="20"
                    onChange={(e) => this.clickHandler(e)}
                  />
                  <label htmlFor="id" className="black-text">
                    ID
                  </label>
                </div>
                <div className="input-field">
                  <input
                    id="label"
                    placeholder={this.state.label}
                    type="text"
                    className="validate"
                    data-length="30"
                    onChange={(e) => this.clickHandler(e)}
                  />
                  <label htmlFor="label" className="black-text">
                    Label
                  </label>
                </div>
                <div className="input-field">
                  <input
                    id="value"
                    placeholder={this.state.value}
                    type="tel"
                    className="validate"
                    maxLength={10}
                    onChange={(e) => this.clickHandler(e)}
                  />
                  <label htmlFor="value" className="black-text">
                    Value
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
  }
}

export default Table;
