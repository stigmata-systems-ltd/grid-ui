import React, { Component } from 'react';
import DataTable from '../../common/DataTable';
import IconTextButton from '../../common/forms/IconTextButton';
import FormRow from '../../common/forms/FormRow';
import Modal from '../../common/Modal';
import TextInput from '../../common/forms/TextInput';
import SimpleDropDown from '../../common/forms/SimpleDropDown';
import Button from '../../common/forms/Button';
import {
  subContractorTableMetaData,
  subContractorTableBodyData,
  subContractorMeta,
} from './utils';

class UpdateSCRModel extends Component {
  constructor() {
    super();
    this.state = {
      UpdateSCRModel: false,
    };
  }

  handleQuantityModalClose = () => {
    this.setState({ UpdateSCRModel: false });
  };
  showQuantityModal = () => {
    this.setState({ UpdateSCRModel: true });
  };

  render() {
    return (
      <>
        <FormRow>
          <div class="col-md-12 quantity-card">
            <div class="form-group row no-margin-bottom ">
              <div class="col-sm-3">
                <IconTextButton
                  btnText="Edit"
                  onClick={this.showQuantityModal}
                />
              </div>
            </div>
          </div>
        </FormRow>
        <Modal
          showModal={this.state.showQuantityModal}
          handleClose={this.handleQuantityModalClose}
          size="lg"
          title="Add Sub-Contractor"
        >
          <FormRow>
            <TextInput
              label="Quantity"
              onChange={e => this.props.quantityChange(e)}
              value={this.props.quantity}
            />
            <SimpleDropDown
              label="SubContractor"
              selectOptions={this.props.subContractorList}
              onChange={e => this.props.onSubContractorChange(e)}
              value={this.props.subContractorName}
            />
          </FormRow>
          <Button
            btnText="Add Sub-Contractor"
            btnType="primary"
            onClick={this.props.addQuantity}
          />
          <FormRow>
            <DataTable
              metaData={subContractorTableMetaData}
              bodyData={this.props.quantityData}
              onClickDelete={rowIndex => this.props.deleteQuantity(rowIndex)}
              onClickEdit={rowIndex => this.props.editQuantity(rowIndex)}
              isShowEdit={false}
            />
          </FormRow>
        </Modal>
      </>
    );
  }
}

export default UpdateSCRModel;
