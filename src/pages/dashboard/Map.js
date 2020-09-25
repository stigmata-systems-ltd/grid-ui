import React, { Component } from "react";
import {
  Map,
  InfoWindow,
  Marker,
  GoogleApiWrapper,
  Polygon,
} from "google-maps-react";
import { gridData } from "./mapUtils";
import Button from "../../common/forms/Button";
import { withRouter } from "react-router-dom";
import FaIcon from "../../common/FaIcon";
import {GMAP_API_KEY} from "../../utils/globalConst";

class GridMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };
  handleGridView = () => {
    this.props.history.push("griddetails");
  };

  getStatusIcon = (sts) => {
    return sts === "completed" ? (
      <FaIcon iconName="faCheckCircle" className="txt-success" />
    ) : (
      <FaIcon iconName="faPeopleCarry" className="txt-danger" />
    );
  };

  render() {
    return (
      <Map
        google={this.props.google}
        onReady={this.setMaps}
        zoom={16}
        initialCenter={{
          lat: 12.9941172,
          lng: 80.1686781,
        }}
        style={{
          width: "100%",
          height: "500px",
        }}
        containerStyle={containerStyle}
        onClick={this.onMapClicked}
      >
        {gridData(12.9941172, 80.1686781).map((grid) => (
          <Marker
            onClick={this.onMarkerClick}
            name={grid.title}
            position={{ lat: grid.lat, lng: grid.lng }}
          />
        ))}
        {gridData().map((grid) => (
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onMapClicked}
          >
            <div className="col-md-12">
              <h5>{this.state.selectedPlace.name}</h5>
              {/* <h6>{grid.description}</h6> */}
              <h6
                className={`${
                  grid.status === "completed" ? "text-success" : "text-warning"
                }`}
              >
                {this.getStatusIcon(grid.status)}
                {` ${grid.status}`}
              </h6>
              <Button
                btnText={"View"}
                btnType="btn-info"
                onClick={this.handleGridView}
              />
            </div>
          </InfoWindow>
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
  apiKey: GMAP_API_KEY,
})(withRouter(GridMap));
