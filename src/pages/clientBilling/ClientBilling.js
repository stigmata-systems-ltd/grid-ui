import React, { Component } from "react";
import ContentLoader from "../../common/ContentLoader";
import FormContainer from "../../common/forms/FormContainer";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import Button from "../../common/forms/Button";
import SimpleDropDown from "../../common/forms/SimpleDropDown";
import CheckBox from "../../common/forms/CheckBox";
import DataTable from "../../common/DataTable";
import DateInput from "../../common/forms/DateInput";
import SearchableDropDown from "../../common/forms/SearchableDropDown";
import Divider from "../../common/Divider";
import { gridNumber } from "./utils";
import { completedLayers, _clientBillingMetaData, _bodyData } from "./utils";
import Loader from "../../common/Loader";
import { getTranformedBillableTable } from "./dataTransformer";
import { transformGridList } from "../../utils/dataTransformer";

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
          size={"col-md-2"}
          label={layer.layerName}
          key={layer.id}
          onChange={(e) => this.props.onChangeBillableCheckBox(e.target.checked, layer.id)}
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
            <SearchableDropDown
              label="Grid Number"
              selectOptions={transformGridList(this.props.client.gridList)}
              onChange={(value) => this.props.handleGridSelection(value)}
              value={this.props.client.selectedGrid}
            />
          </FormRow>
          <p>Select Layers For Billing</p>
          {/* <FormRow>
            <CheckBox label="Select All" />
          </FormRow> */}
          <FormRow>{this.renderCompletedLayers()}</FormRow>
          <FormRow>
            <div class="col-sm-12">
              <Button btnText="Add" btnType="primary" onClick={this.props.onAddBillableLayers} />
            </div>
            <p class="text-danger">{this.props.client.billabelAddError}</p>
          </FormRow>
          <Divider height="3" />
          <FormRow>
            <DataTable
              metaData={_clientBillingMetaData}
              bodyData={getTranformedBillableTable(this.props.client.billableTableData)}
              showDelete={true}
              onClickDelete={(id) => this.props.deleteGridBillableTable(id)}
            />
          </FormRow>
          <Divider height="5" />
          <FormRow>
            <DateInput 
              label="Select Billing Month" 
              onChange={(e) => this.props.handleBillingMonthChange(e.target.value)}
              value={this.props.client.billingMonth}
              type={"month"}
            />
            <TextInput 
              label="Enter IPC Number" 
              onChange={(e) => this.props.handleIpcChange(e.target.value)}
              value={this.props.client.ipcNum}
            />
          </FormRow>
          <Button 
            btnText="Save" 
            btnType="primary" 
            onClick={this.props.saveClientBilling}
          />
          <Button btnText="Cancel" btnType="cancel" onClick={this.props.resetForm} />
        </FormContainer>
      </ContentLoader>
    );
  }
}

export default ClientBilling;
