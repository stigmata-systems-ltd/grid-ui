import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import '../../assets/css/map.css';
import Chart from "../../common/forms/charts/PieChart";
class PieChart extends Component {
  static defaultProps = {
    center: {
      lat: 19.076,
      lng: 72.8777,
    },
    zoom: 17,
  };

  render() {
    return (
      <>
        <div class="row">
          <div class="col-lg-6 grid-margin grid-margin-lg-0 stretch-card">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Map</h4>
                <div className="google-map">
                  <GoogleMapReact
                    bootstrapURLKeys={{
                      key: 'AIzaSyD981UnRbwbMPy4ifleYDzkT5-WH9_rUOY',
                    }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                  ></GoogleMapReact>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 grid-margin grid-margin-lg-0 stretch-card">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Pie Chart</h4>
                <Chart />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PieChart;
