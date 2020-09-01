import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import '../../assets/css/map.css';

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
          <div class="col-lg-12 grid-margin grid-margin-lg-0 stretch-card">
            <div class="card">
              <div class="card-body">
                <div class="chartjs-size-monitor">
                  <div class="chartjs-size-monitor-expand">
                    <div class=""></div>
                  </div>
                  <div class="chartjs-size-monitor-shrink">
                    <div class=""></div>
                  </div>
                </div>
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
        </div>
      </>
    );
  }
}

export default PieChart;
