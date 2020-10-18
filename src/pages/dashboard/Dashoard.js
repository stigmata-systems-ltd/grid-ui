import React, { Component } from "react";
import ContentLoader from "../../common/ContentLoader";
import Overview from "./Overview";
import LineChart from "../../common/forms/charts/LineChart";
import Map from "./Map";
import DashboardFilters from "./DashboardFilters";
import Loader from "../../common/Loader";
import SearchableDropDown from "../../common/forms/SearchableDropDown";
import { transformGridList } from "./utils";
import FormRow from "../../common/forms/FormRow";
import Col6 from "../../common/forms/Col6";
class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchDashboadInitData();
    // this.props.fetchDashBoardData();
    // this.props.fetchDashBoardMapData();
  }
  render() {
    return (
      <>
        {(this.props.db.isListDashboardDetailsLoading ||
          this.props.db.isListDashboardMapDetailsLoading) && <Loader />}
        <ContentLoader>
          <DashboardFilters
            yearCheck={this.props.db.yearCheck}
            sixMonthCheck={this.props.db.sixMonthCheck}
            monthCheck={this.props.db.monthCheck}
            tillDateCheck={this.props.db.tillDateCheck}
            yearChange={() => this.props.yearChange()}
            monthChange={() => this.props.monthChange()}
            tillDateChange={() => this.props.tillDateChange()}
            customDateFrom={(from) => this.props.customDateFrom(from)}
            customDateTo={(to) => this.props.customDateTo(to)}
            {...this.props}
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
                  <FormRow>
                    <Col6 size="col-md-3">
                      <h4 class="card-title">Grid Map</h4>
                    </Col6>
                    <Col6 size="col-md-9">
                      <SearchableDropDown
                        size="col-md-12"
                        fieldSize="col-sm-12"
                        selectOptions={transformGridList(
                          this.props.db.gridList
                        )}
                        onChange={(value) =>
                          this.props.handleGridNoChange(value)
                        }
                        value={this.props.db.activeGrid}
                      />
                    </Col6>
                  </FormRow>
                  <div className="google-map" style={{ height: "600px" }}>
                    {!this.props.db.isListDashboardMapDetailsLoading && (
                      <Map gridDetails={this.props.db.listMapData} {...this.props} />
                    )}
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
