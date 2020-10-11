import React, { Component } from 'react';
import Button from './forms/Button';
import { withRouter } from 'react-router-dom';
import LayerViewModel from '../pages/viewGridDPR/LayerViewModel';
import IconTextButton from './forms/IconTextButton';
import LayerDPRViewModel from './LayerDPRViewModel';
import FormRow from './forms/FormRow';
import LayerDPRViewDataTable from './LayerDPRViewDataTable';
import TextInput from './forms/TextInput';
import IconButton from './forms/IconButton';
import Label from './forms/Label';
import LatLongReadOnlyTable from './LatLongReadOnlyTable';
import { _subContractorQuantityMetaData, tranformSubCat } from '../pages/viewGridDPR/utils';
class LayerDPRDetail extends Component {
  constructor() {
    super();
    this.state = {
      showLayerViewModal: false,
    };
  }
  renderTableHeaders = () => {
    return this.props.metaData.map(header => (
      <th>
        <p>{header}</p>
      </th>
    ));
  };

  handleLayerViewModalClose = () => {
    this.setState({ showLayerViewModal: false });
  };
  showLayerViewModal = i => {
    this.props.fetchLayerInfo(i);
    this.setState({ showLayerViewModal: true });
  };
  redirectToEditGrid = () => {
    this.props.history.push('grid/dpr');
  };

  render() {
    return (
      <div class="table-responsive pt-4 data-table ">
        <table class="table table-bordered ">
          <thead>
            <tr>{this.renderTableHeaders()}</tr>
          </thead>
          <tbody>
            {this.props.bodyData.map((data, i) => {
              return (
                <tr>
                  {Object.keys(data).map(key => (
                    <>
                      <td> {data[key]}</td>
                    </>
                  ))}
                  <td class="action-btns">
                    <Button
                      btnText="View"
                      btnType="primary"
                      onClick={() => this.showLayerViewModal(i)}
                    />
                    {/* <IconButton
                      iconName="faEdit"
                      onClick={this.redirectToEditGrid}
                    /> */}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Layer DPR View Model */}

        <LayerDPRViewModel
          showModal={this.state.showLayerViewModal}
          handleClose={this.handleLayerViewModalClose}
          size="lg"
          title="View Layer DPR Details"
        >
          <FormRow>
            <Label
              label="Grid Number"
              readOnly="test"
              value={this.props.gridNo}
              size="col-md-4"
            />
            <Label
              label="Layer Number"
              readOnly="test"
              value={this.props.layerNo}
              size="col-md-4"
            />
            <Label
              label="Area Of Layer (Sqm)"
              readOnly="test"
              value={this.props.area_layer}
              size="col-md-4"
            />
          </FormRow>
          <FormRow>
            <Label
              label="RFI No - Level Verification"
              readOnly="test"
              value={this.props.rfiNoLV}
              size="col-md-4"
            />
            <Label
              label="RFI No - Compaction Testing"
              readOnly="test"
              value={this.props.rfiNoCT}
              size="col-md-4"
            />
            <Label
              label="Date of Filing"
              readOnly="test"
              value={this.props.fillingDate}
              size="col-md-4"
            />
          </FormRow>
          <FormRow>
            <Label
              label="Top Level Fill Metrials"
              readOnly="test"
              value={this.props.topFillMaterial}
              size="col-md-4"
            />
            <Label
              label="Meterial Description"
              readOnly="test"
              value={this.props.fillingMaterial}
              size="col-md-4"
            />
          </FormRow>
          <FormRow>
            <LatLongReadOnlyTable
              metaData={_subContractorQuantityMetaData}
              bodyData={tranformSubCat(this.props.layerSubContractor)}
            />
          </FormRow>
        </LayerDPRViewModel>
      </div>
    );
  }
}

export default withRouter(LayerDPRDetail);
