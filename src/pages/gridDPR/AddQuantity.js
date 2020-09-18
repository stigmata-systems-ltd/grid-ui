import React, { Component } from 'react';
import DataTable from '../../common/DataTable';
import IconTextButton from '../../common/forms/IconTextButton';
import FormRow from '../../common/forms/FormRow';
import Modal from '../../common/Modal';
import TextInput from '../../common/forms/TextInput';
import SearchableDropDown from '../../common/forms/SearchableDropDown';
import Button from '../../common/forms/Button';
import {
  subContractorTableMetaData,
  transformSubCatList,
  transformSubCatTable,
} from './utils';

class AddQuantity extends Component {
  constructor() {
    super();
    this.state = {
      showQuantityModal: false,
    };
  }

  handleQuantityModalClose = () => {
    this.setState({ showQuantityModal: false });
  };
  showQuantityModal = () => {
    this.setState({ showQuantityModal: true });
  };

  render() {
    return (
      <>
        <FormRow>
          <div class="col-md-12 quantity-card">
            <div class="form-group row no-margin-bottom ">
              <div class="col-sm-3">
                <IconTextButton
                  btnText="Add Quantity"
                  onClick={this.showQuantityModal}
                />
              </div>
              <div class="col-sm-3">
                <h5>Total Quantity: {this.props.totalQuantity}</h5>
              </div>
              <div class="col-sm-4">
                <h5>Num Of Sub-Contractors: {this.props.totalSubContractor}</h5>
              </div>
            </div>
          </div>
        </FormRow>
        <Modal
          showModal={this.state.showQuantityModal}
          handleClose={this.handleQuantityModalClose}
          size="lg"
          title="Add Sub-Contractor"
          isShowFooter={false}
        >
          <FormRow>
            <TextInput
              label="Quantity"
              labelSize="col-sm-4"
              fieldSize="col-sm-8"
              onChange={e => this.props.quantityChange(e)}
              value={this.props.quantity}
            />
            <SearchableDropDown
              label="SubContractor"
              labelSize="col-sm-4"
              fieldSize="col-sm-8"
              selectOptions={transformSubCatList(this.props.subContractorList)}
              onChange={valueObj => this.props.onSubContractorChange(valueObj)}
              value={this.props.subContractorName}
            />
          </FormRow>
          {this.props.isAddSubContError &&
          <p className="text-danger">{this.props.addSubContErrorMsg}</p>}
          <Button
            btnText="Add Sub-Contractor"
            btnType="primary"
            onClick={this.props.addQuantity}
          />
          <FormRow>
            <DataTable
              metaData={subContractorTableMetaData}
              bodyData={transformSubCatTable(this.props.quantityData)}
              onClickDelete={(id, rowIndex) => this.props.deleteQuantity(rowIndex)}
              showDelete={true}
            />
          </FormRow>
        </Modal>
      </>
    );
  }
}

export default AddQuantity;
