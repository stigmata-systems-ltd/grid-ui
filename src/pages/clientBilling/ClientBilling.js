import React, { Component } from "react";
import ContentLoader from "../../common/ContentLoader";
import FormContainer from "../../common/forms/FormContainer";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import Button from "../../common/forms/Button";
import SimpleDropDown from "../../common/forms/SimpleDropDown";
import CheckBox from "../../common/forms/CheckBox";
import DataTable from "../../common/DataTable";

import { gridNumber } from "./utils";
import { completedLayers, _clientBillingMetaData, _bodyData } from "./utils";

class ClientBilling extends Component {

    constructor() {
        super()
        this.state = {
            selectedGrid: 0,
        }
    }


    renderCompletedLayers = () => {
        let compLayers = this.state.selectedGrid % 2 === 0 ? completedLayers.grid1 : completedLayers.grid2;
        return compLayers.map(layer => <CheckBox
            label={layer}
        />)
    }
    handleGridSelection = (e) => {
        this.setState({ selectedGrid: e.target.value })
    }

    render() {
        return (
            <ContentLoader>
                <FormContainer formTitle={"Client Billing"}>
                    <FormRow>
                        <SimpleDropDown
                            label="Grid Number"
                            selectOptions={gridNumber}
                            onChange={this.handleGridSelection}
                            value={this.state.selectedGrid}
                        />
                    </FormRow>
                    <p>Select Completed Layers</p>
                    <FormRow>
                        <CheckBox
                            label="Select All"
                        />
                    </FormRow>
                    <FormRow>
                        {this.renderCompletedLayers()}
                    </FormRow>
                    <FormRow>
                        <div class="col-sm-12">
                            <Button
                                btnText="Add"
                                btnType="primary"
                            />
                        </div>
                    </FormRow>
                    <FormRow>
                        <DataTable
                            metaData={_clientBillingMetaData}
                            bodyData={_bodyData}
                            showRowDelete={true}
                        />
                    </FormRow>
                    <FormRow>
                        <TextInput
                            label="Select Billing Month"
                        />
                        <TextInput
                            label="Enter IPC Number"
                        />
                    </FormRow>
                    <Button
                        btnText="Save"
                        btnType="primary"
                    />
                    <Button
                        btnText="Cancel"
                        btnType="cancel"
                    />
                </FormContainer>
            </ContentLoader>
        )
    }
}

export default ClientBilling;