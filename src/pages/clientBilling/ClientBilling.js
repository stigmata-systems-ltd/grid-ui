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
import Loader from "../../common/Loader";

class ClientBilling extends Component {
  constructor() {
    super();
    this.state = {
      selectedGrid: 0,
    };
  }
  componentDidMount = () => {
    this.props.getGridList();
  };

  renderCompletedLayers = () => {
    let billableLayers = this.props.client.billableLayers;
    if (billableLayers && billableLayers.length > 0) {
      return billableLayers.map((layer) => (
        <CheckBox 
          label={layer.layerName} 
          onChange={this.props.onChangeBillableCheckBox}
          checked={this.props.checked}
        />
      ));
    } else {
      return (
        <p class="text-danger">No Billable Layers found for this Grid</p>
      );
    }
  };
  handleGridSelection = (e) => {
    this.setState({ selectedGrid: e.target.value });
  };

  triggerDelete(task, index) {
    if (window.confirm("Are you sure you want to delete this task?")) {
      let taskList = [...this.state.taskList];
      taskList.splice(index, 1);
      this.setState({ taskList: taskList });
    }
  }

  componentDidMount() {
    this.props.fetchGridNoData();
  }

  render() {
    return (
      <ContentLoader>
        {this.props.client.isLoading && <Loader />}
        <FormContainer formTitle={"Client Billing"}>
          <FormRow>
            <SimpleDropDown
              label="Grid Number"
              selectOptions={this.props.client.gridList}
              onChange={(e) => this.props.handleGridSelection(e.target.value)}
              value={this.props.client.selectedGrid}
            />
          </FormRow>
          <p>Select Layers For Billing</p>
          <FormRow>
            <CheckBox label="Select All" />
          </FormRow>
          <FormRow>{this.renderCompletedLayers()}</FormRow>
          <FormRow>
            <div class="col-sm-12">
              <Button btnText="Add" btnType="primary" />
            </div>
          </FormRow>
          <FormRow>
            <DataTable
              metaData={_clientBillingMetaData}
              bodyData={_bodyData}
              showDelete={true}
            />
          </FormRow>

          <FormRow>
            <TextInput label="Select Billing Month" />
            <TextInput label="Enter IPC Number" />
          </FormRow>
          <Button btnText="Save" btnType="primary" />
          <Button btnText="Cancel" btnType="cancel" />
        </FormContainer>
      </ContentLoader>
    );
  }
}

export default ClientBilling;
