import React, { Component } from 'react';
import FormRow from '../../common/forms/FormRow';
import SimpleDropDown from '../../common/forms/SimpleDropDown';
import { gridNumber, status } from './utils';
import Button from '../../common/forms/Button';
import CustomAlert from '../../common/forms/customAlert';
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
          <div>
            {this.props.message ? (
              <CustomAlert
                variant={this.props.variant}
                message={this.props.message}
              />
            ) : null}
          </div>
          <FormRow>
            <SimpleDropDown
              label="Select Grid"
              selectOptions={this.props.gridNoData}
              onChange={e => this.props.onGridNoChange(e)}
              value={this.props.gridNumber}
            />
          </FormRow>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group row">
                <label class="col-sm-3 col-form-label">RFI Number</label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control"
                    onChange={e => this.props.onRFINoChange(e)}
                    value={this.props.RFINumber}
                  />
                </div>
              </div>
            </div>
            <SimpleDropDown
              label="RFI Status (Approval)"
              selectOptions={this.props.approvalOptions}
              onChange={e => this.props.onapprovalChange(e)}
              value={this.props.RFIApproval}
            />
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group row">
                <label class="col-sm-3 col-form-label">Inspection Date</label>
                <div class="col-sm-9">
                  <input
                    type="date"
                    class="form-control"
                    onChange={e => this.props.onInspectionDateChange(e)}
                    value={this.props.rfiInspectionDate}
                  />
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group row">
                <label class="col-sm-3 col-form-label">Approval Date</label>
                <div class="col-sm-9">
                  <input
                    type="date"
                    class="form-control"
                    onChange={e => this.props.onApprovalDateChange(e)}
                    value={this.props.rfiApprovalDate}
                  />
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group row">
                <label class="col-sm-3 col-form-label">Upload Document</label>
                <div class="col-sm-9">
                  <input type="file" name="img[]" class="file-upload-default" />
                  <div class="input-group col-xs-12">
                    <input
                      type="text"
                      class="form-control file-upload-info"
                      disabled=""
                      placeholder="Upload Image"
                    />
                    <span class="input-group-append">
                      <button
                        class="file-upload-browse btn btn-primary"
                        type="button"
                      >
                        Upload
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Button
            btnText="Save"
            btnType="primary"
            onClick={this.props.addCGData}
          />
          <Button
            btnText="Cancel"
            btnType="cancel"
            onClick={this.props.cancelCGData}
          />
        </div>
      </div>
    );
  }
}

export default Cleaning;
