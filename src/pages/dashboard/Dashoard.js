import React, { Component } from 'react';
import ContentLoader from '../../common/ContentLoader';
import Overview from './Overview';
import LineChart from '../../common/forms/charts/LineChart';
import Map from './Map';
import DashboardFilters from './DashboardFilters';
import Loader from '../../common/Loader';

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchDashBoardData();
  }
  render() {
    return (
      <>
        {this.props.db.isListDashboardDetailsLoading && <Loader />}
        <ContentLoader>
          <DashboardFilters
            yearCheck={this.props.db.yearCheck}
            sixMonthCheck={this.props.db.sixMonthCheck}
            monthCheck={this.props.db.monthCheck}
            tillDateCheck={this.props.db.tillDateCheck}
            yearChange={() => this.props.yearChange()}
            sixMonthChange={() => this.props.sixMonthChange()}
            monthChange={() => this.props.monthChange()}
            tillDateChange={() => this.props.tillDateChange()}
          />
          <Overview dashboardData={this.props.db.dashboardData} />
          <div class="row">
            <div class="col-lg-7 grid-margin grid-margin-lg-0 stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Layers Chart </h4>
                  <LineChart />
                </div>
              </div>
            </div>
            <div class="col-lg-5 grid-margin grid-margin-lg-0 stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Grid Map</h4>
                  <div className="google-map" style={{ height: '600px' }}>
                    <Map />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ContentLoader>
      </>
    );
  }
}

export default Dashboard;
