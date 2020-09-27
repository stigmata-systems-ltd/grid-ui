import React, { Component } from 'react';
import Radio from '../../common/forms/Radio';

class DashboardFilters extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     yearCheck: false,
  //     sixMonthCheck: false,
  //     monthCheck: false,
  //     tillDateCheck: false,
  //   };
  // }
  // yearChange = () => {
  //   this.setState({ yearCheck: true });
  //   this.setState({ sixMonthCheck: false });
  //   this.setState({ monthCheck: false });
  //   this.setState({ tillDateCheck: false });
  // };

  // sixMonthChange = () => {
  //   this.setState({ yearCheck: false });
  //   this.setState({ sixMonthCheck: true });
  //   this.setState({ monthCheck: false });
  //   this.setState({ tillDateCheck: false });
  // };

  // monthChange = () => {
  //   this.setState({ yearCheck: false });
  //   this.setState({ sixMonthCheck: false });
  //   this.setState({ monthCheck: true });
  //   this.setState({ tillDateCheck: false });
  // };

  // tillDateChange = () => {
  //   this.setState({ yearCheck: false });
  //   this.setState({ sixMonthCheck: false });
  //   this.setState({ monthCheck: false });
  //   this.setState({ tillDateCheck: true });
  // };

  render() {
    console.log(`${this.props.yearCheck}`);
    return (
      <div class="row">
        <div class="col-lg-12 grid-margin grid-margin-lg-0 stretch-card dashboard-filters">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-md-5"></div>
                <div class="col-md-7">
                  <div class="form-group no-margin-bottom">
                    <Radio
                      label="Current Year"
                      checked={this.props.yearCheck}
                      onChange={() => this.props.yearChange()}
                    />
                    <Radio
                      label="Last 6 Months"
                      checked={this.props.sixMonthCheck}
                      onChange={() => this.props.sixMonthChange()}
                    />
                    <Radio
                      label="Current Month"
                      checked={this.props.monthCheck}
                      onChange={() => this.props.monthChange()}
                    />
                    <Radio
                      label="Till Date"
                      checked={this.props.tillDateCheck}
                      onChange={() => this.props.tillDateChange()}
                    />
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
