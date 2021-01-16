import Table from "./Table";
import { compose } from "redux";
import { connect } from "react-redux";
import React, { Component } from "react";
import { firestoreConnect } from "react-redux-firebase";

class AdminCategory extends Component {
  addCategoryHandler = () => {
    this.props.history.push("/admin/addcategory");
  };
  render() {
    const { dropdown } = this.props;
    const btn_data = "ADD CATEGORY";
    return (
      <div className="row">
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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
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
      orderBy: ["Cid", "asc"],
    },
  ])
)(AdminCategory);
