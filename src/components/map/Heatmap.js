import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import firebase from '../../config/fbConfig';
import axios from 'axios';

var ACCESS_TOKEN = 'pk.eyJ1IjoidmlwaW5yYmhhcmFkd2FqIiwiYSI6ImNrY3VvZGQ0MzJhNHYyeHM2a21uNGEzZm4ifQ.53CYrj7PS_gUiv8iqESrXQ';

var heatMapData = {
    positions: [],
    options: {
        radius: 20,
        opacity: 0.6,
    }
}

class Heatmap extends Component {
    state = {
        zoom: 13,
        center: {
            lat: null,
            lng: null,
        },
        mapTypeId: "satellite",
        heatmap: []
    };
    UNSAFE_componentWillMount() {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(position => {
                var url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
                + position.coords.longitude + ', ' + position.coords.latitude 
                + '.json?access_token=' + ACCESS_TOKEN; 
                this.setState({
                    center: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    }
                })
                axios.get(url).then(res => {
                    var positions = [];
                    var promise = new Promise((resolve, reject) => {
                        var db = firebase.firestore();
                        db.collection("issues")
                        .get()
                        .then((querySnapshot) => {
                            querySnapshot.forEach((doc) => {
                                var tempdata = doc.data();
                                positions.push(tempdata.Location);
                            });
                            resolve(positions);
                        })
                        .catch(function(error) {
                            console.log(error);
                        })
                    })
                    promise.then(positions => {
                        heatMapData.positions = positions;
                        const heatmap = <GoogleMapReact
                                            bootstrapURLKeys={{ key: 'AIzaSyAbIuPIQlI4AukyWuZOgHp4I5lammFppv8' }}
                                            defaultCenter={ this.state.center }
                                            defaultZoom={ this.state.zoom }
                                            heatmapLibrary={ true }
                                            heatmap={ heatMapData }
                                        />
                        this.setState({ heatmap });
                    })
                })
          });
        } else{
           alert("Sorry, browser does not support geolocation!");
        } 
    }
    render() {
        return (
            <div style={{ height: '80vh', width: '100%' }}>
                { this.state.heatmap }
            </div>
        );
    }
}

export default Heatmap;