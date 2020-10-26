import React, { Component } from 'react';
import ContentLoader from '../../common/ContentLoader';
import {
  Map,
  InfoWindow,
  Marker,
  GoogleApiWrapper,
  Polygon,
} from 'google-maps-react';
import { gridData } from '../../pages/dashboard/mapUtils';
import Button from '../../common/forms/Button';
import { withRouter } from 'react-router-dom';
import FaIcon from '../../common/FaIcon';
import { GMAP_API_KEY } from '../../utils/globalConst';
import {
  MAP_MARKER_COMPLETED,
  MAP_MARKER_BILLED,
  MAP_MARKER_PROGRESS,
  MAP_MARKER_START,
} from '../../assets/images/index';
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
} from '../../utils/globalConst';
import FormRow from '../../common/forms/FormRow';
import SearchableDropDown from '../../common/forms/SearchableDropDown';
import { transformLayerList } from './utils';
import Loader from '../../common/Loader';
import Divider from '../../common/Divider';

class GridMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      selectedSts: '',
      activeMarker: {},
      selectedPlace: {},
    };
  }
  componentDidMount = () => {
    this.props.reportMapInitData();
  };

  onMarkerClick = (props, marker, e, status) =>
    this.setState({
      selectedPlace: props,
      selectedSts: status,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };
  handleGridView = () => {
    this.props.history.push('griddetails');
  };

  getStatusIcon = sts => {
    return sts === 'completed' ? (
      <FaIcon iconName="faCheckCircle" className="txt-success" />
    ) : (
      <FaIcon iconName="faPeopleCarry" className="txt-danger" />
    );
  };
  getPolygonStrokeColor = gridSts => {
    // console.log(`Grid Status: ${gridSts}`);
    if (gridSts === 'InProgress') {
      return GRID_IN_PROGRESS_STROKE;
    } else if (gridSts === 'New') {
      return GRID_YET_TO_START_STROKE;
    } else if (gridSts === 'Completed' || gridSts === 'LayerCompleted') {
      console.log(
        `Inside LayerCompleted Section AND GRID_COMPLETED: ${GRID_COMPLETED}`
      );
      return GRID_COMPLETED_STROKE;
    } else if (gridSts === 'Billed') {
      return GRID_BILLED_STROKE;
    } else {
      return GRID_YET_TO_START_STROKE;
    }
  };
  getPolygonFillColor = gridSts => {
    // console.log(`Grid Status: ${gridSts}`);
    if (gridSts === 'InProgress') {
      return GRID_IN_PROGRESS;
    } else if (gridSts === 'New') {
      return GRID_YET_TO_START;
    } else if (gridSts === 'Completed' || gridSts === 'LayerCompleted') {
      console.log(
        `Inside LayerCompleted Section AND GRID_COMPLETED: ${GRID_COMPLETED}`
      );
      return GRID_COMPLETED;
    } else if (gridSts === 'Billed') {
      return GRID_BILLED;
    } else {
      return GRID_YET_TO_START;
    }
  };
  getMapMarkerColor = gridSts => {
    console.log(`Grid Status: ${gridSts}`);
    if (gridSts === 'InProgress') {
      return MAP_MARKER_PROGRESS;
    } else if (gridSts === 'New') {
      return MAP_MARKER_START;
    } else if (gridSts === 'Completed' || gridSts === 'LayerCompleted') {
      return MAP_MARKER_COMPLETED;
    } else if (gridSts === 'Billed') {
      return MAP_MARKER_BILLED;
    } else {
      return MAP_MARKER_START;
    }
  };
  render() {
    return (
      <>
        {this.props.reports.mapReportLoading && <Loader />}
        <ContentLoader>
          <div class="card">
            <div class="card-body">
              <h5>Layer Map Reports</h5>
              <br />
              <FormRow>
                <SearchableDropDown
                  label="Layer Number"
                  size="col-md-10"
                  selectOptions={transformLayerList(
                    this.props.reports.layerList
                  )}
                  onChange={value =>
                    this.props.handleLayerNoChangeReport(value)
                  }
                  value={this.props.reports.selectedLayers}
                  isMulti={true}
                />
              </FormRow>
              <div class="row">
                <div class="col-md-12">
                  {this.props.gridDetails && (
                    <Map
                      google={this.props.google}
                      onReady={this.setMaps}
                      zoom={16}
                      initialCenter={{
                        lat: this.props.gridDetails.gLatitide,
                        lng: this.props.gridDetails.gLongitude,
                      }}
                      style={{
                        width: '100%',
                        height: '500px',
                      }}
                      containerStyle={containerStyle}
                      onClick={this.onMapClicked}
                    >
                      {gridData(this.props.gridDetails).map(grid => (
                        <Marker
                          onClick={(props, marker, e) =>
                            this.onMarkerClick(props, marker, e, grid.status)
                          }
                          name={grid.title}
                          position={{ lat: grid.lat, lng: grid.lng }}
                          icon={{
                            url: this.getMapMarkerColor(grid.status),
                          }}
                        />
                      ))}
                      {/* {gridData(this.props.gridDetails).map(grid => (
                        <InfoWindow
                          marker={this.state.activeMarker}
                          visible={this.state.showingInfoWindow}
                          onClose={this.onMapClicked}
                        >
                          <div className="col-md-12">
                            <h5>{this.state.selectedPlace.name}</h5>
                            {/* <h6>{grid.description}</h6>
                            <h6>{this.state.selectedSts}</h6>
                            <Button
                              btnText={'View'}
                              btnType="primary"
                              onClick={this.handleGridView}
                            />
                          </div>
                        </InfoWindow>
                      ))} */}
                      {gridData(this.props.gridDetails).map(grid => (
                        <Polygon
                          paths={grid.rectCords}
                          strokeColor={this.getPolygonStrokeColor(grid.status)}
                          strokeOpacity={0.8}
                          strokeWeight={2}
                          fillColor={this.getPolygonFillColor(grid.status)}
                          fillOpacity={0.35}
                        />
                      ))}
                    </Map>
                  )}
                </div>
              </div>
            </div>
          </div>
          <Divider height="48" />
        </ContentLoader>
      </>
    );
  }
}

const containerStyle = {
  width: '93%',
  height: '85%',
};

export default GoogleApiWrapper({
  apiKey: GMAP_API_KEY,
})(withRouter(GridMap));
