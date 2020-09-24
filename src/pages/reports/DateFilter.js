import React, { Component } from "react";
import Col6 from "../../common/forms/Col6";
import ExportExcel from "../../common/ExportExcel";

class DateFilter extends Component {
  render() {
    return (
      <div class="row">
        <div class="col-md-4">
          <div class="form-group row">
            <label class="col-sm-3 col-form-label">From</label>
            <div class="col-sm-9">
              <input
                type="date"
                class="form-control"
                onChange={(e) => this.props.onChangeFrom(e)}
                value={this.props.value}
              />
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group row">
            <label class="col-sm-3 col-form-label">To</label>
            <div class="col-sm-9">
              <input
                type="date"
                class="form-control"
                onChange={(e) => this.props.onChangeTo(e)}
                value={this.props.value}
              />
            </div>
          </div>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-3">
          <div class="form-group row">
            <div class="input-group md-form form-sm form-1 pl-0">
              <ExportExcel
                data={this.props.bodyData}
                // header={this.props.headers}
                filename={this.props.fileName}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DateFilter;
