import { connect } from "react-redux";
import React, { Component } from "react";
import { addAuthority } from "../../../store/actions/authorityActions";

class AddAuthority extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    password: "",
    locality: "",
  };
  submitHandler = (event) => {
    event.preventDefault();
    this.props.addAuthority(this.state);
    this.props.history.push("/admin/authority");
  };
  clickHandler = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };
  render() {
    const { authError } = this.props;
    return (
      <div className="row">
        <div className="col s12 m8 offset-m3">
          <div className="card container">
            <div className="card-content">
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
                <div>
                  <div className="right">
                    <button
                      className="btn waves-effect waves-light"
                      onClick={this.props.history.push("/admin/authority")}
                    >
                      Cancel
                    </button>
                    <button
                      className="btn waves-effect waves-light"
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
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addAuthority: (authority) => dispatch(addAuthority(authority)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddAuthority);
