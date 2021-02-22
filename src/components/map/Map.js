import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

// const api_key = "AIzaSyBX46e_tN99em7J8vfPMKsNI_1lrx2PdQk";
const api_key = "AIzaSyAbIuPIQlI4AukyWuZOgHp4I5lammFppv8";

const Marker = (props) => {
  const { color, name } = props;
  return (
    <div>
      <div
        className="pin bounce"
        style={{ backgroundColor: color, cursor: "pointer" }}
        title={name}
      ></div>
      <div className="pulse" />
    </div>
  );
};

const getMapOptions = () => {
  return {
    disableDefaultUI: true,
    mapTypeControl: true,
    streetViewControl: true,
    styles: [
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "on" }],
      },
    ],
  };
};

class Map extends Component {
  state = {
    center: {
      lat: null,
      lng: null,
    },
    zoom: 20,
  };

  location = () => {
    if (!this.props.center) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.setState({
            center: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
          });
        });
      }
    } else {
      this.setState({
        center: this.props.center,
      });
    }
  };

  componentDidMount() {
    this.location();
  }

  render() {
    return (
      <div className="mapSize">
        <GoogleMapReact
          bootstrapURLKeys={{ key: api_key }}
          center={this.state.center}
          defaultZoom={this.state.zoom}
          options={getMapOptions}
        >
          <Marker
            lat={this.state.center.lat}
            lng={this.state.center.lng}
            name="My Location"
            color="red"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
