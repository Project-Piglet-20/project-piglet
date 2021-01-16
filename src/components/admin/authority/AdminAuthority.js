import Table from "./Table";
import { compose } from "redux";
import { connect } from "react-redux";
import React, { Component } from "react";
import { firestoreConnect } from "react-redux-firebase";

class AdminAuthority extends Component {
  addAuthorityHandler = () => {
    console.log("Clicked");
    console.log(this.props.history);
    this.props.history.push("/admin/addauthority");
  };
  render() {
    const { authorities } = this.props;
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

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "authority",
      orderBy: ["name", "asc"],
    },
  ])
)(AdminAuthority);
