import React, { Component } from 'react';
import FormRow from '../../common/forms/FormRow';
import SimpleDropDown from '../../common/forms/SimpleDropDown';
import { gridNumber, status } from './utils';
import Button from '../../common/forms/Button';

class Cleaning extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     selectedGrid: 0,
  //   };
  // }
  // handleGridSelection = e => {
  //   this.setState({ selectedLayer: e.target.value });
  // };
  // componentDidMount() {
  //   this.props.fetchGridNoData();
  // }
  render() {
    return (
      <div class="card">
        <div class="card-body">
          <h5>Cleaning and Grubbing</h5>
          <br />
          <FormRow>
            <SimpleDropDown
              label="Select Grid"
              selectOptions={this.props.gridNoData}
              onChange={e => this.props.onChange(e)}
              // value={this.state.selectedGrid}
            />
          </FormRow>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group row">
                <label class="col-sm-3 col-form-label">RFI Number</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" />
                </div>
              </div>
            </div>
            <SimpleDropDown
              label="RFI Status (Approval)"
              selectOptions={this.props.approvalOptions}
              // onChange={this.handleGridSelection}
              // value={this.state.selectedGrid}
            />
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group row">
                <label class="col-sm-3 col-form-label">Inspection Date</label>
                <div class="col-sm-9">
                  <input type="date" class="form-control" />
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group row">
                <label class="col-sm-3 col-form-label">Approval Date</label>
                <div class="col-sm-9">
                  <input type="date" class="form-control" />
                </div>
              </div>
            </div>
          </div>
          <Button btnText="Save" btnType="primary" />
          <Button btnText="Cancel" btnType="cancel" />
        </div>
      </div>
    );
  }
}

export default Cleaning;
