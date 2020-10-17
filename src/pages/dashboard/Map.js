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
import { GMAP_API_KEY } from "../../utils/globalConst";
import { 
  MAP_MARKER_COMPLETED,
  MAP_MARKER_BILLED,
  MAP_MARKER_PROGRESS,
  MAP_MARKER_START
 } from "../../assets/images/index";

class GridMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      selectedSts: "",
      activeMarker: {},
      selectedPlace: {},
      activeGrid: "",
    };
  }

  onMarkerClick = (id) => this.setState({activeGrid: id},console.log("set",id));

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };
  handleGridView = (id) => {
    this.props.history.push("/grid/viewgriddpr/"+btoa(id));
  };

  getStatusIcon = (sts) => {
    return sts === "completed" ? (
      <FaIcon iconName="faCheckCircle" className="txt-success" />
    ) : (
      <FaIcon iconName="faPeopleCarry" className="txt-danger" />
    );
  };
  getMapMarkerColor = (gridSts) => {
    if(gridSts === "InProgress") {
      return MAP_MARKER_PROGRESS
    }
    else if(gridSts === "New") {
      return MAP_MARKER_START
    }
    else if(gridSts === "Completed") {
      return MAP_MARKER_COMPLETED
    }
    else if (gridSts === "Billed") {
      return MAP_MARKER_BILLED
    } else {
      return MAP_MARKER_START
    }
  }
  render() {
    return (
      <Map
        google={this.props.google}
        onReady={this.setMaps}
        zoom={16}
        initialCenter={{
          lat: this.props.gridDetails.gLatitide,
          lng: this.props.gridDetails.gLongitude,
        }}
        style={{
          width: "100%",
          height: "500px",
        }}
        containerStyle={containerStyle}
        onClick={this.onMapClicked}
      >
        {/* {gridData(this.props.gridDetails).map((grid) => (
          <Marker
            onClick={(props, marker, e) => this.onMarkerClick(props, marker, e, grid.status)}
            name={grid.title}
            position={{ lat: grid.lat, lng: grid.lng }}
            icon={{
              url: "",
            }}
          />
        ))} */}
        {gridData(this.props.gridDetails).map((grid) => grid.title === this.state.activeGrid && (
          <InfoWindow
            visible={true}
            onClose={this.onMapClicked}
          >
            <div className="col-md-12">
              <h5>{this.state.selectedPlace.name}</h5>
              {/* <h6>{grid.description}</h6> */}
              <h6>
                {this.state.selectedSts}
              </h6>
              <Button
                btnText={"View"}
                btnType="primary"
                onClick={this.handleGridView}
              />
            </div>
          </InfoWindow>
        ))}
        {gridData(this.props.gridDetails).map((grid) => (
          <Polygon
            onClick={() => this.handleGridView(grid.id)}
            paths={grid.rectCords}
            strokeColor="#0000FF"
            strokeOpacity={0.8}
            strokeWeight={2}
            fillColor="#0000FF"
            fillOpacity={0.35}
          >
              <h5>{grid.status}</h5>
              {/* <h6>{grid.description}</h6> */}
              <h6>
                {grid.title}
              </h6>
          </Polygon>
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
