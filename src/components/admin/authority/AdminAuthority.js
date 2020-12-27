import Table from "./Table";
import { compose } from "redux";
import { connect } from "react-redux";
import React, { Component } from "react";
import { firestoreConnect } from "react-redux-firebase";

class AdminAuthority extends Component {
  addAuthorityHandler = () => {
    this.props.history.push({
      pathname: "/admin/addauthority",
      state: this.state,
    });
  };
  render() {
    const { authorities, auth } = this.props;
    return (
      <div className="row">
        {!auth.uid ? (
          <>
            <div className="progress">
              <div className="indeterminate"></div>
            </div>
            {this.props.history.push("/adminlogin")}
          </>
        ) : (
          <>
            <div className="col S12 m1">
              <div className="btnPadding">
                <br />
                <button
                  className="btn waves-effect waves-light red"
                  onClick={() => this.addAuthorityHandler()}
                >
                  ADD AUTHORITY
                </button>
              </div>
            </div>
            <div className="col s12 m10">
              <br />
              <div className="divider"></div>
              <Table authorities={authorities} />
            </div>
          </>
        )}
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

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "authority",
    },
  ])
)(AdminAuthority);
