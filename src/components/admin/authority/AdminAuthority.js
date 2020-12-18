import Table from "./Table";
import { compose } from "redux";
import { connect } from "react-redux";
import React, { Component } from "react";
import { firestoreConnect } from "react-redux-firebase";
import { addAuthority } from "../../../store/actions/authorityActions";

class AdminAuthority extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    password: "",
    locality: "",
  };
  clickHandler = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };
  submitHandler = (event) => {
    event.preventDefault();
    this.props.addAuthority(this.state);
  };
  render() {
    const { authorities, authError } = this.props;
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
                    Add Authority
                  </h3>
                  <div className="divider red accent-3"></div>
                  <br />
                  <div className="container">
                    <div className="input-field">
                      <input
                        id="name"
                        type="text"
                        className="validate"
                        data-length="20"
                        onChange={(e) => this.clickHandler(e)}
                      />
                      <label htmlFor="name" className="black-text">
                        Name
                      </label>
                    </div>
                    <div className="input-field">
                      <input
                        id="email"
                        type="email"
                        className="validate"
                        data-length="30"
                        onChange={(e) => this.clickHandler(e)}
                      />
                      <label htmlFor="email" className="black-text">
                        Email
                      </label>
                    </div>
                    <div className="input-field">
                      <input
                        id="phone"
                        type="tel"
                        className="validate"
                        maxLength={10}
                        onChange={(e) => this.clickHandler(e)}
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
                        onChange={(e) => this.clickHandler(e)}
                      />
                      <label htmlFor="password" className="black-text">
                        Password
                      </label>
                    </div>
                    <div className="input-field">
                      <input
                        id="locality"
                        type="text"
                        className="validate"
                        data-length="20"
                        onChange={(e) => this.clickHandler(e)}
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
                    <div className="red-text center">
                      {authError ? <h5>{authError}</h5> : null}
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
          <Table authorities={authorities} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authorities: state.firestore.ordered.authority,
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addAuthority: (authority) => dispatch(addAuthority(authority)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    {
      collection: "authority",
    },
  ])
)(AdminAuthority);
