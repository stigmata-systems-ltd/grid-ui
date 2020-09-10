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
import ButtonSubmit from "../../common/forms/ButtonSubmit";





class ClientBilling extends Component {

    constructor() {
        super()
        this.state = {
            selectedGrid: 0,
            optionsChecked: [],
        }

    }


    //change event
    changeEvent(event) {

        let checkedArray = this.state.optionsChecked;
        let selectedValue = event.target.value;

        if (event.target.checked === true) {

            checkedArray.push(selectedValue);
            this.setState({
                optionsChecked: checkedArray
            });

        } else {

            let valueIndex = checkedArray.indexOf(selectedValue);
            checkedArray.splice(valueIndex, 1);

            this.setState({
                optionsChecked: checkedArray
            });

        }

    }

    //end event


    // renderCompletedLayers = () => {
    //     let compLayers = this.state.selectedGrid % 2 === 0 ? completedLayers.grid1 : completedLayers.grid2;
    //     return compLayers.map(layer => <CheckBox
    //         label={layer}
    //     />)
    // }

    renderCompletedLayers = () => {
        let compLayers = this.state.selectedGrid % 2 === 0 ? completedLayers.grid1 : completedLayers.grid2;
        return compLayers.map(function (string, i) {
            return (

                <CheckBox value={string} id={'string_' + i} onChange={this.changeEvent.bind(this)} label={string} />

            )
        }, this);

    }



    handleGridSelection = (e) => {
        this.setState({ selectedGrid: e.target.value });

    }

    triggerDelete(task, index) {
        if (window.confirm("Are you sure you want to delete this task?")) {
            let taskList = [...this.state.taskList]
            taskList.splice(index, 1);
            this.setState({ taskList: taskList })
        }
    }

    componentDidMount() {
        this.props.fetchGridNoDataForClientBilling();

    }



    render() {

       
        return (

            <ContentLoader>

                <FormContainer formTitle={"Client Billing"}>
                    <FormRow>
                        <SimpleDropDown
                            label="Grid Number"
                            selectOptions={this.props.grid.gridNoData}
                            // onChange={this.handleGridSelection}
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
                    <br />
                    <FormRow>
                        <div class="col-sm-12">
                            <Button
                                btnText="Add"
                                btnType="primary"
                            />
                        </div>
                    </FormRow>
                    <FormRow>
                        <div style={{ marginLeft: "300px" }}>
                            <h4>Total Selected Layers : 16</h4>
                        </div>
                    </FormRow>
                    <form >
                        <FormRow>
                            <DataTable
                                metaData={_clientBillingMetaData}
                                bodyData={_bodyData}
                                showRowDelete={true}
                                name="data"
                               
                            />
                            {/* {JSON.stringify(this.state.optionsChecked)} */}
                        </FormRow>

                        <FormRow>
                            <TextInput
                                label="Select Billing Month"
                                name="billing_month"
                                
                            />
                            <TextInput
                                label="Enter IPC Number"
                                name="ipc_number"
                                
                            />
                        </FormRow>
                        <ButtonSubmit
                            btnText="Save"
                            btnType="primary"
                        />
                        <Button
                            btnText="Cancel"
                            btnType="cancel"
                        />
                    </form>
                </FormContainer>
            </ContentLoader>
        );
    }
}

export default ClientBilling;