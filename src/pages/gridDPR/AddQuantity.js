import React, { Component } from "react";
import DataTable from "../../common/DataTable";
import IconTextButton from "../../common/forms/IconTextButton";
import FormRow from "../../common/forms/FormRow";
import Modal from "../../common/Modal";
import TextInput from "../../common/forms/TextInput";
import SimpleDropDown from "../../common/forms/SimpleDropDown";
import Button from "../../common/forms/Button";
import { subContractorTableMetaData, subContractorTableBodyData, subContractorMeta } from "./utils";

class AddQuantity extends Component {

    constructor() {
        super()
        this.state = {
            showQuantityModal: false
        }
    }

    handleQuantityModalClose = () => {
        this.setState({ showQuantityModal: false });
    }
    showQuantityModal = () => {
        this.setState({ showQuantityModal: true });
    }

    render() {
        return (
            <>
                <FormRow>
                    <div class="col-md-12 quantity-card">
                        <div class="form-group row">
                            <div class="col-sm-3">
                                <h4>Total Quantity: 100</h4>
                            </div>
                            <div class="col-sm-4">
                                <h4>Num Of Sub-Contractors: 5</h4>
                            </div>
                            <div class="col-sm-5">
                                <IconTextButton
                                    btnText="Add Quantity"
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
                        <TextInput label="Quantity" />
                        <SimpleDropDown
                            label="SubContractor"
                            selectOptions={subContractorMeta}
                            onChange={this.handleLayerSelection}
                            value={this.state.selectedLayer}
                        />
                    </FormRow>
                    <Button
                        btnText="Add Sub-Contractor"
                        btnType="primary"
                    />
                    <FormRow>
                        <DataTable
                            metaData={subContractorTableMetaData}
                            bodyData={subContractorTableBodyData}
                        />
                    </FormRow>
                </Modal>
            </>
        )
    }
}

export default AddQuantity;