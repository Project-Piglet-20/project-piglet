import Table from "./Table";
import { compose } from "redux";
import { connect } from "react-redux";
import React, { Component } from "react";
import { firestoreConnect } from "react-redux-firebase";

class AdminAuthority extends Component {
  addAuthorityHandler = () => {
    console.log("Clicked");
    this.props.history.push("/admin/addauthority");
  };
  render() {
    const { authorities, auth } = this.props;
    return (
      <div className="row">
        <div className="col S12 m1">
          <br />
          <button
            className="btn waves-effect waves-light red"
            onClick={() => this.addAuthorityHandler()}
          >
            ADD AUTHORITY
          </button>
        </div>
        <div className="col s12 m10">
          <br />
          <div className="divider"></div>
          <Table authorities={authorities} auth={auth} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
    authorities: state.firestore.ordered.authority,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "authority",
      orderBy: ["locality", "asc"],
    },
  ])
)(AdminAuthority);
