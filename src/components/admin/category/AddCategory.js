import { connect } from "react-redux";
import React, { Component } from "react";
import { addDropdown } from "../../../store/actions/dropdownActions";

class AddCategory extends Component {
  state = {
    "data-icon": null,
    Cid: "",
    label: "",
    value: "",
  };
  submitHandler = (event) => {
    event.preventDefault();
    this.props.addDropdown(this.state);
    this.props.history.push("/admin/category");
  };

  clickHandler = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };
  render() {
    return (
      <div className="row">
        <div className="col s12 m8 offset-m3">
          <div className="card container">
            <div className="card-content">
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
                <br />
                <div>
                  <div className="left cancelbtn">
                    <button
                      className="btn waves-effect waves-light red lighten-1"
                      onClick={() =>
                        this.props.history.push("/admin/category")
                      }
                    >
                      <i className="material-icons left">clear</i>
                      Cancel
                    </button>
                  </div>
                  <div className="right submitbtn">
                    <button
                      className="btn waves-effect waves-light"
                      type="submit"
                      name="action"
                    >
                      Submit
                      <i className="material-icons right">send</i>
                    </button>
                  </div>
                  <br />
                  <br />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addDropdown: (category) => dispatch(addDropdown(category)),
  };
};

export default connect(null, mapDispatchToProps)(AddCategory);
