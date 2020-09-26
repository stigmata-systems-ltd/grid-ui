import React, { Component } from 'react';
import FormRow from '../../common/forms/FormRow';
import TextInput from '../../common/forms/TextInput';
import Label from '../../common/forms/Label';
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
        showModal={this.props.pm.showPMViewModal}
        handleClose={this.props.hidePmViewModal}
        size="lg"
        isShowFooter={false}
      >
        <FormRow>
          <Label
            label="Grid Number"
            name="gridNumber"
            id="gridNumber"
            value={this.props.pm.viewGridNumber}
          />
          <Label
            label="Layer Number"
            name="layerNumber"
            id="layerNumber"
            value={this.props.pm.viewLayerNumber}
          />
        </FormRow>
        <FormRow>
          <Label
            label="RFI Level Approval Date"
            name="rfiLVApprovalDate"
            id="rfiLVApprovalDate"
            value={this.props.pm.viewRfiLVApprovalDate}
          />
          <Label
            label="RFI Level Approval Status"
            name="rfiLVApprovalDate"
            id="rfiLVApprovalStatus"
            value={this.props.pm.viewRfiLVApprovalStatus}
          />
        </FormRow>
        <FormRow>
          <Label
            label="RFI Testing Approval Date"
            name="rfiCTApprovalDate"
            id="rfiCTApprovalDate"
            value={this.props.pm.viewRfiCTApprovalDate}
          />
          <Label
            label="RFI Testing Approval Status"
            name="rfiCTApprovalDate"
            id="rfiCTApprovalStatus"
            value={this.props.pm.viewRfiCTApprovalStatus}
          />
        </FormRow>
        <FormRow>
          <Label
            label="Layer Status"
            name="layerStatus"
            id="layerStatus"
            value={this.props.pm.viewLayerStatus}
          />
        </FormRow>
      </Modal>
    );
  }
}

export default ViewPMModel;
