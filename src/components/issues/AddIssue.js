import Map from "../map/Map";
import Form from "../form/Form";
import { connect } from "react-redux";
import React, { Component } from "react";

class Report extends Component {
  render() {
    const { auth } = this.props;
    return (
      <div className="row">
        <div className="col s12 m10 offset-m1">
          <Map />
          <div className="card-panel hoverable">
            <br />
            <Form number={auth.phoneNumber} />
          </div>
          <br />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Report);
