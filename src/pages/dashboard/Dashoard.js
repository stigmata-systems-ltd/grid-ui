import React, { Component } from "react";
import ContentLoader from "../../common/ContentLoader";
import Overview from "./Overview";
import LineChart from "../../common/forms/charts/LineChart";
import Map from "./Map";

class Dashboard extends Component {
  render() {
    return (
      <ContentLoader>
        <Overview />
        <div class="row">
          <div class="col-lg-12 grid-margin grid-margin-lg-0 stretch-card">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Layers Chart </h4>
                <LineChart />
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 grid-margin grid-margin-lg-0 stretch-card">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Grid Map</h4>
                <div className="google-map" style={{height: "600px"}}>
                  <Map />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentLoader>
    );
  }
}

export default Dashboard;
