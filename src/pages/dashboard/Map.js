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
  MAP_MARKER_START,
} from "../../assets/images/index";
import {
  GRID_ACTIVE,
  GRID_BILLED,
  GRID_COMPLETED,
  GRID_IN_PROGRESS,
  GRID_YET_TO_START,
  GRID_ACTIVE_STROKE,
  GRID_BILLED_STROKE,
  GRID_COMPLETED_STROKE,
  GRID_IN_PROGRESS_STROKE,
  GRID_YET_TO_START_STROKE,
} from "../../utils/globalConst";

class GridMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      selectedSts: "",
      activeMarker: {},
      selectedPlace: {},
      activeGrid: "",
      initialCenter: {
        lat: props.gridDetails.gLatitide,
        lng: props.gridDetails.gLongitude,
      },
    };
  }

  onMarkerClick = (id) => this.setState({ activeGrid: id });

  setCenter = (grid) => {
    this.setState({
      initialCenter: {
        lat: grid.lat,
        lng: grid.lng,
      },
    });
  };
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };
  handleGridView = (id) => {
    this.props.history.push("/grid/viewgriddpr/" + btoa(id));
  };

  getStatusIcon = (sts) => {
    return sts === "completed" ? (
      <FaIcon iconName="faCheckCircle" className="txt-success" />
    ) : (
      <FaIcon iconName="faPeopleCarry" className="txt-danger" />
    );
  };
  getMapMarkerColor = (gridSts) => {
    if (gridSts === "InProgress") {
      return MAP_MARKER_PROGRESS;
    } else if (gridSts === "New") {
      return MAP_MARKER_START;
    } else if (gridSts === "Completed") {
      return MAP_MARKER_COMPLETED;
    } else if (gridSts === "Billed") {
      return MAP_MARKER_BILLED;
    } else {
      return MAP_MARKER_START;
    }
  };
  getPolygonFillColor = (gridSts) => {
    if (gridSts === "InProgress") {
      return GRID_IN_PROGRESS;
    } else if (gridSts === "New") {
      return GRID_YET_TO_START;
    } else if (gridSts === "Completed") {
      return GRID_COMPLETED;
    } else if (gridSts === "Billed") {
      return GRID_BILLED;
    } else {
      return GRID_YET_TO_START;
    }
  };
  getPolygonStrokeColor = (gridSts) => {
    if (gridSts === "InProgress") {
      return GRID_IN_PROGRESS_STROKE;
    } else if (gridSts === "New") {
      return GRID_YET_TO_START_STROKE;
    } else if (gridSts === "Completed") {
      return GRID_COMPLETED_STROKE;
    } else if (gridSts === "Billed") {
      return GRID_BILLED_STROKE;
    } else {
      return GRID_YET_TO_START_STROKE;
    }
  };
  componentDidUpdate(prevProps) {
    if (prevProps.db.panCenter !== this.props.db.panCenter) {
      this.setState({activeGrid: this.props.db.activeGrid.value});
      this.recenterMap();
    }
  }
  recenterMap() {
    const current = this.props.db.panCenter;
    const google = this.props.google;
    const maps = google.maps;
    console.log("in recenter", this.props.db.panCenter);

    if (this.map) {
      let center = new maps.LatLng(current.lat, current.lng);
      console.log("in recenter in if", this.props.db.panCenter);
      this.map.panTo(center);
    }
  }
  setMaps = (mapProps, map) => {
    this.map = map;
  };
  render() {
    console.log("active", this.props.db && this.props.db.initialCenter);
    return (
      <Map
        google={this.props.google}
        onReady={this.setMaps}
        zoom={this.props.db.zoom ? this.props.db.zoom : 16}
        initialCenter={this.props.db.initialCenter}
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
        {/*gridData(this.props.gridDetails).map(
          (grid) =>
            grid.title === this.state.activeGrid && (
              <InfoWindow visible={true} onClose={this.onMapClicked}>
                <div className="col-md-12">
                  <h5>{this.state.selectedPlace.name}</h5>
                  {<h6>{grid.description}</h6>}
                  <h6>{this.state.selectedSts}</h6>
                  <Button
                    btnText={"View"}
                    btnType="primary"
                    onClick={this.handleGridView}
                  />
                </div>
              </InfoWindow>
            )
            )*/}
        {gridData(this.props.gridDetails).map((grid) => (
          <Polygon
            onClick={() => this.handleGridView(grid.id)}
            paths={grid.rectCords}
            strokeColor={
              this.state.activeGrid === grid.id
                ? "#000"
                : this.getPolygonStrokeColor(grid.status)
            }
            strokeOpacity={0.8}
            strokeWeight={2}
            fillColor={
              this.state.activeGrid === grid.id
                ? "#000"
                : this.getPolygonFillColor(grid.status)
            }
            fillOpacity={0.35}
          >
            <h5>{grid.status}</h5>
            {/* <h6>{grid.description}</h6> */}
            <h6>{grid.title}</h6>
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
