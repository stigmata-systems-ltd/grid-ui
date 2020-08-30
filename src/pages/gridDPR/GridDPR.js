import React, { Component } from "react";
import ContentLoader from "../../common/ContentLoader";
import FormContainer from "../../common/forms/FormContainer";
import FormRow from "../../common/forms/FormRow";
import SimpleDropDown from "../../common/forms/SimpleDropDown";
import TabContent from "../../common/tabs/TabContent";
import TabPane from "../../common/tabs/TabPane";
import TabNavs from "../../common/tabs/TabNavs";
import DataTable from "../../common/DataTable";

import {
    gridNumber, layers, tabMetaData, subContractorTableMetaData, subContractorTableBodyData
} from "./utils";
import Cleaning from "./Cleaning";
import TextInput from "../../common/forms/TextInput";
import TextArea from "../../common/forms/TextArea";
import CheckBox from "../../common/forms/CheckBox";
import FileInput from "../../common/forms/FileInput";
import Button from "../../common/forms/Button";
import IconTextButton from "../../common/forms/IconTextButton";

class GridDPR extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedGrid: 0,
            selectedLayer: 0,
            navData: tabMetaData,
            tabPaneStatus: [
                {
                    id: 1,
                    isActive: true
                },
                {
                    id: 2,
                    isActive: false
                }
            ]
        }
    }
    handleGridSelection = (val) => {
        this.setState({ selectedGrid: val });
    }
    handleLayerSelection = (val) => {
        this.setState({ selectedLayer: val });
    }
    handleTabs = (id) => {
        this.setState({
            navData: this.state.navData.map(nav => {
                nav.id === id ? nav["isActive"] = true : nav["isActive"] = false;
                return nav;
            })
        })
        this.setState({
            tabPaneStatus: this.state.tabPaneStatus.map(tab => {
                tab.id === id ? tab["isActive"] = true : tab["isActive"] = false;
                return tab;
            })
        })
    }

    render() {
        return (
            <ContentLoader>
                <FormContainer formTitle={"Grid Daily Progress"}>
                    <TabNavs
                        navItems={this.state.navData}
                        onClick={(id) => this.handleTabs(id)}
                    />
                    <TabContent>
                        <TabPane isActive={this.state.tabPaneStatus[0].isActive}>
                            <FormRow>
                                <SimpleDropDown
                                    label="Grid Number"
                                    selectOptions={gridNumber}
                                    onChange={this.handleGridSelection}
                                    value={this.state.selectedGrid}
                                />
                                <SimpleDropDown
                                    label="Layer Number"
                                    selectOptions={layers}
                                    onChange={this.handleLayerSelection}
                                    value={this.state.selectedLayer}
                                />
                            </FormRow>
                            <FormRow>
                                <TextInput label="Date" />
                                <TextInput label="Area Of Layer" />
                            </FormRow>
                            <FormRow>
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <div class="col-sm-8">
                                            <h4>Total Quantity: 100</h4>
                                        </div>
                                        <div class="col-sm-8">
                                            <IconTextButton
                                                btnText="Add Quantity"
                                                onClick={this.handleLocationRows}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </FormRow>
                            <FormRow>
                                <DataTable
                                    metaData={subContractorTableMetaData}
                                    bodyData={subContractorTableBodyData}
                                />
                            </FormRow>
                            <FormRow>
                                <TextInput label="Fill Type" />
                                <TextInput label="Top Level Fill Material" />
                            </FormRow>
                            <FormRow>
                                <TextArea
                                    label="Material Description"
                                    size="col-md-12"
                                />
                            </FormRow>
                            <FormRow>
                                <CheckBox
                                    label="RFI Level Verification"
                                />
                                <CheckBox
                                    label="RFI Compaction Testing"
                                />
                            </FormRow>
                            <FormRow>
                                <TextInput label="RFI Number" />
                                <TextInput label="RFI Number" />
                            </FormRow>
                            <FormRow>
                                <TextInput label="Inspection Date" />
                                <TextInput label="Inspection Date" />
                            </FormRow>
                            <FormRow>
                                <TextInput label="Approval Date" />
                                <TextInput label="Approval Date" />
                            </FormRow>
                            <FormRow>
                                <TextInput label="RFI Status" />
                                <TextInput label="RFI Status" />
                            </FormRow>
                            <FormRow>
                                <TextArea
                                    label="Material Description"
                                    size="col-md-6"
                                />
                                <FileInput label="Select Documents" />
                            </FormRow>
                            <Button
                                btnText="Save"
                                btnType="primary"
                            />
                            <Button
                                btnText="Cancel"
                                btnType="cancel"
                            />
                        </TabPane>
                        {/* Cleaning Tab */}
                        <TabPane isActive={this.state.tabPaneStatus[1].isActive}>
                            <Cleaning />
                        </TabPane>
                    </TabContent>
                </FormContainer >
            </ContentLoader >
        )
    }
}

export default GridDPR;