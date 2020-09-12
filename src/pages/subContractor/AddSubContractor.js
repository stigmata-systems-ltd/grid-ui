import React, { Component } from 'react';
import DataTable from '../../common/DataTable';
import IconTextButton from '../../common/forms/IconTextButton';
import FormRow from '../../common/forms/FormRow';
import Modal from '../../common/Modal';
import TextInput from '../../common/forms/TextInput';
import SimpleDropDown from '../../common/forms/SimpleDropDown';
import Button from '../../common/forms/Button';
import SubContractor from './SubContractor';


class AddSubContractor extends Component {
    constructor() {
        super();
        this.state = {
            showSubContractorModal: false,
        };
    }

    handleSubContractorModalClose = () => {
        this.setState({ showSubContractorModal: false });
    };
    showSubContractorModal = () => {
        this.setState({ showSubContractorModal: true });
    };

    render() {
        const subprop = this.props.scr;
        return (
            <>
                <FormRow>
                    <div class="col-md-12">
                        <div class="form-group row no-margin-bottom ">
                            <div class="col-sm-3">
                                <IconTextButton
                                    btnText="Add Sub-Contractor"
                                    onClick={this.showSubContractorModal}
                                />
                            </div>
                        </div>
                    </div>
                </FormRow>
                <Modal
                    showModal={this.state.showSubContractorModal}
                    handleClose={this.handleSubContractorModalClose}
                    size="lg"
                    title="Add Sub-Contractor"
                >
                    <FormRow>
                        <TextInput
                            label="SubContractor Name"
                            name="subName"
                            id="subName"
                            onChange={e => this.props.handleChangeSubName(e.target.value)}
                            value={subprop.subContractorName}
                        />
                        <TextInput
                            label="Vendor Code"
                            name="subCode"
                            id="subCode"
                            onChange={e => this.props.handleChangeSubCode(e.target.value)}
                            value={subprop.subContractorCode}
                        />
                    </FormRow>
                    <FormRow>
                        <TextInput
                            label="Contact Person"
                            name="subContactPerson"
                            id="subContactPerson"
                            onChange={e =>
                                this.props.handleChangesubContractorContactPerson(
                                    e.target.value
                                )
                            }
                            value={subprop.subContractorContactPerson}
                        />
                        <TextInput
                            label="Contact Address"
                            name="subContactAddress"
                            id="subContactAddress"
                            onChange={e =>
                                this.props.handleChangesubContactAddress(e.target.value)
                            }
                            value={subprop.subContractorContactAddres}
                        />
                    </FormRow>
                    <FormRow>
                        <TextInput
                            label="Sub-Contractor Phone"
                            name="subPhone"
                            id="subPhone"
                            onChange={e => this.props.handleChangesubPhone(e.target.value)}
                            value={subprop.subContractorPhone}
                        />
                        <TextInput
                            label="Sub-Contractor Email"
                            name="subEmail"
                            id="subEmail"
                            onChange={e => this.props.handleChangesubEmail(e.target.value)}
                            value={subprop.subContractorEmail}
                        />
                    </FormRow>
                    <Button
                        btnText="Save"
                        onClick={this.props.saveSubContractorData}
                        btnType="primary"
                    />
                    <Button btnText="Cancel" btnType="cancel" />

                </Modal>
            </>
        );
    }
}

export default AddSubContractor;
