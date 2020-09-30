import React, { Component } from 'react';
import FormRow from '../../common/forms/FormRow';
import SimpleDropDown from '../../common/forms/SimpleDropDown';
import SearchableDropDown from '../../common/forms/SearchableDropDown';
import { gridNumber, status } from './utils';
import Button from '../../common/forms/Button';
import CustomAlert from '../../common/forms/customAlert';
import { transformCleaning } from './utils';
import Loader from '../../common/Loader';
import FileInput from '../../common/forms/FileInput';
class Cleaning extends Component {
  render() {
    return (
      <>
        {this.props.isGridCGLoading && <Loader />}
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
              <SearchableDropDown
                label="Select Grid"
                selectOptions={transformCleaning(this.props.gridNoData)}
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
              <FormRow>
                <FileInput
                  size="col-md-12"
                  label="Select Documents"
                  onChange={e => this.props.handleFileUpload(e)}
                />
              </FormRow>
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
      </>
    );
  }
}

export default Cleaning;
