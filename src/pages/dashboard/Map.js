import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper, Polygon } from "google-maps-react";
import { gridData } from "./mapUtils";

class GridMap extends Component {

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={16}
        initialCenter={{
          lat: 12.9941172,
          lng: 80.1686781,
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
        {gridData(12.9941172, 80.1686781).map((grid) => (
          <Polygon
              paths={grid.rectCords}
              strokeColor="#0000FF"
              strokeOpacity={0.8}
              strokeWeight={2}
              fillColor="#0000FF"
              fillOpacity={0.35}
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
