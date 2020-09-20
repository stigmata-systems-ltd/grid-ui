import React, { Component } from "react";
import {
  Map,
  InfoWindow,
  Marker,
  GoogleApiWrapper,
  Polygon,
} from "google-maps-react";
import { GMAP_API_KEY } from "../../utils/globalConst";
import { transformPolygon } from "./utils";

class CreateMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bounds: new this.props.google.maps.LatLngBounds(),
    };
  }
//   componentDidUpdate(prevProps, prevState, snapshot) {
//       if( prevProps.grid.createCenter !== this.props.grid.createCenter) {
//         this.props.google.maps.panTo(this.props.grid.createCenter);
//       }
//   }
  render() {
      console.log("center",this.props.grid.createCenter);
    return (
      <Map
        google={this.props.google}
        onReady={this.setMaps}
        zoom={14}
        initialCenter={this.props.grid.createCenter}
        style={{
          width: "100%",
          height: "100%",
        }}
        containerStyle={containerStyle}
        onClick={this.onMapClicked}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={"Test"}
          position={this.props.grid.createCenter}
        />
        <Polygon
            paths={transformPolygon(this.props.grid.gridLatLong)}
            strokeColor="#0000FF"
            strokeOpacity={0.8}
            strokeWeight={2}
            fillColor="#0000FF"
            fillOpacity={0.35}
          />
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: GMAP_API_KEY,
})(CreateMap);

const containerStyle = {
  width: "87%",
  height: "85%",
};
