import React, { Component } from "react";
import IconTextButton from "../../common/forms/IconTextButton";
import FormRow from "../../common/forms/FormRow";
import LayerDPRViewModel from "../../common/LayerDPRViewModel";
import SimpleDropDown from "../../common/forms/SimpleDropDown";
import DateInput from "../../common/forms/DateInput";
import TextInput from "../../common/forms/TextInput";
import LayerDPRViewDataTable from "../../common/LayerDPRViewDataTable";



class LayerViewModel extends Component {
    constructor() {
        super();
        this.state = {
            showLayerViewModal: false,
        };
    }

    handleLayerViewModalClose = () => {
        this.setState({ showLayerViewModal: false });
    };
    showLayerViewModal = () => {
        this.setState({ showLayerViewModal: true });
    };

    render() {
        return (
            <>
                <FormRow>
                    <div class="col-md-12 quantity-card">
                        <div class="form-group row no-margin-bottom ">
                            <div class="col-sm-3">
                                <IconTextButton
                                    btnText="View"
                                    onClick={this.showLayerViewModal}
                                />
                            </div>

                        </div>
                    </div>
                </FormRow>


                <LayerDPRViewModel
                    showModal={this.state.showLayerViewModal}
                    handleClose={this.handleLayerViewModalClose}
                    size="lg"
                    title="View Layer DPR Details"
                >

                    <FormRow>
                        <TextInput label="Grid Number" />
                        <TextInput label="Layer Number" />
                    </FormRow>
                    <FormRow>
                        <TextInput label="Date of Filing" />
                        <TextInput label="Area Of Layer (Sqm)" />
                    </FormRow>
                    <FormRow>
                        <TextInput label="Top Level Fill Metrials" />
                        <TextInput label="Meterial Description" />
                    </FormRow>
                    <FormRow>
                        <LayerDPRViewDataTable />

                    </FormRow>




                </LayerDPRViewModel>
            </>
        );
    }
}

export default LayerViewModel;
