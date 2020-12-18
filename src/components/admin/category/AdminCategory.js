import Table from "./Table";
import { compose } from "redux";
import { connect } from "react-redux";
import React, { Component } from "react";
import { firestoreConnect } from "react-redux-firebase";
import { addDropdown } from "../../../store/actions/dropdownActions";

class AdminCategory extends Component {
  state = {
    "data-icon": null,
    Cid: "",
    label: "",
    value: "",
  };
  clickHandler = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };
  submitHandler = (event) => {
    event.preventDefault();
    this.props.addDropdown(this.state);
  };
  render() {
    const { dropdown } = this.props;
    // if (!auth.uid) return <Redirect to="/adminlogin" />;
    return (
      <div className="row">
        <div className="col m1">
          <div
            style={{
              paddingTop: "5px",
              paddingBottom: "5px",
            }}
          >
            <button
              data-target="modalAdd"
              className="btn-floating btn-large waves-effect waves-light red modal-trigger"
            >
              <i className="material-icons">add</i>
            </button>

            <div id="modalAdd" className="modal">
              <div className="modal-content">
                <form onSubmit={(event) => this.submitHandler(event)}>
                  <h3 className="center blue-grey-text text-darken-4">
                    Add Category
                  </h3>
                  <div className="divider red accent-3"></div>
                  <br />
                  <div className="container">
                    <div className="input-field">
                      <input
                        id="Cid"
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
                        type="text"
                        className="validate"
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
                        ADD
                        <i className="material-icons right">send</i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col s12 m10">
          <br />
          <div className="divider"></div>
          <Table categories={dropdown} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    dropdown: state.firestore.ordered.dropdownList,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addDropdown: (category) => dispatch(addDropdown(category)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    {
      collection: "dropdownList",
    },
  ])
)(AdminCategory);
