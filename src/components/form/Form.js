import axios from "axios";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import React, { Component } from "react";
import CreatableSelect from "react-select/creatable";
import { firestoreConnect } from "react-redux-firebase";
import { addIssue } from "../../store/actions/issueActions";

const ACCESS_TOKEN =
  "pk.eyJ1IjoidmlwaW5yYmhhcmFkd2FqIiwiYSI6ImNrY3VvZGQ0MzJhNHYyeHM2a21uNGEzZm4ifQ.53CYrj7PS_gUiv8iqESrXQ";

class Form extends Component {
  state = {
    Category: "Select Category",
    Type: null,
    Location: {
      lat: null,
      lng: null,
    },
    Number: this.props.number,
    Status: "Reported",
    DOC: "-",
  };
  UNSAFE_componentWillMount() {
    this.getLocation();
  }
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
          Location: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
        });
        this.get_data(position.coords.latitude, position.coords.longitude);
      });
    } else {
      alert("Sorry, browser does not support geolocation!");
    }
  }
  get_data = (latitude, longitude) => {
    var url =
      "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
      longitude +
      ", " +
      latitude +
      ".json?access_token=" +
      ACCESS_TOKEN;
    axios.get(url).then((res) => {
      var toastHTML = "Your Location: " + res.data.features[1].text;
      window.M.toast({
        html: toastHTML,
        options: {
          displayLength: 100,
        },
      });
      this.setState({ Locality: res.data.features[1].text });
    });
  };
  addData = (event) => {
    this.setState({
      Category: event.Cid,
      Type: event.value,
    });
  };
  clickHandler = (event) => {
    if (event) {
      this.setState({
        [event.target.id]: event.target.value,
      });
    }
  };
  submitHandler = (event) => {
    event.preventDefault();
    this.props.addIssue(this.state);
    this.props.history.push("/home");
  };
  resetHandler = () => {
    const state = {
      Category: "Select Category",
      Type: null,
      Location: {
        lat: null,
        lng: null,
      },
      Number: null,
      Status: "Reported",
      DOC: "-",
    };
    this.setState({ state });
  };
  render() {
    return (
      <div className="container">
        <form
          onSubmit={(event) => this.submitHandler(event)}
          onReset={this.resetHandler}
        >
          <h3 className="center" style={{ color: "#00838f" }}>
            Fill in the details
            <i className="material-icons small">article</i>
          </h3>
          <br /> <br />
          <div className="input-field">
            <i className="material-icons prefix">phone</i>
            <input id="Number" type="number" />
            <label htmlFor="number">{this.state.Number}</label>
          </div>
          <br />
          <div>
            <label style={{ fontSize: "larger", color: "black" }}>
              What is the problem?
            </label>
            <i className="material-icons left">search</i>
            <br />
            <div className="input-field">
              <CreatableSelect
                isClearable
                options={this.props.CategoryList}
                onChange={(e) => this.addData(e)}
              />
            </div>
          </div>
          <div style={{ padding: "30px" }}></div>
          <div className="center" style={{ paddingLeft: "40px" }}>
            <button
              disabled={this.state.Type ? false : true}
              className="btn waves-effect waves-light center"
              type="submit"
            >
              <i className="material-icons right">send</i>
              Submit
            </button>
            <button
              disabled={this.state.Type ? false : true}
              className="btn-floating waves-effect waves-light red right"
              type="reset"
            >
              <i className="material-icons">delete</i>
            </button>
          </div>
          <br />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    CategoryList: state.firestore.ordered.dropdownList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addIssue: (issue) => dispatch(addIssue(issue)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    {
      collection: "dropdownList",
    },
  ])
)(withRouter(Form));
