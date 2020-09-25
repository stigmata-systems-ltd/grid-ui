import React, { Component } from 'react';
import FormRow from '../../common/forms/FormRow';
import TextInput from '../../common/forms/TextInput';
import SimpleDropDown from '../../common/forms/SimpleDropDown';
import Modal from '../../common/Modal';
import Loader from '../../common/Loader';
import { transformUserRoles } from './utils';

class ViewPMModel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(`show model: ${true}`);
    return (
      <Modal
        title={'View Layer'}
        showModal={true}
        // handleClose={this.props.closePMViewModal}
        size="lg"
        isShowFooter={false}
      >
        <FormRow>
          <TextInput
            label="Grid Number"
            name="gridNumber"
            id="gridNumber"
            value={this.props.grid.gridNumber}
          />
          <TextInput
            label="Layer Number"
            name="layerNumber"
            id="layerNumber"
            value={this.props.grid.LayerNumber}
          />
        </FormRow>
        <FormRow>
          <TextInput
            label="RFI Level Approval Date"
            name="rfiLVApprovalDate"
            id="rfiLVApprovalDate"
            value={this.props.grid.rfiLVApprovalDate}
          />
          <TextInput
            label="RFI Level Approval Status"
            name="rfiLVApprovalDate"
            id="rfiLVApprovalStatus"
            value={this.props.grid.rfiLVApprovalStatus}
          />
        </FormRow>
        <FormRow>
          <TextInput
            label="RFI Testing Approval Date"
            name="rfiCTApprovalDate"
            id="rfiCTApprovalDate"
            value={this.props.grid.rfiCTApprovalDate}
          />
          <TextInput
            label="RFI Testing Approval Status"
            name="rfiCTApprovalDate"
            id="rfiCTApprovalStatus"
            value={this.props.grid.rfiCTApprovalStatus}
          />
        </FormRow>
        <FormRow>
          <TextInput
            label="Layer Status"
            name="layerStatus"
            id="layerStatus"
            value={this.props.grid.layerStatus}
          />
        </FormRow>
      </Modal>
    );
  }
}

export default ViewPMModel;
