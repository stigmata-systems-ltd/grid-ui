import React, { Component } from "react";
import Radio from "../../common/forms/Radio";

class DashboardFilters extends Component {
  render() {
    return (
      <div class="row">
        <div class="col-lg-12 grid-margin grid-margin-lg-0 stretch-card dashboard-filters">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-md-5"></div>
                <div class="col-md-7">
                  <div class="form-group no-margin-bottom">
                    <Radio label="Current Year" />
                    <Radio label="Last 6 Months" />
                    <Radio label="Current Month" />
                    <Radio label="Till Date" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default DashboardFilters;
