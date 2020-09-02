import React, { Component } from 'react';
import Chart from "../../common/forms/charts/PieChart";
import Map from "./Map";

class PieChart extends Component {

  render() {
    return (
      <>
        <div class="row">
          <div class="col-lg-6 grid-margin grid-margin-lg-0 stretch-card">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Map</h4>
                <div className="google-map">
                  <Map />
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
