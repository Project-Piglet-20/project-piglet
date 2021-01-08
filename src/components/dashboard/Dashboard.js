import React, { Component } from "react";
import IssueList from "../issues/IssueList";
import Notifications from "./Notifications";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

var ACCESS_TOKEN =
  "pk.eyJ1IjoidmlwaW5yYmhhcmFkd2FqIiwiYSI6ImNrY3VvZGQ0MzJhNHYyeHM2a21uNGEzZm4ifQ.53CYrj7PS_gUiv8iqESrXQ";

class Dashboard extends Component {
  locality = "";
  componentWillMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        var url =
          "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
          position.coords.longitude +
          ", " +
          position.coords.latitude +
          ".json?access_token=" +
          ACCESS_TOKEN;
          fetch(url)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            this.locality = data.features[1].text;
          })
          .catch((err) => {
            console.log(err);
          });
      });
    }
  }
  render() {
    const { issues, notifications } = this.props;
    return (
      <div className="dashboard">
        <div className="row">
          <div className="col s12 m6 offset-m1">
            <div className="scrollable">
              <IssueList
                issues={
                  issues &&
                  issues.filter((issue) => {
                    return issue.Locality === this.locality;
                  })
                }
              />
            </div>
          </div>
          <div className="col s12 m3 offset-m1">
            <Notifications notifications={notifications} />
          </div>
          <div className="col m1"></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    issues: state.firestore.ordered.issues,
    notifications: state.firestore.ordered.notifications,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "issues",
      // limit: 10,
      orderBy: ["DOR", "desc"],
    },
    {
      collection: "notifications",
      limit: 5,
      orderBy: ["time", "desc"],
    },
  ])
)(Dashboard);
