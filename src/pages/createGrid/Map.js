import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { gridData } from "./mapUtils";

class GridMap extends Component {
  static defaultProps = {
    center: {
      lat: 19.076,
      lng: 72.8777,
    },
    zoom: 17,
  };
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={20}
        initialCenter={{
          lat: 12.9941172,
          lng: 80.1686781
        }}
        style={{
          width: "100%",
          height: "100%",
        }}
        containerStyle={containerStyle}
      >
        {gridData(12.9941172, 80.1686781).map((grid) => (
          <Marker
            name={grid.title}
            position={{ lat: grid.lat, lng: grid.lng }}
          />
        ))}
      </Map>
    );
  }
}

const containerStyle = {
  width: "87%",
  height: "85%",
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyD981UnRbwbMPy4ifleYDzkT5-WH9_rUOY",
})(GridMap);
