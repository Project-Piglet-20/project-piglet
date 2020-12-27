import Table from "./Table";
import { compose } from "redux";
import { connect } from "react-redux";
import React, { Component } from "react";
import { firestoreConnect } from "react-redux-firebase";

class AdminCategory extends Component {
  addCategoryHandler = () => {
    this.props.history.push({
      pathname: "/admin/addcategory",
      state: this.state,
    });
  };
  render() {
    const { dropdown, auth } = this.props;
    const btn_data = "ADD CATEGORY";
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
            <div className="col m1">
              <div className="btnPadding">
                <br />
                <button
                  className="btn waves-effect waves-light red"
                  onClick={() => this.addCategoryHandler()}
                >
                  {btn_data}
                </button>
              </div>
            </div>
            <div className="col s12 m10">
              <br />
              <div className="divider"></div>
              <Table categories={dropdown} />
            </div>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    dropdown: state.firestore.ordered.dropdownList,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "dropdownList",
    },
  ])
)(AdminCategory);
